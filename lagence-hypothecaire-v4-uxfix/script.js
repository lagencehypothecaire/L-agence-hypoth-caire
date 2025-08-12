// Utilities
function equityRatio(value, balance){ return (value - balance) / value; }
function formatMoney(num){ try{return num.toLocaleString('fr-CA', {style:'currency', currency:'CAD'})}catch(e){return `${num} $`} }

// Hero dynamic savings (mock)
(function(){
  const debtsSample = 35000, rateDiff = 0.18, monthly = Math.round((debtsSample * rateDiff)/12);
  const node = document.getElementById('heroSaving');
  if(node) node.textContent = formatMoney(monthly) + "/mois";
})();

// Quiz modal logic
const quizModal = document.getElementById('quizModal');
document.getElementById('open-quiz')?.addEventListener('click', (e)=>{
  e.preventDefault();
  if(typeof quizModal.showModal === 'function') quizModal.showModal();
  else quizModal.setAttribute('open', '');
});

// Handle quiz submit
document.getElementById('quizSubmit')?.addEventListener('click', async (e)=>{
  e.preventDefault();
  const form = document.getElementById('quizForm');
  if(!form.reportValidity()) return;
  const fd = new FormData(form);
  const data = Object.fromEntries(fd.entries());
  const ok = (data.owner2y === 'Oui' && data.income === 'Oui' && equityRatio(+data.value, +data.balance) >= 0.15);
  const savings = Math.max(0, Math.round((+data.debts || 0) * 0.18 / 12));
  const result = document.getElementById('quizResult');
  result.hidden = false;
  result.innerHTML = ok
    ? `<h4>Admissible 🎉</h4><p>Économies mensuelles potentielles: <strong>${formatMoney(savings)}</strong></p>
       <p><em>Estimation indicative — analyse complète requise.</em></p>
       <a class="btn btn-primary" href="#contact">Céduler un appel gratuit</a>`
    : `<h4>À vérifier avec un conseiller</h4>
       <p>Il existe peut-être des options (alternatives/privées). Parlons-en.</p>
       <a class="btn btn-outline" href="#contact">Nous contacter</a>`;

  try{
    await fetch(window.WEBHOOK_URL, {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        source: 'Quiz Admissibilité',
        eligible: ok,
        equity_ratio: equityRatio(+data.value, +data.balance),
        ...data
      })
    });
  }catch(err){ console.warn('Webhook error', err); }
});

// Contact form (demo only)
document.getElementById('contactForm')?.addEventListener('submit', async (e)=>{
  e.preventDefault();
  const form = e.target;
  const fd = new FormData(form);
  const data = Object.fromEntries(fd.entries());
  try{
    await fetch(window.WEBHOOK_URL, {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({source:'Contact', ...data})
    });
  }catch(err){ console.warn('Contact webhook error', err); }
  document.getElementById('contactThankyou').hidden = false;
  form.reset();
});

// Mobile menu toggle
(function(){
  const btn = document.querySelector('.menu-toggle');
  const nav = document.getElementById('site-nav');
  if(btn && nav){
    btn.addEventListener('click', ()=>{
      const open = nav.classList.toggle('nav--open');
      btn.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>{
      nav.classList.remove('nav--open');
      btn.setAttribute('aria-expanded','false');
    }));
  }
})();

// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click', (e)=>{
    const id = link.getAttribute('href');
    if(id.length > 1){
      const target = document.querySelector(id);
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    }
  });
});
