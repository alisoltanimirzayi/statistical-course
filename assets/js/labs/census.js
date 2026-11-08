/* Statistics Connected Chapter 01 — standalone bilingual census interactives.
   Include after the lesson content: <script defer src="assets/js/labs/census.js"></script>
   Add <div id="sc-census-labs"></div> at narrative insertion point.
   Integrator can split the two blocks into separate insertion positions using
   <div id="sc-residence-lab"></div> and <div id="sc-coverage-lab"></div>.
   No libraries, fonts or network calls required. */
(() => {
  'use strict';
  const people = [
    {id:'A',present:true,usual:true}, {id:'B',present:true,usual:true},
    {id:'C',present:true,usual:false}, {id:'D',present:false,usual:true},
    {id:'E',present:true,usual:true}, {id:'F',present:false,usual:true},
    {id:'G',present:true,usual:false}, {id:'H',present:true,usual:true},
    {id:'I',present:true,usual:false}, {id:'J',present:true,usual:true},
    {id:'K',present:true,usual:true}, {id:'L',present:true,usual:true}
  ].map((p,index)=>({...p,eligible:true,referenceDate:'night',place:['homes','homes','station','station','student','student','hospital','hospital','station','homes','student','homes'][index]}));
  const i18n={
    en:{resTitle:'Who belongs to the city?',resIntro:'The people do not change. Only the rule used to count them changes.',present:'Present on the reference night',usual:'Usually resident',included:'Included',excluded:'Excluded',person:'Person',presentCol:'Present tonight',usualCol:'Usually lives here',status:'In the count?',yes:'Yes',no:'No',rule:'Counting rule',count:'People included',visitor:'Present but usually lives elsewhere',away:'Usually lives here but absent tonight',both:'Present and usually resident',neither:'Neither present nor usually resident',qualityTitle:'Can the total be correct when the census is wrong?',qualityIntro:'The eligible population stays at 100. Change the number missed and the erroneous records added.',missed:'Eligible people omitted',extra:'Erroneous records',trueN:'Eligible population',correct:'Correctly counted',published:'Published count',gross:'Omission share',net:'Net difference (published − eligible)',correctshare:'Correctly counted share',reset:'Reset',warning:'The published total is correct, yet eligible people are missing.',errors:'Erroneous records (shown separately, not members of the eligible population)',correctKey:'Correctly enumerated',missedKey:'Omitted',hint:'Select a person to see why the counting rule includes or excludes them.',story:'This is the same problem encountered when the census frame and target population differ.'},
    fa:{resTitle:'چه کسانی جمعیت شهر را تشکیل می‌دهند؟',resIntro:'افراد تغییر نمی‌کنند؛ فقط قاعده‌ای که برای شمارش به کار می‌بریم عوض می‌شود.',present:'افراد حاضر در شب مرجع',usual:'ساکنان معمول شهر',included:'در شمارش',excluded:'بیرون از شمارش',person:'فرد',presentCol:'امشب در شهر است؟',usualCol:'ساکن معمول شهر است؟',status:'شمرده می‌شود؟',yes:'بله',no:'خیر',rule:'قاعدهٔ شمارش',count:'تعداد افرادِ مشمول',visitor:'در شهر حضور دارد، اما ساکن معمول آن نیست',away:'ساکن معمول شهر است، اما امشب حضور ندارد',both:'هم حضور دارد و هم ساکن معمول شهر است',neither:'نه حضور دارد و نه ساکن معمول شهر است',qualityTitle:'آیا ممکن است مجموع درست باشد، اما شمارش نادرست؟',qualityIntro:'جمعیت واجد شرایط ۱۰۰ نفر است. افراد جاافتاده و رکوردهای خطادار را تغییر دهید.',missed:'افراد واجد شرایطِ جاافتاده',extra:'رکوردهای خطادار',trueN:'جمعیت واجد شرایط',correct:'افراد درست‌شمرده‌شده',published:'شمار منتشرشده',gross:'درصد جاافتادگی',net:'اختلاف خالص (منتشرشده منهای واقعی)',correctshare:'درصد درست‌شمرده‌شده',reset:'بازنشانی',warning:'عدد منتشرشده درست است، اما هنوز بعضی از افراد واجد شرایط جا افتاده‌اند.',errors:'رکوردهای خطادار (جدا از افراد واقعیِ واجد شرایط)',correctKey:'درست‌شمرده‌شده',missedKey:'جاافتاده',hint:'یک نفر را انتخاب کنید تا علت ورود یا حذف او روشن شود.',story:'این همان مسئله‌ای است که هنگام تفاوت چارچوب شمارش با جمعیت هدف رخ می‌دهد.'}
  };
  const digits=(n,lang)=>lang==='fa'?String(n).replace(/[0-9]/g,d=>'۰۱۲۳۴۵۶۷۸۹'[+d]):String(n);
  const state={lang:'en',rule:'present',person:'C',m:12,e:12,date:'night'};
  Object.assign(i18n.en,{place:'Location on reference night',homes:'Permanent homes',student:'Student residence',hospital:'Hospital',station:'Transport stop / temporarily away',date:'Reference date',night:'Reference night',later:'After D moves away',departure:'Moved away after the first reference night; no longer present or usually resident',counts:'Present / usual',currentRule:'Current rule',definitions:'How the figures are calculated',metric:'Measure',formula:'Definition',question:'Would you trust the neighborhood distribution simply because the city-wide total is right?'});
  Object.assign(i18n.fa,{place:'محل در شب مرجع',homes:'خانه‌های معمول',student:'خوابگاه دانشجویی',hospital:'بیمارستان',station:'پایانهٔ مسافربری / غیبت موقت',date:'تاریخ مرجع',night:'شب مرجع',later:'پس از نقل‌مکان فرد D',departure:'پس از شب مرجع نخست نقل‌مکان کرده است؛ دیگر حاضر یا ساکن معمول شهر نیست',counts:'حاضر / ساکن معمول',currentRule:'قاعدهٔ جاری',definitions:'محاسبهٔ شاخص‌ها',metric:'شاخص',formula:'تعریف',question:'اگر عدد کل شهر درست باشد، آیا می‌توان مطمئن بود جمعیت هر محله هم درست شمرده شده است؟',net:'اختلاف خالص (منتشرشده منهای واجد شرایط)'});
  const records=()=>people.map(p=>state.date==='later'&&p.id==='D'?{...p,usual:false,departed:true,referenceDate:'later'}:p);
  const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function findHost(id){return document.getElementById(id)}
  function setup(){
    const combined=findHost('sc-census-labs');
    if(combined && !findHost('sc-residence-lab') && !findHost('sc-coverage-lab')) {
      combined.innerHTML='<section id="sc-residence-lab"></section><section id="sc-coverage-lab"></section>';
    }
    if(!findHost('sc-residence-lab')&&!findHost('sc-coverage-lab'))return;
    render();
    // This observer tracks existing site language toggles, not the lab DOM itself.
    const observer = new MutationObserver(()=>{const lang=document.documentElement.lang==='fa'?'fa':'en';if(lang!==state.lang){state.lang=lang;render()}});
    observer.observe(document.documentElement,{attributes:true,attributeFilter:['lang','dir']});
    window.addEventListener('statistics-language-changed',render);
  }
  function recordReason(p,t){if(p.departed)return t.departure;return p.present&&p.usual?t.both:p.present?t.visitor:p.usual?t.away:t.neither}
  function render(){
    const active=document.activeElement;
    const focused=active?.closest('.sc-lab') ? {id:active.id,person:active.dataset.scPerson,rule:active.name==='scRule'?active.value:null} : null;
    const openTables=[...document.querySelectorAll('.sc-lab details')].map(el=>el.open);
    const currentPeople=records();
    state.lang=document.documentElement.lang==='fa'?'fa':'en';let t=i18n[state.lang];
    const res=findHost('sc-residence-lab');if(res){
      let count=currentPeople.filter(p=>p.eligible&&p[state.rule]).length;
      res.setAttribute('dir',state.lang==='fa'?'rtl':'ltr');
      res.innerHTML=`<div class="sc-lab"><h3>${t.resTitle}</h3><p>${t.resIntro}</p><fieldset class="sc-switch"><legend>${t.rule}</legend><label><input type="radio" name="scRule" value="present" ${state.rule==='present'?'checked':''}>${t.present}</label><label><input type="radio" name="scRule" value="usual" ${state.rule==='usual'?'checked':''}>${t.usual}</label></fieldset><label class="sc-reference">${t.date}<select id="scReference"><option value="night" ${state.date==='night'?'selected':''}>${t.night}</option><option value="later" ${state.date==='later'?'selected':''}>${t.later}</option></select></label><p class="sc-counts">${t.counts}: <bdi dir="ltr">${digits(currentPeople.filter(p=>p.present).length,state.lang)} / ${digits(currentPeople.filter(p=>p.usual).length,state.lang)}</bdi></p><div class="sc-locations">${['homes','student','hospital','station'].map(place=>`<section class="sc-location"><h4>${t[place]}</h4><div class="sc-person-grid" role="group" aria-label="${esc(t[place])}">${currentPeople.filter(p=>p.place===place).map(p=>`<button type="button" data-sc-person="${p.id}" aria-label="${t.person} ${p.id}: ${p[state.rule]?t.included:t.excluded}" aria-pressed="${state.person===p.id}" class="${p[state.rule]?'sc-in':'sc-out'}">${p.id}</button>`).join('')}</div></section>`).join('')}</div><p class="sc-rule-note">${t.currentRule}: ${state.rule==='present'?t.present:t.usual}</p><p class="sc-result" role="status" aria-live="polite">${t.count}: <strong><bdi dir="ltr">${digits(count,state.lang)} / ${digits(people.length,state.lang)}</bdi></strong></p><p class="sc-description">${t.person} ${esc(state.person)}: ${recordReason(currentPeople.find(p=>p.id===state.person),t)}. ${currentPeople.find(p=>p.id===state.person)[state.rule]?t.included:t.excluded}.</p><details><summary>${t.hint}</summary><div class="sc-scroll"><table><thead><tr><th>${t.person}</th><th>${t.presentCol}</th><th>${t.usualCol}</th><th>${t.place}</th><th>${t.status}</th></tr></thead><tbody>${currentPeople.map(p=>`<tr><td>${p.id}</td><td>${p.present?t.yes:t.no}</td><td>${p.usual?t.yes:t.no}</td><td>${t[p.place]}</td><td>${p[state.rule]?t.yes:t.no}</td></tr>`).join('')}</tbody></table></div></details></div>`;
      res.querySelector('#scReference').addEventListener('change',ev=>{state.date=ev.target.value;render()});
      res.querySelectorAll('input[name="scRule"]').forEach(b=>b.addEventListener('change',()=>{state.rule=b.value;render()}));
      res.querySelectorAll('button[data-sc-person]').forEach(b=>b.addEventListener('click',()=>{state.person=b.dataset.scPerson;render()}));
    }
    const cov=findHost('sc-coverage-lab');if(cov){
      const c=100-state.m,p=c+state.e,net=p-100;
      cov.setAttribute('dir',state.lang==='fa'?'rtl':'ltr');
      cov.innerHTML=`<div class="sc-lab"><h3>${t.qualityTitle}</h3><p>${t.qualityIntro}</p><div class="sc-range"><label for="scOmission">${t.missed}: <output>${digits(state.m,state.lang)}</output></label><input id="scOmission" type="range" min="0" max="30" step="1" value="${state.m}"><label for="scExtra">${t.extra}: <output>${digits(state.e,state.lang)}</output></label><input id="scExtra" type="range" min="0" max="30" step="1" value="${state.e}"></div><div class="sc-coverage-grid" role="img" aria-label="${digits(c,state.lang)} ${t.correctKey}; ${digits(state.m,state.lang)} ${t.missedKey}">${Array.from({length:100},(_,i)=>`<span aria-hidden="true" class="${i<c?'sc-correct':'sc-missing'}"></span>`).join('')}</div><div class="sc-legend"><span><i class="sc-correct"></i>${t.correctKey}</span><span><i class="sc-missing"></i>${t.missedKey}</span></div><p class="sc-errors">${t.errors}: <strong>${digits(state.e,state.lang)}</strong></p><div class="sc-ghost-strip" role="img" aria-label="${esc(t.errors)}: ${digits(state.e,state.lang)}">${Array.from({length:state.e},()=>'<span aria-hidden="true"></span>').join('')}</div><div class="sc-metrics" role="status" aria-live="polite"><span>${t.trueN}<b>${digits(100,state.lang)}</b></span><span>${t.correct}<b>${digits(c,state.lang)}</b></span><span>${t.published}<b>${digits(p,state.lang)}</b></span><span>${t.gross}<b>${digits(state.m,state.lang)}%</b></span><span>${t.correctshare}<b>${digits(c,state.lang)}%</b></span><span>${t.net}<b>${digits(net,state.lang)}</b></span></div>${state.m>0&&net===0?`<p class="sc-warning">${t.warning}</p>`:''}<button type="button" id="scReset">${t.reset}</button><p>${t.story}</p><details><summary>${t.definitions}</summary><table class="sc-formulas"><thead><tr><th>${t.metric}</th><th>${t.formula}</th></tr></thead><tbody><tr><td>${t.correct}</td><td><bdi dir="ltr">C = 100 − m</bdi></td></tr><tr><td>${t.published}</td><td><bdi dir="ltr">P = C + e</bdi></td></tr><tr><td>${t.correctshare}</td><td><bdi dir="ltr">100 × C / 100 %</bdi></td></tr><tr><td>${t.gross}</td><td><bdi dir="ltr">100 × m / 100 %</bdi></td></tr><tr><td>${t.net}</td><td><bdi dir="ltr">P − 100 = e − m</bdi></td></tr></tbody></table></details><p><strong>${t.question}</strong></p></div>`;
      cov.querySelector('#scOmission').addEventListener('input',ev=>{state.m=+ev.target.value;render()});
      cov.querySelector('#scExtra').addEventListener('input',ev=>{state.e=+ev.target.value;render()});
      cov.querySelector('#scReset').addEventListener('click',()=>{state.m=12;state.e=12;render()});
    }
    document.querySelectorAll('.sc-lab details').forEach((el,index)=>{el.open=!!openTables[index];});
    if(focused){const target=focused.id?document.getElementById(focused.id):focused.person?document.querySelector('[data-sc-person="'+focused.person+'"]'):document.querySelector('input[name="scRule"][value="'+focused.rule+'"]');target?.focus({preventScroll:true});}
  }
  window.StatisticsCensusLabs={people,records, i18n, getState:()=>({...state}), calculations:(m,e)=>({eligible:100,correct:100-m,published:100-m+e,net:e-m})};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',setup);else setup();
})();

