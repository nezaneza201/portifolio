const menuBtn=document.querySelector('.menu-btn');const links=document.querySelector('.nav-links');menuBtn?.addEventListener('click',()=>links.classList.toggle('open'));document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));

const form=document.getElementById('websiteRequest');
form?.addEventListener('submit',e=>{
  e.preventDefault();
  const d=new FormData(form);
  const message=['Hello Enzo, I would like to discuss a website project.','','Business: '+d.get('business'),'Type: '+d.get('type'),'Contact: '+d.get('phone'),'Needs: '+d.get('needs'),'Budget: '+d.get('budget'),'Deadline: '+(d.get('deadline')||'Not specified')].join('\n');
  window.open('https://wa.me/250798488613?text='+encodeURIComponent(message),'_blank','noopener');
});