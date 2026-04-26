import PhoneIcon from "@mui/icons-material/Phone";
import { Link } from "react-router-dom";
import { topNavLinks } from "../../data/navigation";
import { useI18n } from "../../lang/i18n";
import Container from "../primitives/Container";
import BrandLogo from "./BrandLogo";
import MainNavDropdown from "./MainNavDropdown";

function SiteHeader() {
  const { t } = useI18n();

  return (
    <header className="site-header">
      <Container className="header-top">
        <Link to="/" aria-label={t("header.homeAria")}>
          <BrandLogo />
        </Link>

        <nav className="header-links" aria-label={t("header.navAria")}>
          {topNavLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
            >
              {t(`navigation.${link.key}`)}
            </a>
          ))}
          <a className="header-phone" href={`tel:${t("business.phoneHref")}`}>
            <PhoneIcon sx={{ fontSize: 15, marginBottom: "-2px" }} /> {t("business.phoneDisplay")}
          </a>
        </nav>
      </Container>

      {/* <div className="main-nav-wrap">
        <Container className="main-nav">
          {mainNavDropdowns.map((entry) => (
            <MainNavDropdown
              key={entry.key}
              label={t(`mainNav.categories.${entry.key}`)}
              options={entry.optionKeys.map((optionKey) => t(`mainNav.options.${optionKey}`))}
            />
          ))}
        </Container>
      </div> */}
    </header>
  );
}

export default SiteHeader;
