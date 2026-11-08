(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const byId = new Map(TOPICS.map(t => [t.id,t]));
  const familyById = new Map(FAMILIES.map(f => [f.id,f]));
  const familyName = id => familyById.get(id) ? I18N.family(familyById.get(id)) : id;
  const FAMILY_ICONS={
    records:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3.5h14v17H5zM8 8h8M8 12h8M8 16h5"/></svg>',
    chance:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="3"/><circle cx="8" cy="8" r="1"/><circle cx="16" cy="8" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="8" cy="16" r="1"/><circle cx="16" cy="16" r="1"/></svg>',
    description:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20V4M4 20h17M8 17v-5M12 17V7M16 17v-9"/></svg>',
    inference:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10" cy="10" r="5.5"/><path d="m14.5 14.5 5 5M8 10l1.5 1.5 3-3"/></svg>',
    design:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3h6M10 3v6l-5 8a3 3 0 0 0 2.6 4h8.8a3 3 0 0 0 2.6-4l-5-8V3M8 15h8"/></svg>',
    models:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19V5M4 19h16M6 16c3-1 4-7 7-7 2 0 2 4 5 4"/><circle cx="6" cy="16" r="1"/><circle cx="13" cy="9" r="1"/><circle cx="18" cy="13" r="1"/></svg>',
    computing:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="1"/><path d="M9 2v4M12 2v4M15 2v4M9 18v4M12 18v4M15 18v4M2 9h4M2 12h4M2 15h4M18 9h4M18 12h4M18 15h4"/></svg>',
    causality:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="5" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M7 11 15.5 7M7 13l8.5 4M12 12h4M14 10l2 2-2 2"/></svg>'
  };
  const familyIcon=id=>`<span class="family-icon family-icon--${id}">${FAMILY_ICONS[id]||''}</span>`;
  const fmtYear = year => I18N.year(year);
  const state={family:'all',search:'',compact:false,selected:null,modal:false,lastFocus:null,view:new URLSearchParams(location.search).get('view')==='network'?'network':'timeline'};
  let network;
  const escapeHtml = str => String(str).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const related = id => EDGES.filter(e => e.from===id || e.to===id).map(e => ({...e,other:e.from===id?e.to:e.from,direction:e.from===id?'out':'in'}));

  function buildLegend(){
    $('legend').innerHTML=`<button class="legend-btn ${state.family==='all'?'active':''}" data-family="all">${I18N.text('all','All traditions')}</button>`+FAMILIES.map(f=>`<button class="legend-btn ${state.family===f.id?'active':''}" data-family="${f.id}" style="--c:${f.color}">${familyIcon(f.id)}${escapeHtml(familyName(f.id))}</button>`).join('');
    $('legend').onclick=ev=>{const el=ev.target.closest('[data-family]');if(!el)return;state.family=el.dataset.family;for(const b of $('legend').querySelectorAll('button'))b.classList.toggle('active',b.dataset.family===state.family);render();};
  }
  function makeCard(t){
    t=I18N.topic(t);
    const n=related(t.id).length;
    return `<button type="button" class="topic-card" id="topic-${t.id}" data-topic="${t.id}" style="--family-color:${familyById.get(t.family).color}" aria-label="${I18N.lang==='fa'?'بازکردن':'Open'} ${escapeHtml(t.title)}, ${fmtYear(t.year)}"><span class="card-header"><span class="card-year">${fmtYear(t.year)}</span><span class="card-family" title="${escapeHtml(familyName(t.family))}" aria-label="${escapeHtml(familyName(t.family))}">${familyIcon(t.family)}</span></span><span class="card-title">${escapeHtml(t.title)}</span><span class="card-description">${escapeHtml(t.short)}</span><span class="card-bottom">${new Set(['census','rates','chance-early','probability','expectation','mortality','life-tables','hypothesis-early','lln','normal','binomial']).has(t.id)?'<span class="card-lesson">'+(I18N.lang==='fa'?'درس کامل':'FULL LESSON')+'</span>':''}<span>${I18N.lang==='fa'? n.toLocaleString('fa-IR') : n} ${I18N.lang==='fa'? I18N.text('connections','Connections'): `CONNECTION${n===1?'':'S'}`}</span><span class="card-arrow" aria-hidden="true">↗</span></span></button>`;
  }
  function render(){
    const q=state.search.trim().toLowerCase();
    const visible=TOPICS.filter(t=>(state.family==='all'||t.family===state.family) && (!q || [t.title,t.short,t.body,t.question,fmtYear(t.year),familyName(t.family),...t.terms,...Object.values(TOPICS_FA[t.id]).flat()].join(' ').toLowerCase().includes(q)));
    const ids=new Set(visible.map(t=>t.id));
    $('resultCount').textContent=I18N.lang==='fa'?`${visible.length.toLocaleString('fa-IR')} از ${TOPICS.length.toLocaleString('fa-IR')} ایده`:`${visible.length} / ${TOPICS.length} ideas`;
    $('noResults').hidden=visible.length!==0;
    $('eraNav').innerHTML=ERAS.map(e=>{const n=visible.filter(t=>t.year>=e.from&&t.year<=e.to).length;return `<a href="#${e.id}" class="era-nav-item era-nav-item--${e.id}" ${n?'':'aria-disabled="true"'}><span class="era-nav-icon" aria-hidden="true"></span><span class="era-nav-period"><b>${escapeHtml(I18N.era(e).name)}</b><small>${I18N.era(e).period}</small></span></a>`}).join('');
    $('timeline').innerHTML=ERAS.map((era,i)=>{
      const localizedEra=I18N.era(era);
      const ts=visible.filter(t=>t.year>=era.from && t.year<=era.to).sort((a,b)=>a.year-b.year || a.title.localeCompare(b.title));
      if(!ts.length)return '';
      return `<section class="era era-chapter" id="${era.id}" style="${HistoricalScenes.timelineStyle(era)}" aria-labelledby="era-${era.id}">${HistoricalScenes.timelineHeader(era,localizedEra,ts,i)}<div class="era-content"><div class="era-introduction"><p>${escapeHtml(localizedEra.note)}</p><span>${I18N.lang==='fa'?'ایده‌ها و پیوندها':'IDEAS & CONNECTIONS'} <span aria-hidden="true">↓</span></span></div><div class="era-grid">${ts.map(makeCard).join('')}</div></div></section>`;
    }).join('');
    $('timeline').classList.toggle('compact',state.compact);
    $('densityBtn').setAttribute('aria-pressed',String(state.compact));
    $('densityBtn').firstChild.textContent=state.compact?I18N.text('expanded','Expanded view '):I18N.text('compact','Compact view ');
    $('timeline').querySelectorAll('[data-topic]').forEach(el=>el.addEventListener('click',()=>openTopic(el.dataset.topic)));
    HistoricalScenes.refresh();
    network?.update({topics:visible});
    syncView();
    if(state.selected)markRelations();
  }
  function syncView(){
    const graph=state.view==='network',fa=I18N.lang==='fa';
    $('network').hidden=!graph;$('timeline').hidden=graph;$('eraNav').hidden=graph;document.querySelector('.timeline-caption').hidden=graph;$('densityBtn').hidden=graph;
    $('timelineView').setAttribute('aria-pressed',String(!graph));$('networkView').setAttribute('aria-pressed',String(graph));
    document.querySelector('[data-view-label="timeline"]').textContent=fa?'خط زمان':'Timeline';document.querySelector('[data-view-label="network"]').textContent=fa?'شبکهٔ ایده‌ها':'Network of ideas';
    document.querySelector('.atlas-view-switch').setAttribute('aria-label',fa?'انتخاب نمای اطلس':'Choose atlas view');
    $('viewDescription').textContent=graph?(fa?'پیوندها را دنبال کنید؛ زمان تنها یکی از سرنخ‌هاست.':'Follow the connections. Time is just one clue.'):(fa?'ایده‌ها را در مسیر تاریخی دنبال کنید.':'Follow ideas through time.');
    $('networkExplore').innerHTML=fa?'کاوش در پیوندها <span aria-hidden="true">↗</span>':'Explore connections <span aria-hidden="true">↗</span>';
    if(graph)network?.resize();
  }
  function setView(view){state.view=view;const url=new URL(location.href);if(view==='network')url.searchParams.set('view','network');else url.searchParams.delete('view');history.replaceState(null,'',url);syncView();}
  function markRelations(){
    document.querySelectorAll('.topic-card.is-linked').forEach(el=>el.classList.remove('is-linked'));
    if(!state.selected)return;
    const ids=new Set([state.selected,...related(state.selected).map(e=>e.other)]);
    ids.forEach(id=>{const el=$(`topic-${id}`);if(el)el.classList.add('is-linked');});
  }
  function openTopic(id,{writeHash=true}={}){
    const original=byId.get(id);if(!original)return;const t=I18N.topic(original);
    if(!state.selected)state.lastFocus=document.activeElement;
    state.selected=id;
    const fam=familyById.get(t.family);
    $('detailFamily').innerHTML=`${familyIcon(t.family)}<span>${escapeHtml(familyName(t.family).toUpperCase())}</span>`;$('detailFamily').style.color=fam.color;
    $('detailYear').textContent=`${I18N.text('marker','HISTORICAL MARKER')}  /  ${fmtYear(t.year)}`;
    $('detailTitle').textContent=t.title;$('detailSubtitle').textContent=t.short;
    $('detailBody').textContent=t.body;$('detailQuestion').textContent=t.question;
    $('detailTerms').innerHTML=t.terms.map(s=>`<span>${escapeHtml(s)}</span>`).join('');
    const symbols={builds:'→',contrasts:'⇄',complements:'+'};
    const labels={builds:I18N.text('builds','Builds on / extended by'),contrasts:I18N.text('contrasts','Alternative or intellectual tension'),complements:I18N.text('complements','Complementary idea')};
    $('detailRelations').innerHTML=related(id).sort((a,b)=>byId.get(a.other).year-byId.get(b.other).year).map(e=>{
      const o=I18N.topic(byId.get(e.other));return `<button class="relation" data-go="${o.id}"><span class="relation-symbol">${symbols[e.type]}</span><span><strong>${escapeHtml(o.title)}</strong><small>${labels[e.type]} · ${fmtYear(o.year)}</small></span><span class="relation-arrow">↗</span></button>`;
    }).join('') || `<p>${I18N.text('noRelations','No mapped connections yet.')}</p>`;
    $('detailRelations').querySelectorAll('[data-go]').forEach(el=>el.addEventListener('click',()=>{
      const next=el.dataset.go;const node=$(`topic-${next}`);
      if(node)node.scrollIntoView({behavior:'smooth',block:'center'});
      openTopic(next);
    }));
    let lessonCta=$('detail').querySelector('#lessonLink');
    if(!lessonCta){
      lessonCta=document.createElement('a');lessonCta.id='lessonLink';lessonCta.className='secondary-button';
      $('detailRelations').closest('.detail-block').insertAdjacentElement('afterend',lessonCta);
    }
    const lessonAvailable=new Set(['census','rates','chance-early','probability','expectation','mortality','life-tables','hypothesis-early','lln','normal','binomial']).has(id);
    lessonCta.hidden=!lessonAvailable;
    if(lessonAvailable){lessonCta.href=`lessons.html#topic/${encodeURIComponent(id)}`;lessonCta.innerHTML='Open full lesson <span aria-hidden="true">→</span>';}
    $('copyStatus').textContent='';$('backdrop').hidden=false;$('detail').classList.add('open');$('detail').setAttribute('aria-hidden','false');$('detail').scrollTop=0;$('detail').querySelector('.detail-scroll').scrollTop=0;
    document.body.classList.add('lock');markRelations();
    if(writeHash)history.replaceState(null,'',`#topic/${encodeURIComponent(id)}`);
    setTimeout(()=>$('closeDetail').focus(),0);
  }
  function closeTopic({restoreHash=true}={}){
    if(!state.selected)return;
    state.selected=null;$('detail').classList.remove('open');$('detail').setAttribute('aria-hidden','true');
    if(!state.modal){$('backdrop').hidden=true;document.body.classList.remove('lock');}
    if(restoreHash && location.hash.startsWith('#topic/'))history.replaceState(null,'','#atlas');
    markRelations();if(state.lastFocus?.isConnected)state.lastFocus.focus();
  }
  function openInfo(kind){
    if(state.selected)closeTopic();
    state.lastFocus=document.activeElement;state.modal=true;state.modalKind=kind;
    const title=kind==='sources'?I18N.text('infoSources','Sources & methodology'):kind==='guide'?I18N.text('infoGuide','How to explore the atlas'):I18N.text('infoAbout','About this project');
    let html='';
    if(kind==='sources'){
      html=`<p>This is an <strong>educational map of concepts</strong>, not a claim to identify the single inventor of each method. Historical markers are approximate: some represent first publications, others the emergence or later consolidation of a field. Roots of many ideas are older than their marker.</p><p>Suggested starting points for verification and further reading:</p><ul>${SOURCES.map(s=>`<li><a href="${s.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(s.name)} ↗</a></li>`).join('')}</ul><p class="info-note">The conceptual links are editorial teaching choices. “Builds on” indicates a useful intellectual relationship, not a claim of exclusive historical influence. Dates and classifications can be refined as course lessons are developed.</p>`;
    }else if(kind==='guide'){
      html=`<p><strong>Read downward through time.</strong> Each section is an era; every card is a significant idea, organized by its approximate historical emergence.</p><ul><li>Choose a colored tradition to follow one perspective across centuries.</li><li>Search by thinker, concept, year, or question.</li><li>Open an idea to see its central question, core concepts, and links to related ideas.</li><li>Follow a connection to jump between ideas, including competing or complementary approaches.</li><li>Switch to compact mode to scan more concepts at once.</li></ul><p class="info-note">Chronology and conceptual dependency are not identical. A modern framework can clarify an older practice; an older idea can remain useful even after newer techniques emerge.</p>`;
    }else{
      html=`<p>Statistics asks how to learn from data under uncertainty. This atlas starts with counting and description; follows probability, inference, sampling, experimental design, modeling, and computation; and ends with contemporary questions about prediction, causal effects, and responsible decisions.</p><p>The first page is deliberately <strong>an intellectual map rather than a textbook chapter</strong>. It is designed to become the navigation hub for a complete foundational curriculum.</p><p class="info-note">Future chapters can attach lessons, worked examples, interactive demonstrations, exercises, datasets, and formative assessments to each concept without changing the overview.</p>`;
    }
    if(I18N.lang==='fa'){if(kind==='sources')html=MESSAGES_FA.sources+`<ul>${SOURCES.map(s=>`<li><a href="${s.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(s.name)} ↗</a></li>`).join('')}</ul><p class="info-note">${MESSAGES_FA.sourcesNote}</p>`;else html=MESSAGES_FA[kind];}
    if(kind==='guide')html+=I18N.lang==='fa'?'<p><strong>نمای شبکهٔ ایده‌ها:</strong> با دکمهٔ بالای اطلس از خط زمان به شبکه بروید. یک گره را انتخاب کنید تا پیوندهای مستقیم آن روشن شوند؛ نمای دوگامی، ارتباطات دورتر را نشان می‌دهد. نوع رابطه‌ها را فیلتر کنید، با کشیدن نقشه جابه‌جا شوید و با دکمه‌های + و − بزرگ‌نمایی کنید. فهرست انتخاب ایده و کلیدهای جهت نیز برای کاوش در دسترس‌اند.</p>':'<p><strong>Network of ideas:</strong> use the view switch above the atlas to explore connections. Select a node for its direct neighborhood, or choose two steps to reach further. Filter relationship types, drag the map, and zoom with + and −. The idea selector and arrow keys offer another way to navigate.</p>';
    $('infoTitle').textContent=title;$('infoContent').innerHTML=html;$('infoModal').hidden=false;$('infoModal').setAttribute('aria-hidden','false');$('backdrop').hidden=false;document.body.classList.add('lock');$('closeInfo').focus();
  }
  function closeInfo(){if(!state.modal)return;state.modal=false;$('infoModal').hidden=true;$('infoModal').setAttribute('aria-hidden','true');$('backdrop').hidden=true;document.body.classList.remove('lock');if(state.lastFocus?.isConnected)state.lastFocus.focus();}
  function syncHash(){const m=location.hash.match(/^#topic\/([\w-]+)$/);if(m && byId.has(m[1]))openTopic(m[1],{writeHash:false});else if(state.selected)closeTopic({restoreHash:false});}
  function init(){
    $('topicCount').textContent=TOPICS.length;$('relationshipCount').textContent=EDGES.length;
    network=AtlasNetwork.create($('network'),{openTopic,familyIcon});
    $('networkExplore').addEventListener('click',()=>{setView('network');$('atlas').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth',block:'start'});});
    $('timelineExplore').addEventListener('click',()=>setView('timeline'));
    $('timelineView').addEventListener('click',()=>setView('timeline'));$('networkView').addEventListener('click',()=>setView('network'));
    let stored='en';try{stored=localStorage.getItem('statisticsConnectedLanguage')||'en';}catch(e){};I18N.apply(stored);buildLegend();render();
    $('langSwitch').addEventListener('click',()=>{const next=I18N.lang==='fa'?'en':'fa';I18N.apply(next);buildLegend();render();if(state.selected)openTopic(state.selected,{writeHash:false});if(state.modal){const type=state.modalKind||'about';openInfo(type);}});
    $('search').addEventListener('input',e=>{state.search=e.target.value;render();});
    $('clearFilters').addEventListener('click',()=>{state.family='all';state.search='';$('search').value='';network.resetFilters();$('legend').querySelectorAll('[data-family]').forEach(b=>b.classList.toggle('active',b.dataset.family==='all'));render();});
    $('densityBtn').addEventListener('click',()=>{state.compact=!state.compact;render();});
    $('closeDetail').addEventListener('click',()=>closeTopic());
    $('closeInfo').addEventListener('click',closeInfo);
    $('backdrop').addEventListener('click',()=>{if(state.modal)closeInfo();else closeTopic();});
    $('aboutBtn').addEventListener('click',()=>openInfo('about'));
    $('guideBtn').addEventListener('click',()=>openInfo('guide'));
    $('sourcesBtn').addEventListener('click',()=>openInfo('sources'));
    $('copyLink').addEventListener('click',async()=>{const url=new URL(location.href);url.hash=`topic/${state.selected}`;try{await navigator.clipboard.writeText(url.href);$('copyStatus').textContent=I18N.text('copied','Link copied');}catch(e){$('copyStatus').textContent=url.href;}});
    document.addEventListener('keydown',e=>{
      if(e.key==='Escape'){if(state.modal)closeInfo();else if(state.selected)closeTopic();}
      if(e.key==='/'&&!state.modal&&!state.selected && !['INPUT','TEXTAREA'].includes(document.activeElement.tagName)){e.preventDefault();$('search').focus();}
      if(e.key==='Tab'&&(state.modal||state.selected)){const root=state.modal?$('infoModal'):$('detail');const focusable=[...root.querySelectorAll('a[href],button:not([disabled]),input:not([disabled])')];if(!focusable.length)return;const first=focusable[0],last=focusable[focusable.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}
    });
    window.addEventListener('hashchange',syncHash);
    syncHash();
  }
  init();
})();
