import { NavLink } from "react-router-dom";
import { useI18n } from "../../lang/i18n";
import Container from "../primitives/Container";

function SiteFooter() {
  const { t } = useI18n();

  return (
    <footer className="footer">
      <Container className="footer-grid">
        <div>
          <h3 style={{ marginTop: 0 }}>{t("footer.title")}</h3>
          <p>{t("footer.description")}</p>
        </div>
        <ul className="footer-links">
          <li>
            <NavLink to="/">{t("navigation.home")}</NavLink>
          </li>
          <li>
            <NavLink to="/components">{t("navigation.components")}</NavLink>
          </li>
          <li>
            <a href="#">{t("navigation.about")}</a>
          </li>
          <li>
            <a href="#">{t("navigation.contact")}</a>
          </li>
        </ul>
        <ul className="footer-links">
          <li>{t("footer.highlights.cloneBuild")}</li>
          <li>{t("footer.highlights.tokenBased")}</li>
          <li>{t("footer.highlights.responsive")}</li>
        </ul>
      </Container>
      <div className="footer-bottom">{t("footer.rights")}</div>
    </footer>
  );
}

export default SiteFooter;
