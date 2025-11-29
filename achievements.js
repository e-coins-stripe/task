function renderAchievements(){
  ach-list.innerHTML='';
  (APP_STATE.achievements||[]).forEach(a=>{
    const d=document.createElement('div');
    d.className='task'; d.textContent=a;
    ach-list.appendChild(d);
  });
}