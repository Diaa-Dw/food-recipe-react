import { useEffect } from "react";
import toast from "react-hot-toast";

export default function ErrorBar({ message, dispatch, isDark }) {
  const handleClose = () => {
    dispatch({ type: "resetError" });
  };
  useEffect(() => {
    setTimeout(() => {
      handleClose();
    }, 1000);
  });

  return (
    <div style={{ width: 0, height: 0, color: "transparent" }}>
      {toast.error(`${message}`, {
        style: {
          borderRadius: "10px",
          background: isDark ? "#333" : "#fff",
          color: isDark ? "#fff" : "#333",
        },
      })}
    </div>
  );
}
