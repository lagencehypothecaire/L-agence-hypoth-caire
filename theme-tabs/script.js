function equityRatio(v,b){return (v-b)/v;}function formatMoney(n){try{return n.toLocaleString('fr-CA',{style:'currency',currency:'CAD'})}catch(e){return n+' $'}}
(function(){const d=35000,m=Math.round((d*0.18)/12);const n=document.getElementById('heroSaving');if(n)n.textContent=formatMoney(m)+'/mois';})();
(function(){const b=document.querySelector('.menu-toggle');const n=document.getElementById('site-nav');if(b&&n){b.addEventListener('click',()=>{const o=n.classList.toggle('nav--open');b.setAttribute('aria-expanded',String(o));});n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{n.classList.remove('nav--open');b.setAttribute('aria-expanded','false');}));}})();
document.querySelectorAll('a[href^="#"]').forEach(l=>l.addEventListener('click',e=>{const id=l.getAttribute('href');if(id.length>1){const t=document.querySelector(id);if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'});}}}));
(function(){
  const tabs = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.tabpanel');
  tabs.forEach((t,i)=>t.addEventListener('click', ()=>{
    tabs.forEach(tb=>{tb.classList.remove('is-active');tb.setAttribute('aria-selected','false');});
    panels.forEach((p,j)=>{p.classList.remove('is-active'); p.hidden = true;});
    t.classList.add('is-active'); t.setAttribute('aria-selected','true');
    panels[i].classList.add('is-active'); panels[i].hidden = false;
  }));
})();
