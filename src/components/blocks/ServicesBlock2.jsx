import { serviceShowcase, supportServiceKeys } from "../../data/demoContent";
import { useI18n } from "../../lang/i18n";
import Container from "../primitives/Container";
import SectionHeading from "../primitives/SectionHeading";

function ServicesBlock2({
  sectionClassName = "surface-section",
  maxItems = serviceShowcase.length,
  showSupport = true,
  showAllServicesLink = true,
  primaryCtaHref,
  allServicesHref = "/components",
}) {
  const { t } = useI18n();
  const servicesToRender = serviceShowcase.slice(0, maxItems);
  const resolvedPrimaryCtaHref = primaryCtaHref ?? t("business.whatsappHref");

  return (
    <section id="services" className={sectionClassName}>
      <Container>
        <SectionHeading title={t("home.servicesBlock2.title")} description={t("home.servicesBlock2.description")} />

        <div className="services-overview">
          <p className="services-overview__intro">{t("home.servicesBlock2.intro")}</p>

          <div className="services-showcase-grid">
            {servicesToRender.map((service) => (
              <article key={service.id} className="service-showcase-card">
                <img src={service.image} alt={t(`catalog.serviceShowcase.${service.id}.title`)} loading="lazy" />
                <div className="service-showcase-card__body">
                  <h3>{t(`catalog.serviceShowcase.${service.id}.title`)}</h3>
                  <p>{t(`catalog.serviceShowcase.${service.id}.description`)}</p>
                  <ul className="services-points-list">
                    {service.pointKeys.map((pointKey) => (
                      <li key={pointKey}>{t(`catalog.serviceShowcase.${service.id}.${pointKey}`)}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          {showSupport ? (
            <article className="services-support">
              <h3>{t("home.servicesBlock2.supportTitle")}</h3>
              <div className="services-chip-list">
                {supportServiceKeys.map((key) => (
                  <span key={key} className="service-chip">
                    {t(`catalog.serviceSupport.${key}`)}
                  </span>
                ))}
              </div>
              <a className="btn btn-primary services-overview__cta" href={resolvedPrimaryCtaHref} target="_blank" rel="noreferrer">
                {t("home.servicesBlock2.cta")}
              </a>
            </article>
          ) : null}

          {showAllServicesLink ? (
            <div className="services-overview__all-link">
              <a className="btn btn-outline" href={allServicesHref}>
                {t("home.servicesBlock2.allServicesCta")}
              </a>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

export default ServicesBlock2;
