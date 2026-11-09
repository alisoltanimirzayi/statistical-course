/* Historical imagery belongs to the timeline and to each lesson's own cover. */
(() => {
 'use strict';
 const byId=new Map((window.ERA_SCENES||[]).map(scene=>[scene.id,scene]));
 const fa=()=>document.documentElement.lang==='fa';
 const escape=text=>String(text).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const copy={
  en:{note:'This project was created using artificial intelligence.',timeline:'Explore the atlas',ideas:'ideas in this era',chapter:'ERA',contents:'In this lesson',progress:'Reading progress',setting:'Historical setting'},
  fa:{note:'این پروژه با استفاده از هوش مصنوعی ساخته شده است.',timeline:'کاوش در اطلس',ideas:'ایده در این دوره',chapter:'دوره',contents:'در این درس',progress:'پیشرفت مطالعه',setting:'فضای تاریخی'}
 };
 const t=()=>copy[fa()?'fa':'en'];
 const number=n=>n.toLocaleString(fa()?'fa-IR':'en-US',{minimumIntegerDigits:2});
 const lessonMapping={census:'era-01','chance-early':'era-02',probability:'era-04',expectation:'era-04',mortality:'era-03','life-tables':'era-03','hypothesis-early':'era-04',lln:'era-04',normal:'era-04',binomial:'era-04'};
 function lessonPicture(scene){
  const base='assets/era-scenes/'+scene.prefix;
  return '<picture class="scene-media"><img src="'+base+'-mobile.webp" alt="'+escape(scene[fa()?'alt_fa':'alt_en'])+'" width="900" height="1600" loading="eager" decoding="async"></picture>';
 }
 function timelineHeader(era,localized,topics,index){
  const scene=window.TIMELINE_SCENES[era.id];
  const art='<picture class="scene-media era-scene-art"><source media="(max-width:620px)" srcset="'+scene.prefix+'-mobile.webp"><source media="(max-width:1100px)" srcset="'+scene.prefix+'-tablet.webp"><img src="'+scene.prefix+'-desktop.webp" alt="'+escape(scene[fa()?'alt_fa':'alt_en'])+'" width="'+scene.width+'" height="'+scene.height+'" loading="'+(index===0?'eager':'lazy')+'" decoding="async"></picture>';
  return '<header class="era-passage era-passage--immersive" data-scene="'+scene.id+'" '+(scene.preserveFrame?'data-preserve-frame':'')+'>'+art+'<div class="era-passage__shade" aria-hidden="true"></div><div class="era-passage__blend" aria-hidden="true"></div><div class="era-passage__copy"><div class="era-passage__meta"><span>'+t().chapter+' '+number(index+1)+'</span><bdi>'+escape(localized.period)+'</bdi></div><h3 id="era-'+era.id+'">'+escape(localized.name)+'</h3><span class="era-passage__count">'+topics.length.toLocaleString(fa()?'fa-IR':'en-US')+' '+t().ideas+'</span></div><span class="era-passage__number" aria-hidden="true">'+String(index+1).padStart(2,'0')+'</span></header>';
 }
 function timelineStyle(era){const s=window.TIMELINE_SCENES?.[era.id];return s?'--era-ground:'+s.ground+';--era-ink:'+s.ink+';--era-muted:'+s.muted+';':'';}
 let activeSections=[];
 function updateActiveEra(){
  let current=activeSections[0];
  for(const section of activeSections){if(section.getBoundingClientRect().top<=200)current=section;else break;}
  document.querySelectorAll('#eraNav a').forEach(link=>{if(current&&link.getAttribute('href')==='#'+current.id)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});
 }
 function refresh(){activeSections=[...document.querySelectorAll('#timeline>.era')];updateActiveEra();}
 let readingAnchor=null,progressQueued=false;
 function mountLesson(){
  const root=document.getElementById('lesson'),header=root?.querySelector('.lesson-hero');
  if(!header)return;
  const id=location.hash.match(/^#topic\/([\w-]+)$/)?.[1]||'census',scene=byId.get(lessonMapping[id]);
  if(scene&&!header.querySelector('.lesson-cover')){
   const cover=document.createElement('figure');cover.className='lesson-cover';cover.dataset.scene=scene.id;
   cover.innerHTML=lessonPicture(scene)+'<figcaption>'+t().setting+' · '+escape(scene[fa()?'period_fa':'period_en'])+'</figcaption>';
   header.querySelector('h1')?.insertAdjacentElement('afterend',cover);
  }
  if(!root.querySelector('.reading-tools')){
   const headings=[...root.querySelectorAll('.lesson-copy>section>h2')];
   const tools=document.createElement('div');tools.className='reading-tools';
   tools.innerHTML='<details class="lesson-contents"><summary>'+t().contents+'</summary><ol>'+headings.map((h,i)=>'<li><button type="button" data-reading-section="'+i+'">'+escape(h.textContent)+'</button></li>').join('')+'</ol></details><div class="reading-progress"><progress max="100" value="0" aria-label="'+t().progress+'"></progress><span class="reading-progress__value" aria-hidden="true">0%</span></div>';
   tools.addEventListener('click',event=>{const button=event.target.closest('[data-reading-section]');if(!button)return;const heading=headings[Number(button.dataset.readingSection)];tools.querySelector('details').open=false;heading.tabIndex=-1;heading.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth',block:'start'});heading.focus({preventScroll:true});});
   root.querySelector('.lesson-body')?.before(tools);
  }
  updateProgress();
 }
 function updateProgress(){
  const body=document.querySelector('.lesson-body'),bar=document.querySelector('.reading-progress progress');if(!body||!bar)return;
  const top=body.getBoundingClientRect().top+scrollY,value=Math.round(Math.min(100,Math.max(0,(scrollY+innerHeight*.35-top)/Math.max(1,body.offsetHeight-innerHeight*.5)*100)));
  bar.value=value;const text=document.querySelector('.reading-progress__value');if(text)text.textContent=value.toLocaleString(fa()?'fa-IR':'en-US')+(fa()?'٪':'%');
 }
 function localize(){
  const c=t();document.querySelectorAll('.project-note').forEach(el=>el.textContent=c.note);
  document.querySelectorAll('[data-copy]').forEach(el=>{if(c[el.dataset.copy])el.textContent=c[el.dataset.copy];});
 }
 const root=document.getElementById('lesson');
 document.getElementById('lessonLangSwitch')?.addEventListener('click',()=>{
  const sections=[...root.querySelectorAll('.lesson-copy>section')],index=sections.findIndex(el=>el.getBoundingClientRect().bottom>140),el=sections[index];
  readingAnchor=el&&el.getBoundingClientRect().top<innerHeight?{index,top:el.getBoundingClientRect().top}:null;
 },true);
 new MutationObserver(()=>{
  localize();
  // The chapter renderers replace the entire article on locale changes.
  const cover=root?.querySelector('.lesson-cover');if(cover)cover.remove();
  const tools=root?.querySelector('.reading-tools');if(tools)tools.remove();
  mountLesson();
  if(readingAnchor){const el=root?.querySelectorAll('.lesson-copy>section')[readingAnchor.index];if(el)scrollBy({top:el.getBoundingClientRect().top-readingAnchor.top,behavior:'instant'});readingAnchor=null;}
 }).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
 if(root)new MutationObserver(mountLesson).observe(root,{childList:true});
 addEventListener('scroll',()=>{if(!progressQueued){progressQueued=true;requestAnimationFrame(()=>{updateProgress();updateActiveEra();progressQueued=false;});}},{passive:true});
 addEventListener('resize',updateProgress,{passive:true});
 window.HistoricalScenes={timelineHeader,timelineStyle,refresh};
 localize();mountLesson();
})();
