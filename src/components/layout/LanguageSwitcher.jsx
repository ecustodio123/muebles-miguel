import { useEffect, useRef, useState } from "react";
import { useI18n } from "../../lang/i18n";

function LanguageSwitcher() {
  const { language, setLanguage, t } = useI18n();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleOutside = (event) => {
      if (!wrapperRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <div className={`language-fab ${open ? "is-open" : ""}`.trim()} ref={wrapperRef}>
      <button
        type="button"
        className="language-fab__trigger"
        aria-label={t("language.switchLabel")}
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        {t("language.switchLabel")} · {t(`language.${language}`)}
      </button>

      <div className="language-fab__menu" role="menu" aria-label={t("language.switchLabel")}>
        <button
          type="button"
          className={`language-fab__option ${language === "en" ? "is-active" : ""}`.trim()}
          onClick={() => {
            setLanguage("en");
            setOpen(false);
          }}
        >
          {t("language.en")}
        </button>
        <button
          type="button"
          className={`language-fab__option ${language === "es" ? "is-active" : ""}`.trim()}
          onClick={() => {
            setLanguage("es");
            setOpen(false);
          }}
        >
          {t("language.es")}
        </button>
      </div>
    </div>
  );
}

export default LanguageSwitcher;
