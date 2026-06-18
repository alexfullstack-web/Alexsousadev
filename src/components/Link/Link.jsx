import { Children } from "react";
import "./Link.css";
export default function Links({children , href, imag }) {
  return (
    <>
      <div className="link">
        <a className="links" href={href}>
          <img className="icon" src={imag} alt="icon" />
          {children }
        </a>
      </div>
    </>
  );
}
