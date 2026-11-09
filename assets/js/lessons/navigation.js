/* Lesson browsing follows atlas eras, not a continuous numbered course. */
(() => {
 'use strict';
 const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 function context(id,lang){const topic=TOPICS.find(t=>t.id===id),era=topic&&ERAS.find(e=>topic.year>=e.from&&topic.year<=e.to);if(!era)return null;const fa=lang==='fa',data=fa?LESSONS_FA:LESSONS;return {era,fa,topics:TOPICS.filter(t=>t.year>=era.from&&t.year<=era.to&&LESSONS[t.id]).sort((a,b)=>a.year-b.year),label:t=>(data[t.id]?.kicker||LESSONS[t.id].kicker||t.title).split(/[—:]/)[0].trim()};}
 function header(id,lang){const c=context(id,lang);if(!c)return '';const title=c.fa?'درس‌های همین دوره':'Lessons in this era';return `<div class="era-lessons"><p>${title}</p><nav class="chapter-progress" aria-label="${title}">${c.topics.map(t=>`<a href="lessons.html#topic/${t.id}" ${t.id===id?'aria-current="page"':''}>${escape(c.label(t))}</a>`).join('')}</nav></div>`;}
 function footer(id,lang){const c=context(id,lang);return c?`<footer class="lesson-footer era-lesson-footer"><a class="primary-button" href="index.html#${c.era.id}">${c.fa?'بازگشت به ایده‌های این دوره':'Explore all ideas in this era'} <span aria-hidden="true">${c.fa?'←':'→'}</span></a></footer>`:'';}
 window.LessonNavigation={header,footer};
})();
