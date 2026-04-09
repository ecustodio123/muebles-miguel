import { testimonials } from "../../data/demoContent";
import { useI18n } from "../../lang/i18n";
import TestimonialCard from "../composites/TestimonialCard";
import Container from "../primitives/Container";
import SectionHeading from "../primitives/SectionHeading";

function TestimonialsBlock() {
  const { t } = useI18n();

  return (
    <section className="surface-section">
      <Container>
        <SectionHeading title={t("home.testimonialsBlock.title")} description={t("home.testimonialsBlock.description")} />
        <div className="card-grid three">
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
      </Container>
    </section>
  );
}

export default TestimonialsBlock;
