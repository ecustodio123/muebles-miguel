import { Link } from "react-router-dom";
import { aboutTeaserImage } from "../../data/demoContent";
import { useI18n } from "../../lang/i18n";
import Container from "../primitives/Container";

function HomeAboutTeaserBlock({ ctaTo = "/components" }) {
  const { t } = useI18n();
  const ctaClassName = "btn btn-outline";
  const ctaLabel = t("home.aboutTeaser.cta");

  return (
    <section id="about" className="surface-section">
      <Container>
        <div className="home-about-teaser">
          <div>
            <p className="hero2-kicker">{t("home.aboutTeaser.kicker")}</p>
            <h2>{t("home.aboutTeaser.title")}</h2>
            <p>{t("home.aboutTeaser.description")}</p>
            <ul className="hero-highlights" aria-label={t("home.aboutTeaser.listAria")}>
              <li>{t("home.aboutTeaser.point1")}</li>
              <li>{t("home.aboutTeaser.point2")}</li>
              <li>{t("home.aboutTeaser.point3")}</li>
            </ul>
            {ctaTo.startsWith("#") ? (
              <a className={ctaClassName} href={ctaTo}>
                {ctaLabel}
              </a>
            ) : (
              <Link className={ctaClassName} to={ctaTo}>
                {ctaLabel}
              </Link>
            )}
          </div>

          <div className="home-about-teaser__media">
            <img src={aboutTeaserImage} alt={t("home.aboutTeaser.imageAlt")} loading="lazy" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HomeAboutTeaserBlock;
