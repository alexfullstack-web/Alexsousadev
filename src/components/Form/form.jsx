import "./Form.css";

export default function Form({ children, onSubmit, className }) {
  return (
    <form className={`form ${className || ""}`} onSubmit={onSubmit}>
      {children}
    </form>
  );
}