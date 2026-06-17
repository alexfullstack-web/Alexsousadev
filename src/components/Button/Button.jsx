import"./Button.css"

export default function Button({ type, id, children }) {
  return (
    <button className="button" type={type} id={id}>
      {children}
    </button>
  );
}
