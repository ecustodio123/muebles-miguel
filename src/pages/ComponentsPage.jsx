import ServiceCard from "../components/composites/ServiceCard";
import TestimonialCard from "../components/composites/TestimonialCard";
import Button from "../components/primitives/Button";
import Container from "../components/primitives/Container";
import SectionHeading from "../components/primitives/SectionHeading";
import { services, testimonials } from "../data/demoContent";
import { useI18n } from "../lang/i18n";

function ComponentsPage() {
  const { t } = useI18n();

  return (
    <main className="components-showcase">
      <Container className="showcase-stack">
        <SectionHeading title={t("pages.components.title")} description={t("pages.components.description")} />

        <div className="showcase-row">
          <Button>{t("pages.components.buttonPrimary")}</Button>
          <Button variant="secondary">{t("pages.components.buttonSecondary")}</Button>
          <Button variant="outline">{t("pages.components.buttonOutline")}</Button>
        </div>

        <div className="showcase-row">
          <div className="card-grid four" style={{ width: "100%" }}>
            {services.slice(0, 4).map((item) => (
              <ServiceCard
                key={item.id}
                item={{
                  image: item.image,
                  title: t(`catalog.services.${item.id}.title`),
                  description: t(`catalog.services.${item.id}.description`),
                }}
              />
            ))}
          </div>
        </div>

        <div className="showcase-row">
          <div className="card-grid three" style={{ width: "100%" }}>
            {testimonials.map((item) => (
              <TestimonialCard
                key={item.id}
                item={{
                  name: t(`catalog.testimonials.${item.id}.name`),
                  text: t(`catalog.testimonials.${item.id}.text`),
                }}
              />
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}

export default ComponentsPage;
