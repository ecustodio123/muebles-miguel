import Button from "../primitives/Button";
import Container from "../primitives/Container";
import SectionHeading from "../primitives/SectionHeading";
import { useI18n } from "../../lang/i18n";

function ContactBlock() {
  const { t } = useI18n();

  return (
    <section className="surface-section">
      <Container>
        <SectionHeading title={t("contactBlock.title")} description={t("contactBlock.description")} />
        <div className="contact-block">
          <article className="contact-panel">
            <div className="form-grid">
              <input className="input" placeholder={t("contactBlock.fields.fullName")} />
              <input className="input" placeholder={t("contactBlock.fields.phone")} />
            </div>
            <input className="input" placeholder={t("contactBlock.fields.email")} style={{ marginTop: "0.7rem" }} />
            <select className="select" style={{ marginTop: "0.7rem" }} defaultValue="">
              <option value="" disabled>
                {t("contactBlock.fields.interestedIn")}
              </option>
              <option>{t("contactBlock.options.option1")}</option>
              <option>{t("contactBlock.options.option2")}</option>
            </select>
            <textarea
              className="textarea"
              rows="5"
              placeholder={t("contactBlock.fields.message")}
              style={{ marginTop: "0.7rem" }}
            />
            <Button className="w-full" style={{ marginTop: "0.7rem" }}>
              {t("contactBlock.submit")}
            </Button>
          </article>

          <article className="contact-panel">
            <iframe
              title={t("contactBlock.mapTitle")}
              src="https://maps.google.com/maps?q=New%20Jersey&t=&z=11&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
            />
          </article>
        </div>
      </Container>
    </section>
  );
}

export default ContactBlock;
