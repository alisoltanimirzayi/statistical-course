/* Statistics, Connected — Chapter 03 dice explorer. No dependencies. */
(function (root) {
  'use strict';
  const PAIRS = Array.from({length:36},(_,i)=>({a:Math.floor(i/6)+1,b:i%6+1}));
  const BASE = {en:{title:'Look beneath the totals',intro:'Choose a sum. Every square represents one equally likely ordered pair of fair, independent dice.',sum:'Target sum',roll1:'Roll once',roll6:'Roll 6',roll100:'Roll 100',roll1000:'Roll 1,000',reset:'Reset',theory:'Theoretical chance',observed:'Observed frequency',trials:'Throws',hits:'Matches',matrix:'All 36 ordered pairs',bars:'Number of pairs by sum',q:'Must a 7 occur exactly once in the next six throws?',yes:'Yes',no:'Not necessarily',feedback:'No. One in six is a probability per throw, not a promise about six throws.',empty:'—',score:'Outcome',sumtext:'Sum',next:'A previous miss does not change the next independent throw.'},fa:{title:'آنچه پشتِ مجموع‌ها پنهان است',intro:'یک مجموع را انتخاب کنید. هر خانه، یکی از ۳۶ زوج مرتبِ هم‌احتمالِ دو تاس سالم و مستقل است.',sum:'مجموع موردنظر',roll1:'یک پرتاب',roll6:'۶ پرتاب',roll100:'۱۰۰ پرتاب',roll1000:'۱۰۰۰ پرتاب',reset:'بازنشانی',theory:'احتمال نظری',observed:'فراوانی مشاهده‌شده',trials:'تعداد پرتاب‌ها',hits:'دفعات وقوع',matrix:'۳۶ زوج مرتب',bars:'تعداد حالت‌ها برای هر مجموع',q:'آیا در شش پرتاب بعدی، حتماً دقیقاً یک‌بار ۷ می‌آید؟',yes:'بله',no:'خیر',feedback:'خیر. یک‌ششم احتمال هر پرتاب است، نه وعده‌ای دربارهٔ شش پرتاب.',empty:'—',score:'نتیجه',sumtext:'مجموع',next:'نرسیدن به عدد ۷ در پرتاب‌های پیشین، احتمال آن را در پرتاب مستقل بعدی تغییر نمی‌دهد.'}};
  const toFa=v=>String(v).replace(/\d/g,n=>'۰۱۲۳۴۵۶۷۸۹'[Number(n)]);
  function create(container,{lang='en'}={}) {
    if(typeof container==='string') container=document.querySelector(container);
    if(!container) throw new Error('Chance lab mount not found');
    const state={lang:lang==='fa'?'fa':'en',sum:7,counts:Array(11).fill(0),n:0,last:null,batch:[],answered:false};
    const number=v=>state.lang==='fa'?toFa(v):String(v);
    const t=()=>BASE[state.lang];
    const outcomes=()=>PAIRS.filter(p=>p.a+p.b===state.sum).length;
    const hits=()=>state.counts[state.sum-2];
    const pct=(v)=>state.lang==='fa'?toFa(v.toFixed(1)).replace('.', '٫')+'٪':v.toFixed(1)+'%';
    const esc=s=>String(s).replace(/[&<>\"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
    function draw(){
      const active=document.activeElement?.closest('[data-action],[data-select]');const focus=active&&container.contains(active)?{action:active.dataset.action,n:active.dataset.n,select:active.dataset.select,choice:active.dataset.choice}:null;
      const L=t(), fav=outcomes(), e=state.n?hits()/state.n:null;
      container.lang=state.lang;container.dir=state.lang==='fa'?'rtl':'ltr';
      container.classList.add('chance-lab');
      const labels=state.lang==='fa'?{axes:'سطر: تاس سفید؛ ستون: تاس سیاه. هرکدام از ۱ تا ۶، از بالا و چپ.',theory:'تعداد نظری حالت‌ها',observed:'بسامد نسبی مشاهده‌شده',recent:'شش نتیجهٔ اخیر',prompt:'بازیکنان یازده مجموع می‌دیدند؛ ریاضیات سی‌وشش زوج می‌بیند. مجموعی را انتخاب کنید و راه‌های رسیدن به آن را ببینید.',selected:'انتخاب‌شده'}:{axes:'Rows: ivory die; columns: dark die. Both run from 1 to 6, from the top and left.',theory:'Theoretical outcome count',observed:'Observed relative frequency',recent:'Six most recent outcomes',prompt:'The players saw eleven possible sums. The mathematics sees thirty-six possible pairs. Choose a total and watch how its hidden routes light up.',selected:'Selected'};
      const max=Math.max(6/36,...state.counts.map(c=>state.n?c/state.n:0));
      container.innerHTML=`<div class="chance-lab-head"><h3>${L.title}</h3><p>${labels.prompt}</p><p>${L.intro}</p></div>
      <div class="chance-lab-layout"><div class="chance-panel"><label for="chanceSum">${L.sum}</label><select id="chanceSum" data-action="sum">${Array.from({length:11},(_,i)=>`<option value="${i+2}" ${i+2===state.sum?'selected':''}>${number(i+2)}</option>`).join('')}</select>
      <p class="chance-small-title">${L.matrix}</p><p class="chance-axes">${labels.axes}</p><div class="chance-matrix" role="table" aria-label="${esc(L.matrix)}">${PAIRS.map((p,i)=>`${i%6===0?'<div role="row" class="chance-matrix-row">':''}<span class="chance-cell ${p.a+p.b===state.sum?'is-hit':''}" role="cell" aria-current="${p.a+p.b===state.sum}" data-a="${p.a}" data-b="${p.b}" aria-label="(${number(p.a)}, ${number(p.b)}) = ${number(p.a+p.b)}" title="(${p.a}, ${p.b})">${number(p.a+p.b)}${p.a+p.b===state.sum?'<span class="chance-tick" aria-hidden="true">✓</span>':''}</span>${i%6===5?'</div>':''}`).join('')}</div>
      <p class="chance-small-title">${L.bars}</p><p class="chance-legend"><span>▰ ${labels.theory}</span><span>▥ ${labels.observed}</span></p><div class="chance-bars" aria-label="${esc(L.bars)}">${Array.from({length:11},(_,i)=>{let n=i+2,c=PAIRS.filter(p=>p.a+p.b===n).length;return `<button type="button" data-select="${n}" data-count="${c}" aria-pressed="${n===state.sum}" class="chance-bar-item ${n===state.sum?'is-selected':''}" aria-label="${esc(L.sumtext)} ${number(n)}; ${labels.theory}: ${number(c)} / ${number(36)}; ${labels.observed}: ${state.n?pct(state.counts[i]/state.n*100):L.empty}"><span class="chance-bar-count">${number(c)}</span><span class="chance-bar-track"><span class="chance-bar" style="height:${c/36/max*100}%"></span>${state.n?`<span class="chance-observed-bar" style="height:${state.counts[i]/state.n/max*100}%"></span>`:''}</span><span>${number(n)}</span></button>`}).join('')}</div></div>
      <div class="chance-panel"><div class="chance-metrics"><div><small>${L.theory}</small><strong>${pct(fav/36*100)}</strong><span>${number(fav)} / ${number(36)}</span></div><div><small>${L.observed}</small><strong>${e===null?L.empty:pct(e*100)}</strong><span>${number(hits())} / ${number(state.n)}</span></div></div>
      <div class="chance-question"><p>${L.q}</p><div><button type="button" data-action="answer" data-choice="yes">${L.yes}</button><button type="button" data-action="answer" data-choice="no">${L.no}</button></div>${state.answered?`<p class="chance-answer" role="status">${L.feedback}</p>`:''}</div><div class="chance-controls"><button type="button" ${state.answered?'':'disabled'} data-action="roll" data-n="1">${L.roll1}</button><button type="button" ${state.answered?'':'disabled'} data-action="roll" data-n="6">${L.roll6}</button><button type="button" ${state.answered?'':'disabled'} data-action="roll" data-n="100">${L.roll100}</button><button type="button" ${state.answered?'':'disabled'} data-action="roll" data-n="1000">${L.roll1000}</button><button type="button" data-action="reset" class="chance-light">${L.reset}</button></div>
      <div class="chance-outcome" role="status" aria-live="polite" aria-atomic="true"><small>${L.trials}: ${number(state.n)}</small><small>${L.hits}: ${number(hits())}</small>${state.last?`<strong>${L.score}: <bdi dir="ltr">(${number(state.last[0])}, ${number(state.last[1])}) = ${number(state.last[0]+state.last[1])}</bdi></strong>`:''}</div>
      <div class="chance-recent"><small>${labels.recent}</small><ol dir="ltr">${state.batch.map(p=>`<li>(${number(p[0])}, ${number(p[1])}) = ${number(p[0]+p[1])}</li>`).join('')}</ol></div><p class="chance-footnote">${L.next}</p></div></div>`;
      if(focus){const el=[...container.querySelectorAll('[data-action],[data-select]')].find(el=>el.dataset.action===focus.action&&el.dataset.n===focus.n&&el.dataset.select===focus.select&&el.dataset.choice===focus.choice);el?.focus({preventScroll:true});}
    }
    function roll(n){for(let i=0;i<n;i++){const a=1+Math.floor(Math.random()*6),b=1+Math.floor(Math.random()*6);state.counts[a+b-2]++;state.n++;state.last=[a,b];state.batch.push([a,b]);if(state.batch.length>6)state.batch.shift();}draw()}
    const click=e=>{
      const el=e.target.closest('[data-action],[data-select]');if(!el||!container.contains(el))return;
      if(el.dataset.select){state.sum=Number(el.dataset.select);draw();return;}
      switch(el.dataset.action){case 'roll':roll(Number(el.dataset.n));break;case 'reset':state.counts.fill(0);state.n=0;state.last=null;state.batch=[];state.answered=false;draw();break;case 'answer':state.answered=true;draw();break;}
    };
    const change=e=>{if(e.target.dataset.action==='sum'){state.sum=Number(e.target.value);draw()}};
    container.addEventListener('click',click);container.addEventListener('change',change);
    draw();
    return {setLanguage(value){state.lang=value==='fa'?'fa':'en';draw()},getState(){return {sum:state.sum,counts:state.counts.slice(),trials:state.n,lang:state.lang,last:state.last?.slice()||null,batch:state.batch.map(p=>p.slice())}},roll,destroy(){container.removeEventListener('click',click);container.removeEventListener('change',change);},reset(){state.counts.fill(0);state.n=0;state.last=null;state.batch=[];state.answered=false;draw()}};
  }
  root.StatisticsChanceLab={create,PAIRS};
})(window);
