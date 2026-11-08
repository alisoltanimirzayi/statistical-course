/* Statistics, Connected | Chapter 04 — Problem of Points | no dependencies */
(function(global) {
  'use strict';
  const words = {
    en: {title:'The unfinished game',sub:'First to the target number of wins takes the entire prize. How should the prize be divided if play stops now?',target:'Wins needed',a:'A wins so far',b:'B wins so far',prob:'A’s chance per round',pot:'Total prize',tree:'Unplayed futures',back:'Work backward',value:'Present value of A’s position',winA:'A eventually wins',winB:'B eventually wins',shares:'Fair division by expected monetary value',playerA:'Player A',playerB:'Player B',nextA:'A wins next round',nextB:'B wins next round',terminalA:'A has won the game',terminalB:'B has won the game',continue:'Game continues',current:'Current score',theory:'Exact probability',estimate:'Observed results',sim1:'Simulate once',sim100:'Simulate 100',sim1000:'Simulate 1,000',reset:'Reset simulations',trials:'Completions',awins:'A wins',note:'These are probabilities under the selected model, not guaranteed outcomes. Fair division here means expected monetary value, not a judgment about every person’s risk preferences.',explain:'The value of a non-terminal position is the probability-weighted average of the two next-state values.',end:'Already finished',step:'One-step values',nonFair:'Changing the win probability changes the model, not the score.',treeHeading:'Two immediate possible futures'},
    fa: {title:'بازی ناتمام',sub:'نخستین بازیکنی که به تعداد بردهای لازم برسد، همهٔ جایزه را می‌برد. اگر بازی همین حالا متوقف شود، سهم هر نفر چقدر است؟',target:'بردهای لازم برای پیروزی',a:'بردهای فعلی الف',b:'بردهای فعلی ب',prob:'شانس برد الف در هر دور',pot:'مجموع جایزه',tree:'آینده‌های ممکن',back:'محاسبه از پایان',value:'ارزش فعلی موقعیت الف',winA:'احتمال برد نهایی الف',winB:'احتمال برد نهایی ب',shares:'تقسیم بر پایهٔ امید ریاضیِ پولی',playerA:'بازیکن الف',playerB:'بازیکن ب',nextA:'الف دور بعد را می‌برد',nextB:'ب دور بعد را می‌برد',terminalA:'الف برندهٔ نهایی شده است',terminalB:'ب برندهٔ نهایی شده است',continue:'بازی ادامه دارد',current:'نتیجهٔ فعلی',theory:'احتمال دقیق',estimate:'نتیجهٔ شبیه‌سازی',sim1:'یک بار شبیه‌سازی',sim100:'۱۰۰ بار',sim1000:'۱۰۰۰ بار',reset:'پاک‌کردن شبیه‌سازی',trials:'تعداد بازی‌های تکمیل‌شده',awins:'بردهای الف',note:'این اعداد احتمال‌های حاصل از مدل‌اند، نه نتیجه‌هایی تضمین‌شده. تقسیم بر اساس امید پولی، الزاماً با ترجیحِ خطرپذیری همهٔ افراد یکسان نیست.',explain:'ارزش یک وضعیت ناتمام برابر است با میانگینِ وزن‌دارِ ارزشِ دو وضعیتِ ممکنِ دور بعد.',end:'بازی پیش‌تر تمام شده است',step:'ارزش گام بعد',nonFair:'با تغییر احتمال برد، مدل عوض می‌شود؛ نه امتیازهای گذشته.',treeHeading:'دو آیندهٔ ممکن در دور بعد'}
  };
  function probability(target, a, b, p, memo = new Map()) {
    if (a >= target) return 1;
    if (b >= target) return 0;
    const key = `${target}|${a}|${b}|${p}`;
    if (memo.has(key)) return memo.get(key);
    const ans = p*probability(target,a+1,b,p,memo)+(1-p)*probability(target,a,b+1,p,memo);
    memo.set(key,ans);return ans;
  }
  function exactByEnumeration(target,a,b,p) {
    // For QA only: all potential fair/biased trajectories to the first absorbing win.
    if(a>=target)return 1;if(b>=target)return 0;
    return p*exactByEnumeration(target,a+1,b,p)+(1-p)*exactByEnumeration(target,a,b+1,p);
  }
  function simulate(target,a,b,p,random=Math.random) {
    let aa=a,bb=b;
    while(aa<target&&bb<target) { if(random()<p)aa++;else bb++; }
    return aa>=target;
  }
  const escapeHTML = s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function create(selector, options={}) {
    const root = typeof selector==='string'?document.querySelector(selector):selector;
    if(!root) throw Error('PointsLab: mount not found');
    if(root.__pointsLab) root.__pointsLab.destroy();
    const state={lang:options.lang==='fa'?'fa':'en',target:3,a:2,b:1,p:0.5,pot:80,mode:'tree',trials:0,awin:0};
    const currency=n=>(Math.round((n+Number.EPSILON)*100)/100).toLocaleString(state.lang==='fa'?'fa-IR':'en-US',{maximumFractionDigits:2});
    const percent=n=>(100*n).toLocaleString(state.lang==='fa'?'fa-IR':'en-US',{minimumFractionDigits:1,maximumFractionDigits:1})+(state.lang==='fa'?'٪':'%');
    function values() {const a=probability(state.target,state.a,state.b,state.p);return {pa:a,pb:1-a,va:state.pot*a,vb:state.pot*(1-a)};}
    function field(id,label,min,max,value,step=1){return `<label class="pl-field"><span>${escapeHTML(label)} <output data-output="${id}">${id==='p'?percent(state.p):currency(value)}</output></span><input data-change="${id}" type="range" min="${min}" max="${max}" step="${step}" value="${value}" aria-label="${escapeHTML(label)}"></label>`;}
    function branch(label,nextA,nextB,weight) {
      const t=words[state.lang],ended=nextA>=state.target||nextB>=state.target;
      const v=probability(state.target,nextA,nextB,state.p)*state.pot;
      return `<div class="pl-branch"><b>${escapeHTML(label)}</b><span>${percent(weight)}</span><small>${ended?(nextA>=state.target?t.terminalA:t.terminalB):t.continue} · ${currency(v)} </small></div>`;
    }
    function render() {
      const active=root.contains(document.activeElement)?document.activeElement:null;
      const key=active&&['data-change','data-mode','data-sim','data-reset'].find(k=>active.hasAttribute(k));
      const focus=key?`[${key}="${active.getAttribute(key)}"]`:null;
      const t=words[state.lang],v=values();root.lang=state.lang;root.dir=state.lang==='fa'?'rtl':'ltr';root.classList.add('points-lab');
      root.innerHTML=`<div class="pl-shell"><header class="pl-header"><div class="pl-eyebrow">${state.lang==='fa'?'۱۶۵۴ · پاسکال و فرما':'1654 · PASCAL × FERMAT'}</div><h3>${t.title}</h3><p>${t.sub}</p><p>${t.current}: ${t.playerA} <b>${currency(state.a)}</b> · ${t.playerB} <b>${currency(state.b)}</b></p></header>
        <div class="pl-grid"><div class="pl-controls">
        ${field('target',t.target,2,7,state.target)}
        ${field('a',t.a,0,state.target-1,state.a)}
        ${field('b',t.b,0,state.target-1,state.b)}
        ${field('p',t.prob,0,100,Math.round(state.p*100))}
        ${field('pot',t.pot,20,500,state.pot,10)}
        <div class="pl-mode" role="group" aria-label="${t.step}"><button type="button" data-mode="tree" aria-pressed="${state.mode==='tree'}">${t.tree}</button><button type="button" data-mode="back" aria-pressed="${state.mode==='back'}">${t.back}</button></div></div>
        <div class="pl-view"><div class="pl-summary"><div><small>${t.winA}</small><strong>${percent(v.pa)}</strong></div><div><small>${t.winB}</small><strong>${percent(v.pb)}</strong></div></div>
        <div class="pl-share"><div class="pl-share-a" style="width:${(100*v.pa).toFixed(5)}%"></div><div class="pl-share-b"></div></div>
        <div class="pl-money"><div><small>${t.playerA}</small><b>${currency(v.va)}</b></div><div><small>${t.playerB}</small><b>${currency(v.vb)}</b></div></div>
        <h4>${state.mode==='tree'?t.treeHeading:t.step}</h4>
        <div class="pl-branches">${branch(t.nextA,state.a+1,state.b,state.p)}${branch(t.nextB,state.a,state.b+1,1-state.p)}</div>
        ${state.mode==='back'?`<p class="pl-equation" dir="ltr">V(${currency(state.a)}, ${currency(state.b)}) = ${currency(state.p)} × ${currency(probability(state.target,state.a+1,state.b,state.p)*state.pot)} + ${currency(1-state.p)} × ${currency(probability(state.target,state.a,state.b+1,state.p)*state.pot)} = ${currency(v.va)}</p><p>${t.explain}</p>`:''}</div></div>
        <section class="pl-simulation"><h4>${t.estimate}</h4><div class="pl-actions"><button data-sim="1">${t.sim1}</button><button data-sim="100">${t.sim100}</button><button data-sim="1000">${t.sim1000}</button><button data-reset="1">${t.reset}</button></div><p role="status" aria-live="polite">${t.trials}: <b>${currency(state.trials)}</b> · ${t.awins}: <b>${currency(state.awin)}</b> · ${t.estimate}: <b>${state.trials?percent(state.awin/state.trials):'—'}</b> · ${t.theory}: <b>${percent(v.pa)}</b></p></section><p class="pl-note">${t.note}</p></div>`;
      if(focus)root.querySelector(focus)?.focus({preventScroll:true});
    }
    function onEvent(e) {
      const input=e.target.closest('[data-change]');
      if(input&&root.contains(input)&&e.type==='change') {
        const k=input.dataset.change, n=Number(input.value);
        if(k==='p')state.p=n/100;else state[k]=n;
        if(k==='target') {state.a=Math.min(state.a,state.target-1);state.b=Math.min(state.b,state.target-1);}
        state.trials=0;state.awin=0;render();return;
      }
      const mode=e.target.closest('[data-mode]');if(mode&&root.contains(mode)){state.mode=mode.dataset.mode;render();return;}
      const sim=e.target.closest('[data-sim]');if(sim&&root.contains(sim)) {let n=Number(sim.dataset.sim);for(let i=0;i<n;i++)state.awin+=Number(simulate(state.target,state.a,state.b,state.p));state.trials+=n;render();return;}
      const reset=e.target.closest('[data-reset]');if(reset&&root.contains(reset)){state.trials=0;state.awin=0;render();}
    }
    function onPreview(e) {const el=e.target.closest('[data-change]');if(!el||!root.contains(el))return;const out=root.querySelector(`[data-output="${el.dataset.change}"]`);if(out)out.textContent=el.dataset.change==='p'?percent(Number(el.value)/100):currency(Number(el.value));}
    root.addEventListener('change',onEvent);root.addEventListener('click',onEvent);root.addEventListener('input',onPreview);render();root.__pointsLab={setLanguage(lang){state.lang=lang==='fa'?'fa':'en';render();},getState(){return {...state};},setState(next){
      const old={...state};Object.assign(state,next);
      const bounded=(v,min,max,fallback)=>Number.isFinite(Number(v))?Math.max(min,Math.min(max,Number(v))):fallback;
      state.target=Math.round(bounded(state.target,2,7,3));state.a=Math.round(bounded(state.a,0,state.target-1,0));state.b=Math.round(bounded(state.b,0,state.target-1,0));state.p=bounded(state.p,0,1,.5);state.pot=Math.round(bounded(state.pot,20,500,80)/10)*10;state.lang=state.lang==='fa'?'fa':'en';state.mode=state.mode==='back'?'back':'tree';
      if(['target','a','b','p','pot'].some(k=>old[k]!==state[k])&&!Object.hasOwn(next,'trials')){state.trials=0;state.awin=0;}
      state.trials=Math.floor(bounded(state.trials,0,Number.MAX_SAFE_INTEGER,0));state.awin=Math.floor(bounded(state.awin,0,state.trials,0));render();
    },destroy(){root.removeEventListener('change',onEvent);root.removeEventListener('click',onEvent);root.removeEventListener('input',onPreview);root.innerHTML='';root.__pointsLab=null;}};
    return root.__pointsLab;
  }
  global.StatisticsPointsLab={create,probability,simulate,exactByEnumeration};
})(window);
