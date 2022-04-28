import { useContext } from "react";
import { AlertContext } from "../../context/alert/AlertContext";
import { FaUser, FaServer } from "react-icons/fa";

export const Alert = () => {
  const { alert } = useContext(AlertContext);

  switch (alert?.type) {
    case "user": {
      return (
        <p className="flex items-start mb-4 space-x-2">
          <FaUser /> {alert?.msg}
        </p>
      );
    }
    case "server": {
      return (
        <p className="flex items-start mb-4 space-x-2">
          <FaServer /> {alert?.msg}
        </p>
      );
    }
    default: {
      return <></>;
    }
  }
};
