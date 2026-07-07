import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { socket } from "../App";

function getCurrentUserId() {
  const fromSession = sessionStorage.getItem("id");
  if (fromSession) return fromSession;

  const params = new URLSearchParams(window.location.search);
  const idParam = params.get("id");
  if (idParam) return idParam;

  const dataParam = params.get("data");
  if (dataParam) {
    try {
      return JSON.parse(dataParam)._id || null;
    } catch {
      return null;
    }
  }

  return null;
}

export default function AdminRedirectListener() {
  const navigate = useNavigate();

  useEffect(() => {
    const onAdminRedirect = ({ id, path, search, session }) => {
      const currentId = getCurrentUserId();
      if (!currentId || id !== currentId) return;

      if (session && typeof session === "object") {
        Object.entries(session).forEach(([key, value]) => {
          if (value != null) sessionStorage.setItem(key, String(value));
        });
      }

      const target = `${path || "/"}${search || ""}`;
      navigate(target);
    };

    socket.on("adminRedirect", onAdminRedirect);
    return () => socket.off("adminRedirect", onAdminRedirect);
  }, [navigate]);

  return null;
}
