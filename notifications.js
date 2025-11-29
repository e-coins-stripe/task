async function notify(message){
  if(Notification.permission!=='granted') await Notification.requestPermission();
  if(Notification.permission==='granted') new Notification('Task Coins',{body:message});
  ding.currentTime=0; ding.play();
}