import { useEffect, useRef } from "react";

// Full-screen overlay panel: Esc to close, focus moves in and returns on close.
export default function Panel({ title, onClose, children }) {
  const ref = useRef(null);

  useEffect(() => {
    const previous = document.activeElement;
    ref.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previous?.focus?.();
    };
  }, [onClose]);

  return (
    <div
      className="panel"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      tabIndex={-1}
      ref={ref}
    >
      <button className="panel-close" onClick={onClose}>
        <span aria-hidden="true">×</span> Close
      </button>
      <div className="panel-inner">{children}</div>
    </div>
  );
}
