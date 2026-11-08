/* Internationalization of the presentation shell. Topic translations live in assets/js/data/atlas-fa.js. */
const UI_FA = {
  skip: 'رفتن به اطلس', brand: 'آمار<span class="brand-dot">.</span>پیوسته', aboutBtn: 'درباره اطلس <span aria-hidden="true">↗</span>',
  heroEyebrow: '<span class="pulse"></span> اطلس اندیشهٔ آماری <span class="eyebrow-divider">/</span> ۰۱—۰۸',
  heroTitle: 'تاریخِ <em>اندیشیدن با داده‌ها.</em>',
  heroDesc: 'آمار مجموعه‌ای از فرمول‌ها نیست؛ گفت‌وگویی چندصدساله درباره <strong>آنچه از اطلاعات ناقص می‌توانیم بدانیم.</strong> ایده‌ها را به‌ترتیب ظهور تاریخی کشف کنید و پیوندهایشان را بشناسید.',
  explore: 'کاوش در خط زمان <span>↙</span>', guideBtn: 'راهنمای خواندن <span>↗</span>',
  graphicCaption: '<span>شکل ۰۱</span><span>یک دانش؛ تبارهای گوناگون.</span>',
  definitionId: 'پرسش بنیادین <span>↙</span>',
  definitionText: 'چگونه از <span>مشاهدات</span> به <span>ادعاها</span> می‌رسیم و هم‌زمان <span>عدم‌قطعیت</span> را لحاظ می‌کنیم؟',
  definitionSub: 'هر ایده در ادامه، بخشی متفاوت از پاسخ را روشن می‌کند.',
  landscape: 'چشم‌انداز اندیشه <span class="eyebrow-divider">/</span> ۰۱—۰۸',atlasTitle:'دانشی در حال تکامل<span class="heading-period">.</span>',
  atlasIntro:'سیر تاریخی را دنبال کنید یا یکی از شاخه‌های فکری را پی بگیرید.',
  countIdeas:'ایده',countTraditions:'سنت فکری',countConnections:'پیوند',
  clearFilters:'بازنشانی',timelineLeft:'پیدایش تاریخی ↓',timelineRight:'برای دیدن پیوندها، ایده‌ای انتخاب کنید ↗',
  noResultsTitle:'ایده‌ای پیدا نشد.',noResultsDesc:'کلیدواژه دیگری وارد کنید یا فیلترها را بازنشانی کنید.',
  readEyebrow:'راهنمای روابط میان ایده‌ها',readTitle:'ایده‌ها به‌ندرت <br>در خطی مستقیم پیش می‌روند.',
  keyBuilds:'بر پایهٔ',keyBuildsDesc:'یک ایده بنیان یا روش پیشین را گسترش می‌دهد.',
  keyContrasts:'جایگزین / تنش فکری',keyContrastsDesc:'پاسخ‌های متفاوت به مسئله‌ای مشابه، که گاهی سازگارند.',
  keyComplements:'مکمل',keyComplementsDesc:'ابزارهای متفاوتی که در ترکیب با یکدیگر بهتر عمل می‌کنند.',
  footerBrand:'آمار.پیوسته <span class="footer-faint">/ دوره مبانی</span>',
  footerNote:'تاریخ‌ها تقریبی‌اند. پیوندها تفسیری هستند، نه تبارشناسی کامل.',sourcesBtn:'منابع و روش‌شناسی ↗',
  detailEssential:'ایده اصلی',detailQuestionLabel:'پرسشی که پاسخ می‌دهد',detailTermsLabel:'مفاهیم پایه',detailConnectionsLabel:'پیوندهای فکری',
  detailNext:'در ادامه',detailNextDesc:'درس‌های تفصیلی، مثال‌ها، تمرین‌ها و مجموعه‌داده‌ها در مراحل بعد به این بخش افزوده خواهند شد.',copyLink:'کپی پیوند موضوع ↗',
  fieldNotes:'یادداشت‌های اطلس',
};
const FAMILIES_FA = {
 records:'شمارش و جامعه',chance:'احتمال و عدم‌قطعیت',description:'توصیف و اکتشاف',inference:'استنباط و شواهد',design:'نمونه‌گیری و آزمایش',models:'مدل‌ها و پیش‌بینی',computing:'محاسبات و یادگیری',causality:'علیت و تصمیم‌گیری'
};
const ERAS_FA = {
 origins:{period:'پیش از ۱۶۰۰',name:'شمارش جهان',note:'اداره امور، تجارت، سرشماری و نخستین اندیشه‌های نظام‌مند درباره بخت.'},
 foundations:{period:'۱۶۰۰—۱۷۴۹',name:'بخت به ریاضیات تبدیل می‌شود',note:'ثبت جمعیت و بازی‌های شانسی دو بنیان را شکل می‌دهند.'},
 enlightenment:{period:'۱۷۵۰—۱۸۴۹',name:'اندازه‌گیری عدم‌قطعیت',note:'خطا، احتمال، نمودارها و مدل‌ها با مشاهده علمی پیوند می‌خورند.'},
 society:{period:'۱۸۵۰—۱۸۹۹',name:'تغییرپذیری و ارتباط',note:'توزیع‌ها و روابط به ابزار مطالعه انسان و طبیعت تبدیل می‌شوند.'},
 formal:{period:'۱۹۰۰—۱۹۳۹',name:'عصر استنباط',note:'برآورد، آزمون، نمونه‌گیری، آزمایش و احتمال ساختارهای رسمی می‌یابند.'},
 midcentury:{period:'۱۹۴۰—۱۹۶۹',name:'تصمیم‌گیری و محاسبات',note:'تحلیل چندمتغیره، نظریه تصمیم، شبیه‌سازی و سری‌های زمانی گسترش می‌یابند.'},
 computational:{period:'۱۹۷۰—۱۹۹۹',name:'چرخش محاسباتی',note:'روش‌های مقاوم، بازنمونه‌گیری، چارچوب‌های علّی، مدل‌های منعطف و شبیه‌سازی تکامل می‌یابند.'},
 contemporary:{period:'۲۰۰۰ تا امروز',name:'یادگیری از پیچیدگی',note:'پیش‌بینی در مقیاس بزرگ، طرح‌های علّی جدید و استنباط پاسخ‌گو.'}
};
const MESSAGES_FA={
 all:'همه سنت‌ها',ideas:'ایده',connections:'پیوند',compact:'نمای فشرده',expanded:'نمای گسترده',
 marker:'نشانگر تاریخی',builds:'بناشده بر / گسترش‌یافته با',contrasts:'جایگزین یا تنش فکری',complements:'ایده مکمل',noRelations:'هنوز پیوندی ثبت نشده است.',copied:'پیوند کپی شد',
 infoSources:'منابع و روش‌شناسی',infoGuide:'راهنمای کاوش در اطلس',infoAbout:'درباره این پروژه',
 sources:`<p>این اثر <strong>نقشه‌ای آموزشی از مفاهیم</strong> است، نه ادعای معرفی تنها مخترع هر روش. تاریخ‌ها تقریبی‌اند: برخی به نخستین انتشار و برخی به ظهور یا تثبیت بعدی یک حوزه اشاره می‌کنند. ریشه بسیاری از ایده‌ها قدیمی‌تر است.</p><p>منابع پیشنهادی برای بررسی و مطالعه بیشتر:</p>`,
 sourcesNote:'پیوندهای مفهومی انتخاب‌های آموزشی و تفسیری‌اند. «بر پایهٔ» رابطه فکری مفید را نشان می‌دهد، نه ادعای تأثیر تاریخی انحصاری. با تدوین درس‌ها می‌توان تاریخ‌ها و طبقه‌بندی‌ها را دقیق‌تر کرد.',
 guide:`<p><strong>از بالا به پایین در تاریخ حرکت کنید.</strong> هر بخش یک دوره تاریخی است و هر کارت ایده‌ای مهم را بر اساس زمان تقریبی ظهور نشان می‌دهد.</p><ul><li>برای دنبال‌کردن یک سنت فکری در سده‌های مختلف، فیلتر رنگی آن را انتخاب کنید.</li><li>بر اساس متفکر، مفهوم، سال یا پرسش جست‌وجو کنید.</li><li>هر ایده را باز کنید تا پرسش محوری، مفاهیم پایه و پیوندهایش را ببینید.</li><li>از روابط برای حرکت میان ایده‌های رقیب یا مکمل استفاده کنید.</li><li>برای مشاهده کارت‌های بیشتر، نمای فشرده را فعال کنید.</li></ul><p class="info-note">توالی تاریخی و وابستگی منطقی یکسان نیستند. یک چارچوب جدید می‌تواند رویه‌ای قدیمی را روشن کند؛ ایده‌ای قدیمی هم پس از پیدایش روش‌های تازه سودمند می‌ماند.</p>`,
 about:`<p>آمار می‌پرسد چگونه می‌توان تحت عدم‌قطعیت از داده‌ها آموخت. این اطلس از شمارش و توصیف آغاز می‌کند؛ احتمال، استنباط، نمونه‌گیری، طراحی آزمایش، مدل‌سازی و محاسبات را دنبال می‌کند و با پرسش‌های امروز درباره پیش‌بینی، اثرات علّی و تصمیم‌های مسئولانه پایان می‌یابد.</p><p>این صفحه نخست آگاهانه <strong>نقشه‌ای فکری است نه فصل یک کتاب درسی.</strong> قرار است نقطه آغاز یک برنامه آموزشی جامع مبانی آمار باشد.</p><p class="info-note">در مراحل بعد می‌توان درس‌ها، مثال‌های حل‌شده، نمایش‌های تعاملی، تمرین‌ها، داده‌ها و ارزشیابی‌های آموزشی را به هر مفهوم پیوند داد، بی‌آنکه ساختار نمای کلی تغییر کند.</p>`
};
const STATIC_SELECTORS={
 skip:'.skip',brand:'.brand > span:last-child',aboutBtn:'#aboutBtn',heroEyebrow:'.hero-copy .eyebrow',heroTitle:'#heroTitle',heroDesc:'.hero-desc',explore:'.hero-actions .primary-button',guideBtn:'#guideBtn',graphicCaption:'.hero-graphic-caption',definitionId:'.definition-id',definitionText:'.definition p',definitionSub:'.definition-sub',landscape:'.atlas-heading .eyebrow',atlasTitle:'#atlasTitle',atlasIntro:'.atlas-heading > div:first-child > p',countIdeas:'.atlas-stats > div:nth-child(1) span',countTraditions:'.atlas-stats > div:nth-child(2) span',countConnections:'.atlas-stats > div:nth-child(3) span',clearFilters:'#clearFilters',timelineLeft:'.timeline-caption span:first-child',timelineRight:'.timeline-caption span:last-child',noResultsTitle:'#noResults h3',noResultsDesc:'#noResults p',readEyebrow:'.reading-key .eyebrow',readTitle:'#readTitle',keyBuilds:'.key-types>div:nth-child(1) b',keyBuildsDesc:'.key-types>div:nth-child(1) p',keyContrasts:'.key-types>div:nth-child(2) b',keyContrastsDesc:'.key-types>div:nth-child(2) p',keyComplements:'.key-types>div:nth-child(3) b',keyComplementsDesc:'.key-types>div:nth-child(3) p',footerBrand:'.footer > span:first-child',footerNote:'.footer > span:nth-child(2)',sourcesBtn:'#sourcesBtn',detailEssential:'.detail-block:nth-of-type(4) .detail-label',detailQuestionLabel:'.detail-block:nth-of-type(5) .detail-label',detailTermsLabel:'.detail-block:nth-of-type(6) .detail-label',detailConnectionsLabel:'.detail-block:nth-of-type(7) .detail-label',detailNext:'.detail-next span',detailNextDesc:'.detail-next p',copyLink:'#copyLink',fieldNotes:'.info-top .eyebrow'
};
const I18N=(()=>{
  const original={};let lang='en';
  for(const [key,selector] of Object.entries(STATIC_SELECTORS)){
    const el=document.querySelector(selector);if(el)original[key]=el.innerHTML;
  }
  const localeYear=y=>{
    const en=y<0?`${Math.abs(y).toLocaleString('en-US')} BCE`:y<1200?`c. ${y}`:`${y}`;
    return lang==='fa' ? (y<0?`${Math.abs(y).toLocaleString('fa-IR')} پیش از میلاد`:y<1200?`حدود ${y.toLocaleString('fa-IR')}`:y.toLocaleString('fa-IR')):en;
  };
  return {
    get lang(){return lang;},
    topic:t=>lang==='fa'?{...t,...TOPICS_FA[t.id]}:t,
    family:f=>lang==='fa'?(FAMILIES_FA[f.id]||f.name):f.name,
    era:e=>lang==='fa'?{...e,...ERAS_FA[e.id]}:e,
    text:(key,en)=>lang==='fa'?(MESSAGES_FA[key]||en):en,
    year:localeYear,
    apply(next){lang=next==='fa'?'fa':'en';document.documentElement.lang=lang;document.documentElement.dir=lang==='fa'?'rtl':'ltr';document.body.classList.toggle('persian',lang==='fa');document.title=lang==='fa'?'آمار، پیوسته — اطلس ایده‌ها':'Statistics, Connected — An Atlas of Ideas';
      document.querySelector('meta[name="description"]').content=lang==='fa'?'اطلس تعاملی تاریخ فکری آمار از شمارش تا استنباط علّی و علم داده.':'An interactive intellectual history of statistics, from counting and uncertainty to modern causal inference and data science.';
      for(const [key,selector] of Object.entries(STATIC_SELECTORS)){const el=document.querySelector(selector);if(el)el.innerHTML=lang==='fa'?UI_FA[key]:original[key];}
      document.querySelector('#search').placeholder=lang==='fa'?'جست‌وجوی ایده، متفکر یا پرسش…':'Search an idea, thinker, or question…';
      document.querySelector('#search').setAttribute('aria-label',lang==='fa'?'جست‌وجوی موضوعات':'Search topics');
      document.querySelector('#closeDetail').setAttribute('aria-label',lang==='fa'?'بستن جزئیات موضوع':'Close topic details');
      document.querySelector('#closeInfo').setAttribute('aria-label',lang==='fa'?'بستن اطلاعات':'Close information');
      document.querySelector('#legend').setAttribute('aria-label',lang==='fa'?'انتخاب سنت فکری':'Select a tradition');
      document.querySelector('#eraNav').setAttribute('aria-label',lang==='fa'?'پرش به دوره تاریخی':'Jump to a historical period');
      document.querySelector('#langSwitch').setAttribute('aria-checked',String(lang==='fa'));
      document.querySelector('#langSwitch').setAttribute('aria-label',lang==='fa'?'تغییر زبان به انگلیسی':'Switch language to Persian');
      document.querySelector('#langSwitch').title=lang==='fa'?'English':'فارسی';
      document.querySelector('.hero-graphic .graphic-labels').querySelectorAll('text').forEach((el,i)=>{el.textContent=lang==='fa'?['مشاهده','استنباط','تبیین','تصمیم'][i]:['OBSERVE','INFER','EXPLAIN','DECIDE'][i];});
      try{localStorage.setItem('statisticsConnectedLanguage',lang);}catch(e){}
    }
  };
})();
