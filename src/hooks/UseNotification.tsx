import React, { useState, useEffect } from "react";
import Notifications from "../components/Notifications";

interface NotificationProps {
  type: 'info' | 'success' | 'warning' | 'error';
  message: string;
  Close: () => void;
  duration?: number;
}

export const useNotification = (position: string) => {
  const [notifications, setNotifications] = useState<NotificationProps | null>(null);

  const TriggerNotification = (notify: Omit<NotificationProps, 'Close'>) => {
    setNotifications({
      ...notify,
      Close: () => setNotifications(null)
    });

    if (notify.duration) {
      setTimeout(() => {
        setNotifications(null);
      }, notify.duration);
    }
  };

  const NotificationContainer = notifications ? (
    <div className={position}>
      <Notifications {...notifications} />
    </div>
  ) : null;

  return { NotificationContainer, TriggerNotification };
};
