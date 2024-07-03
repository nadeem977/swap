import React from "react";
import { useNotification } from "./hooks/UseNotification";  

const App = () => {
  const { NotificationContainer, TriggerNotification } = useNotification("top-right");

  return (
    <>
      <div className="p-5">
        <button
          onClick={() =>
            TriggerNotification({
              duration: 3000,
              message: "File sent successfully...",
              type: "success"
            })
          }
          className="p-2 rounded bg-green-400"
        >
          Trigger Notification
        </button>
        <button
          onClick={() =>
            TriggerNotification({
              duration: 3000,
              message: "File send error",
              type: "error"
            })
          }
          className="p-2 rounded bg-green-400 m-1"
        >
          Trigger Error
        </button>
        {NotificationContainer}
      </div>
    </>
  );
};

export default App;
