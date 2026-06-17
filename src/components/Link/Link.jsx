import "./Link.css";

export default function Links({ href, text, imag }) {
  return (
    <>
      <div className="link">
      <a className="links" href={href}>
         <img className="icon" src={imag} alt="icon" />
        {text}
      </a>
      </div>
    </>
  );
}
