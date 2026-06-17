import "./Input.css";

export default function Input({ type, id, placeholder }) {
  return (
    <input className="input" type={type} id={id} placeholder={placeholder} />
  );
}
