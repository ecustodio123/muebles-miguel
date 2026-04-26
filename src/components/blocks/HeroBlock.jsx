import { heroImage } from "../../data/demoContent";
import { useI18n } from "../../lang/i18n";
import Button from "../primitives/Button";
import Container from "../primitives/Container";

function HeroBlock() {
  const { t } = useI18n();

  return (
    <section id="home" className="page-hero">
      <Container className="page-hero__inner">
        <div>
          <h1>{t("home.hero.title")}</h1>
          <p>{t("home.hero.description")}</p>
          <Button as="a" href={t("business.whatsappHref")} target="_blank" rel="noreferrer" variant="outline">
            {t("home.hero.cta")}
          </Button>
        </div>
        <img src={heroImage} alt={t("home.hero.imageAlt")} />
      </Container>
    </section>
  );
}

export default HeroBlock;
