start-ent.onclick = startEntertainment;

function startEntertainment(){
  const name = ent-name.value.trim();
  const cost = Number(ent-cost.value)||0;
  const mins = Number(ent-mins.value)||0;
  if(!name||cost<=0||mins<=0) return alert('Fill fields');
  const total = cost*mins;
  if(APP_STATE.coins < total) return alert('Not enough coins');
  APP_STATE.coins-=total;
  coins.textContent=APP_STATE.coins;
  saveUserData();
  const id=Date.now();
  const div=document.createElement('div');
  div.className='ent-item';
  div.textContent=`${name} running...`;
  ent-list.appendChild(div);
  setTimeout(()=>notify(`${name} finished`), mins*60000);
}