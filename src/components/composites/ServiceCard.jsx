function ServiceCard({ item }) {
  return (
    <article className="surface-card service-card">
      <img src={item.image} alt={item.title} loading="lazy" />
      <div className="surface-card__body">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </article>
  );
}

export default ServiceCard;
