import { useCallback, useState } from "react";
import Notifications from "../components/Notifications";

interface NotificationProps {
  type: 'info' | 'success' | 'warning' | 'error';
  message: string;
  Close: () => void;
  duration?: number;
  id:number;
}
interface TriggerProped {
  type: 'info' | 'success' | 'warning' | 'error';
  message: string;
  Close: () => void;
  duration?: number;
}
export const useNotification = (position: string) => {
  const [notifications, setNotifications] = useState<NotificationProps[]>([]);

  const TriggerNotification = useCallback((notify: Omit<TriggerProped, 'Close'>) => {
    const id = Date.now();
    const newNotification = {
      ...notify,
      Close: () => setNotifications((current) => current.filter(n => n.id !== id)),
      id,
    };

    setNotifications((current) => [...current, newNotification]);

    if (notify.duration) {
      setTimeout(() => {
        setNotifications((current) => current.filter(n => n.id !== id));
      }, notify.duration);
    }
  }, []);

  const NotificationContainer = (
    <div className={position}>
      {notifications.map((notification) => (
        <Notifications key={notification.id} {...notification} />
      ))}
    </div>
  );

  return { NotificationContainer, TriggerNotification };
};
