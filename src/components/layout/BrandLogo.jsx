import { useI18n } from "../../lang/i18n";

function BrandLogo({ className = "" }) {
  const { t } = useI18n();

  return (
    <div className={`brand-logo ${className}`.trim()}>
      <p className="brand-logo__word">
        Mubles <span className="accent">Miguel</span>
      </p>
      <p className="brand-logo__sub">{t("logo.subtitle")}</p>
    </div>
  );
}

export default BrandLogo;
