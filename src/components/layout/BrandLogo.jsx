import { useI18n } from "../../lang/i18n";
import suvanetLogo from "../../assets/img/brand/suvanet-logo.png";

function BrandLogo({ className = "" }) {
  const { t } = useI18n();

  return (
    <div className={`brand-logo ${className}`.trim()}>
      <img className="brand-logo__mark" src={suvanetLogo} alt={t("logo.name")} style={{ objectPosition: 'center' }} />
      <p className="brand-logo__sub">{t("logo.subtitle")}</p>
    </div>
  );
}

export default BrandLogo;
