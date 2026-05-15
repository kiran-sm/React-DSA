export function sendToAnalytics({ name, delta, value, id, rating }) {
  // for local host
  if (import.meta.env.DEV) {
    console.log(`📊 ${name}: ${value} (${rating})`);
    return; // ✅ skip sending in development
  }
  // for production comment above if block

  const body = JSON.stringify({ name, delta, value, id, rating });

  if (navigator.sendBeacon) {
    navigator.sendBeacon("/analytics", body); // replace with your endpoint
  } else {
    fetch("/analytics", { body, method: "POST", keepalive: true });
  }
}
