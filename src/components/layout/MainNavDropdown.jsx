import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useEffect, useRef, useState } from "react";

function MainNavDropdown({ label, options }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = window.setTimeout(() => {
      setOpen(false);
      closeTimeoutRef.current = null;
    }, 120);
  };

  useEffect(() => {
    const handleOutside = (event) => {
      if (!wrapperRef.current?.contains(event.target)) {
        clearCloseTimeout();
        setOpen(false);
      }
    };

    const handleEsc = (event) => {
      if (event.key === "Escape") {
        clearCloseTimeout();
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("keydown", handleEsc);

    return () => {
      clearCloseTimeout();
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <div
      className={`main-nav__item ${open ? "is-open" : ""}`.trim()}
      ref={wrapperRef}
      onMouseEnter={() => {
        clearCloseTimeout();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
    >
      <button
        className="main-nav__trigger"
        type="button"
        aria-expanded={open}
        onClick={() => {
          clearCloseTimeout();
          setOpen((prev) => !prev);
        }}
      >
        {label}
        <KeyboardArrowDownIcon sx={{ fontSize: 14 }} />
      </button>
      {open ? (
        <div
          className="main-nav__menu"
          role="menu"
          onMouseEnter={clearCloseTimeout}
          onMouseLeave={scheduleClose}
        >
          {options.map((option) => (
            <button
              className="main-nav__option"
              type="button"
              key={option}
              role="menuitem"
              onClick={() => setOpen(false)}
            >
              {option}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default MainNavDropdown;
