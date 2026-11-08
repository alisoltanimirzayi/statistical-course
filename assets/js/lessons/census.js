/* Chapter 01 uses the existing lesson shell and the complete supplied EN/FA copy. */
(() => {
  'use strict';
  let language='en';
  try{language=localStorage.getItem('statisticsConnectedLanguage')==='fa'?'fa':'en';}catch(e){}
  const root=document.getElementById('lesson');
  const switcher=document.getElementById('lessonLangSwitch');
  const labels={
    en:{chapter:'CHAPTER 01 / COUNTING THE WORLD',tradition:'Counting & Society',time:'READING & INTERACTION',scope:'HISTORICAL SPAN',stage:['01 · Define a population','02 · Compare populations','03 · Reason under uncertainty'],back:'← Back to the atlas',next:'Chapter 02 · Rates & Population Patterns',sources:'Sources and image credits',founder:'No single inventor is known.',origin:'A development across many institutions and societies.',chain:['Ancient administrative records','Medieval territorial surveys','Modern population enumeration','Register-based census systems'],tablet:'Barley-ration account, Girsu, c. 2350 BCE',tabletCaption:'A list of people served by an institution is not necessarily a list of everyone who exists.',tabletCredit:'British Museum 1906,0512.2 (BM 102081), c. 2351–2342 BCE. Administrative accounting, not a complete population census. Photo: Gavin.collins; public-domain dedication.',domesday:'Domesday Book · survey of 1086',domesdayCaption:'A detailed assessment of landholding and resources, not a census of all inhabitants.',domesdayCredit:'Reproduction from Readings in English Social History, ed. R. B. Morgan, Cambridge University Press, 1923, p. 60. Public domain, via Wikimedia Commons.',source:'Image source and rights ↗',tabletAlt:'Cuneiform barley-ration account, Girsu, approximately 2350 BCE',domesdayAlt:'Reproduced Domesday extract recording landholdings and productive resources in 1086 England',question:'CENTRAL QUESTION',skip:'Skip to the lesson'},
    fa:{chapter:'فصل ۰۱ / شمارش جهان',tradition:'شمارش و جامعه',time:'زمان مطالعه و تعامل',scope:'مسیر تاریخی',stage:['۰۱ · تعریف جمعیت','۰۲ · مقایسهٔ جمعیت‌ها','۰۳ · استدلال در شرایط عدم‌قطعیت'],back:'بازگشت به اطلس ←',next:'فصل دوم · نرخ‌ها و الگوهای جمعیتی',sources:'منابع و اعتبار تصاویر',founder:'مخترع شناخته‌شدهٔ واحدی وجود ندارد.',origin:'تحولی در میان نهادها و جامعه‌های گوناگون.',chain:['ثبت‌های اداری باستان','بررسی‌های سرزمینی قرون وسطی','شمارش نوین جمعیت','نظام‌های سرشماری مبتنی بر ثبت'],tablet:'لوح سهمیهٔ جو، گیرسو، حدود ۲۳۵۰ پیش از میلاد',tabletCaption:'فهرست کسانی که از یک نهاد سهمیه می‌گیرند، لزوماً فهرست همهٔ ساکنان جامعه نیست.',tabletCredit:'موزهٔ بریتانیا، 1906,0512.2 (BM 102081)، حدود ۲۳۵۱ تا ۲۳۴۲ پیش از میلاد. سند حسابداری اداری، نه سرشماری کامل جمعیت. عکس: Gavin.collins؛ اهداشده به مالکیت عمومی.',domesday:'کتاب روز داوری · بررسی سال ۱۰۸۶',domesdayCaption:'ثبت مفصل مالکیت زمین و منابع، نه سرشماری همهٔ ساکنان.',domesdayCredit:'بازنشر از کتاب تاریخ اجتماعی انگلستان، به‌کوشش R. B. Morgan، انتشارات دانشگاه کمبریج، ۱۹۲۳، صفحهٔ ۶۰. مالکیت عمومی؛ از ویکی‌مدیا کامنز.',source:'منبع تصویر و مجوز ↗',tabletAlt:'لوح گلی به خط میخی دربارهٔ سهمیهٔ جو، گیرسو، حدود ۲۳۵۰ پیش از میلاد',domesdayAlt:'بازنشر سند قرون وسطاییِ ثبت املاک و منابع انگلستان در سال ۱۰۸۶',question:'پرسش محوری',skip:'رفتن به متن درس'}
  };
  function figure(kind,t){
    const tablet=kind==='tablet';
    return `<figure class="census-figure ${tablet?'':'census-domesday'}"><img src="assets/images/census-package/${tablet?'girsu-barley-rations':'domesday-extract'}.jpg" alt="${t[kind+'Alt']}" ${tablet?'':'loading="lazy"'}><figcaption><h3>${t[kind]}</h3><p>${t[kind+'Caption']}</p><small>${t[kind+'Credit']} <a target="_blank" rel="noopener noreferrer" href="https://commons.wikimedia.org/wiki/File:${tablet?'Issue_of_barley_rations.JPG':'Domesday_Book_extract.jpg'}">${t.source}</a></small></figcaption></figure>`;
  }
  function render(){
    const fa=language==='fa',t=labels[language],copy=CENSUS_CHAPTERS[language];
    // Preserve host nodes; supplied labs retain rule, selected person, and both sliders.
    const hosts=['sc-residence-lab','sc-coverage-lab'].map(id=>document.getElementById(id));
    hosts.forEach(el=>{if(el)el.remove();});
    document.documentElement.lang=language;document.documentElement.dir=fa?'rtl':'ltr';
    document.body.classList.toggle('persian',fa);document.body.classList.add('census-chapter');
    document.title=`${fa?'سرشماری و نظام‌های ثبت':'Censuses & Registers'} · ${fa?'آمار، پیوسته':'Statistics, Connected'}`;
    const title=copy.title.split(' — ').slice(1).join(' — ');
    root.innerHTML=`<section class="lesson-hero census-hero"><p class="lesson-meta">${t.chapter} / ${t.tradition}</p><nav class="chapter-progress" aria-label="${fa?'مسیر یادگیری':'Learning path'}"><a href="lessons.html#topic/census" aria-current="step">${t.stage[0]}</a><a href="lessons.html#topic/rates">${t.stage[1]}</a><a href="lessons.html#topic/chance-early">${t.stage[2]}</a></nav><h1>${title}</h1><div class="census-question"><span class="lesson-section-label">${t.question}</span><p>${copy.question}</p></div><div class="lesson-facts"><div><b>${copy.readingTime}</b><span>${t.time}</span></div><div><b>${copy.date}</b><span>${t.scope}</span></div></div></section><article class="lesson-body"><div class="census-intro">${copy.intro}</div><div class="lesson-copy census-copy">${copy.sections.map(([heading,body],index)=>`<section class="census-section" data-census-section="${index}"><h2>${heading}</h2>${index===0?`<div class="census-opening"><div>${body}</div><aside class="census-origins">${figure('tablet',t)}<section class="census-founder"><h3>${t.founder}</h3><p>${t.origin}</p><ol>${t.chain.map(x=>`<li>${x}</li>`).join('')}</ol></section></aside></div>`:body}${index===1?figure('domesday',t):''}</section>`).join('')}<section class="reflection census-reflection"><h2>${copy.reflectionTitle}</h2>${copy.reflection}</section><section class="census-terms"><h2>${copy.termsTitle}</h2><p>${copy.terms}</p></section><section class="census-sources"><h2>${t.sources}</h2>${copy.sources}<p><a target="_blank" rel="noopener noreferrer" href="https://commons.wikimedia.org/wiki/File:Issue_of_barley_rations.JPG">${t.tablet} · Gavin.collins</a></p><p><a target="_blank" rel="noopener noreferrer" href="https://commons.wikimedia.org/wiki/File:Domesday_Book_extract.jpg">${t.domesday} · R. B. Morgan, 1923</a></p></section></div></article><footer class="lesson-footer census-footer"><a class="plain-link" href="index.html#atlas">${t.back}</a><a class="primary-button" href="lessons.html#topic/rates">${t.next}<span aria-hidden="true">${fa?'←':'→'}</span></a></footer>`;
    for(const el of hosts){if(el){const placeholder=document.getElementById(el.id);if(placeholder)placeholder.replaceWith(el);}}
    document.querySelectorAll('.census-figure img').forEach(img=>img.addEventListener('error',()=>{img.hidden=true;},{once:true}));
    switcher.setAttribute('aria-checked',String(fa));switcher.setAttribute('aria-label',fa?'تغییر زبان به انگلیسی':'Switch language to Persian');switcher.title=fa?'English':'فارسی';
    document.getElementById('lessonBack').textContent=t.back;
    document.querySelector('.skip').textContent=t.skip;
    const brand=document.querySelector('.brand');brand.setAttribute('aria-label',t.back);
    brand.innerHTML=`<span class="brand-mark">∴</span><span>${fa?'آمار<span class="brand-dot">.</span>پیوسته':'STATISTICS<span class="brand-dot">.</span>CONNECTED'}</span>`;
    switcher.querySelector('.language-fa').textContent='فا';
    window.dispatchEvent(new Event('statistics-language-changed'));
  }
  window.renderCensusChapter=()=>{
    render();
    switcher.addEventListener('click',()=>{
      const activeSection=[...root.querySelectorAll('[data-census-section]')].find(el=>el.getBoundingClientRect().bottom>90);
      const index=activeSection?.dataset.censusSection,offset=activeSection?.getBoundingClientRect().top;
      language=language==='fa'?'en':'fa';
      try{localStorage.setItem('statisticsConnectedLanguage',language);}catch(e){}
      render();
      if(index!==undefined){const el=root.querySelector(`[data-census-section="${index}"]`);window.scrollBy({top:el.getBoundingClientRect().top-offset,behavior:'instant'});}
    });
  };
})();
