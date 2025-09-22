
// main.js - loads i18n JSONs and applies translations to data-i18n fields
async function loadLocale(lang){
  try{
    const res = await fetch('/i18n/' + lang + '.json');
    const data = await res.json();
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      if(data[key]) el.innerText = data[key];
    });
  }catch(e){
    console.error('Failed to load locale',e);
  }
}

function setupLangSwitcher(){
  document.querySelectorAll('.lang-btn').forEach(btn=>{
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      loadLocale(lang);
      // persist
      localStorage.setItem('site_lang', lang);
    });
  });
  const saved = localStorage.getItem('site_lang') || 'zh';
  loadLocale(saved);
}

document.addEventListener('DOMContentLoaded', ()=>{
  setupLangSwitcher();
});
