const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined;

function getSessionId(): string {
  const key = "demo-analytics-session";
  let value = sessionStorage.getItem(key);
  if (!value) {
    value = crypto.randomUUID();
    sessionStorage.setItem(key, value);
  }
  return value;
}

function getDeviceCategory(): "desktop" | "mobile" | "tablet" | "unknown" {
  const ua = navigator.userAgent;
  if (/iPad|Tablet/i.test(ua)) return "tablet";
  if (/Mobi|Android|iPhone/i.test(ua)) return "mobile";
  if (ua) return "desktop";
  return "unknown";
}

function getBrowserFamily(): string {
  const ua = navigator.userAgent;
  if (/Edg\//.test(ua)) return "Edge";
  if (/Firefox\//.test(ua)) return "Firefox";
  if (/Chrome\//.test(ua)) return "Chrome";
  if (/Safari\//.test(ua)) return "Safari";
  return "Other";
}

/**
 * Stores analytics metadata only. Never pass a password, credential, token,
 * form value, or account identifier to this function.
 */
export async function recordDemoEvent(eventType: "demo_next_click" | "demo_login_click") {
  if (!SUPABASE_URL || !SUPABASE_KEY) return;
  const response = await fetch(`${SUPABASE_URL}/rest/v1/demo_events`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      display_name: "Demo visitor",
      event_type: eventType,
      device_category: getDeviceCategory(),
      browser_family: getBrowserFamily(),
      session_id: getSessionId(),
    }),
  });
  if (!response.ok) {
    console.error("Demo analytics event could not be saved:", response.status);
  }
}
