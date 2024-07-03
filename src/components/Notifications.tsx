import React from 'react';
import { FaCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { LuInfo } from "react-icons/lu";
import { IoWarningOutline } from "react-icons/io5";
import { TbFaceIdError } from "react-icons/tb";

const icons = {
  info: <LuInfo />,
  success: <FaCheck />,
  warning: <IoWarningOutline />,
  error: <TbFaceIdError />
};

interface NotificationProps {
  type: 'info' | 'success' | 'warning' | 'error';
  message: string;
  Close: () => void;
}

const Notifications: React.FC<NotificationProps> = ({ type, message, Close = () => {} }) => {
  return (
    <div className={`flex items-center justify-between text-[18px] p-2 
    rounded shadow-md gap-2 w-fit ${type} text-white min-w-[250px]`}>
      <div className='flex items-center gap-2'>
        {icons[type]}
        {message}
      </div>
      <IoMdClose className='text-white cursor-pointer' onClick={Close} />
    </div>
  );
}

export default Notifications;
