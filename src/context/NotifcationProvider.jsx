import React, { createContext, useState } from "react";
export const NotificationContext = createContext();
let timeoutId;
const NotificationProvider = ({ children }) => {
  const [notifcation, setNotifcation] = useState("");
  const [classes, setClasses] = useState("");

  const updateNotifcation = (type, value) => {
    if(timeoutId) clearTimeout(timeoutId);
    switch (type) {
      case "error":
        setClasses("bg-red-500");
        break;
      case "success":
        setClasses("bg-green-500");
        break;
      case "warning":
        setClasses("bg-yellow-500");
        break;
      default:
        setClasses("bg-red-500");
    }
    setNotifcation(value);
    
    timeoutId=setTimeout(() => {
      setNotifcation("");
    }, 3000);
  };
  return (
    <NotificationContext.Provider value={{ updateNotifcation }}>
      {children}
      {notifcation && (
        <div className="fixed left-1/2 -translate-x-1/2 top-24 ">
          <div className="bounce-custom shadow-md shadow-gray-400 rounded">
            <p className={classes + " text-white px-4 py-2 font-semibold"}>
              {notifcation}
            </p>
          </div>
        </div>
      )}
    </NotificationContext.Provider>
  );
};
export default NotificationProvider;
