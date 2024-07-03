
import { useNotification } from "./hooks/UseNotification";  

const App = () => {
  const { NotificationContainer, TriggerNotification } = useNotification("top-right");

  return (
    <>
      <div className="p-5 flex items-center justify-center h-screen">
        <div className="w-[50%] h-[50%] grid grid-cols-2 gap-5 text-white font-bold text-[20px]">
        <button
          onClick={() =>
            TriggerNotification({
              duration: 3000,
              message: "File sent successfully...",
              type: "success"})}
          className="p-2 rounded bg-green-400">
          Success
        </button>
        <button
          onClick={() =>
            TriggerNotification({
              duration: 3000,
              message: "File send error",
              type: "error"})}className="p-2 rounded bg-red-400">
           Error
        </button>
        <button
          onClick={() =>
            TriggerNotification({
              duration: 3000,
              message: "File send warning",
              type: "warning"})}className="p-2 rounded bg-yellow-400">
           Warning
        </button>
        <button
          onClick={() =>
            TriggerNotification({
              duration: 3000,
              message: "File send info",
              type: "info"})}className="p-2 rounded bg-blue-400">
           Info
        </button>
        </div>
      </div>

        {NotificationContainer}
    </>
  );
};

export default App;
