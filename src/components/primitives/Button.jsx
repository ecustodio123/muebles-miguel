function Button({ as: Component = "button", children, variant = "primary", type = "button", className = "", ...props }) {
  const variantClass = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    outline: "btn-outline",
  }[variant];

  if (Component !== "button") {
    return (
      <Component className={`btn ${variantClass} ${className}`.trim()} {...props}>
        {children}
      </Component>
    );
  }

  return (
    <Component type={type} className={`btn ${variantClass} ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
}

export default Button;
