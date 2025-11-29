add-task.onclick = createTask;

function createTask(){
  const name = task-name.value.trim();
  const rate = Number(task-rate.value) || 0;
  if(!name || rate<=0) return alert('Enter fields');
  const task = { id: Date.now().toString(), name, rate };
  APP_STATE.tasks.push(task);
  renderTaskList();
  saveUserData();
}

function renderTaskList(){
  task-list.innerHTML = '';
  APP_STATE.tasks.forEach(t=>{
    const el=document.createElement('div');
    el.className='task';
    el.innerHTML=`<strong>${t.name}</strong> <small>${t.rate} coins/min</small>
    <div class="row"><input type="number" id="mins-${t.id}"><button onclick="completeTask('${t.id}')">Complete</button></div>`;
    task-list.appendChild(el);
  });
}

function completeTask(id){
  const mins = Number(document.getElementById('mins-'+id).value)||0;
  if(mins<=0) return;
  const t = APP_STATE.tasks.find(x=>x.id===id);
  const earned = mins*t.rate;
  APP_STATE.coins+=earned;
  coins.textContent = APP_STATE.coins;
  saveUserData();
  alert(`Earned ${earned}`);
}