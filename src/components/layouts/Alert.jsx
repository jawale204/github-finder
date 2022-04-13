import React, { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";
import { FaExclamationCircle } from "react-icons/fa";
function Alert() {
  const { alert } = useContext(AlertContext);

  if (alert === null) {
    return <></>;
  } else {
    if (alert.type === "error") {
      return (
        <>
          <div>
            <FaExclamationCircle className="inline mr-2" />
            {alert.msg}
          </div>
        </>
      );
    }
  }
}

export default Alert;
