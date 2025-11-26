// Request notification permission
export async function requestNotificationPermission() {
  if (!("Notification" in window)) {
    console.log("This browser does not support notifications");
    return false;
  }

  const permission = await Notification.requestPermission();

  if (permission === "granted") {
    console.log("Notification permission granted");
    return true;
  } else {
    console.log("Notification permission denied");
    return false;
  }
}

interface notificationsOptions {
  body?: string
  icon?: string
  badge?: string
  tag?: string
  requireInteraction?: boolean
}

export function sendNotification(title: string, options: notificationsOptions = {}) {
  if (Notification.permission === "granted") {
    new Notification(title, {
      body: options.body || "This is the notification body",
      icon: options.icon || "/icon.png", // Path to your icon
      badge: options.badge || "/badge.png",
      tag: options.tag || "default", // Prevents duplicate notifications
      requireInteraction: options.requireInteraction || false,
    });
  } else {
    console.log("Notification permission not granted");
  }
}
