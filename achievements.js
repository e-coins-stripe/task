// notifications.js (module)
export async function notify(message) {
  try {
    if (Notification.permission !== "granted") {
      await Notification.requestPermission();
    }
    if (Notification.permission === "granted") {
      new Notification("Task Coin System", { body: message });
    }
  } catch (e) {
    console.warn("Notification error:", e);
  }

  // play ding if available
  const ding = document.getElementById("ding");
  if (ding) {
    try { ding.currentTime = 0; await ding.play(); } catch(e){ /* ignore autoplay block */ }
  }
}
