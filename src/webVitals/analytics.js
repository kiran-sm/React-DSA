export function sendToAnalytics({ name, delta, value, id, rating }) {
  const body = JSON.stringify({ name, delta, value, id, rating });

  if (navigator.sendBeacon) {
    navigator.sendBeacon("/analytics", body); // replace with your endpoint
  } else {
    fetch("/analytics", { body, method: "POST", keepalive: true });
  }
}
