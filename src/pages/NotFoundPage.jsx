import { NavLink } from "react-router-dom";
import Button from "../components/primitives/Button";
import Container from "../components/primitives/Container";
import { useI18n } from "../lang/i18n";

function NotFoundPage() {
  const { t } = useI18n();

  return (
    <main className="surface-section">
      <Container>
        <h1 style={{ color: "var(--color-primary)", marginTop: 0 }}>{t("pages.notFound.title")}</h1>
        <p style={{ color: "var(--color-text-muted)" }}>{t("pages.notFound.description")}</p>
        <NavLink to="/" style={{ display: "inline-block", marginTop: "1rem" }}>
          <Button>{t("pages.notFound.backHome")}</Button>
        </NavLink>
      </Container>
    </main>
  );
}

export default NotFoundPage;
