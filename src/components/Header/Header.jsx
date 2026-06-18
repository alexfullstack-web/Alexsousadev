import Link from "../Link/Link";
import "./Header.css";
import icon from "../icon/power-off-button.png";

export default function Header({ User, Logoheader, href }) {
  return (
    <header className="header">
      <div className="header-logo">
        <img className="logo-header" src={Logoheader} alt="logo" />
        <h1 className="title-header">
          Alex<span>Sousa</span>Dev
        </h1>
      </div>
      <div className="header-grup">
        <div className="notifications-header">
          <img className="notification-icon" src={icon} alt="notification" />
          <p className="title-notification" id="notification">
            Notificações
          </p>
        </div>
        <div className="header-user">
          <img className="icon-user" src={User} alt="icon-user" />
          <p className="title-user" id="user">
            Alex Sousa
          </p>
        </div>

        <div className="btn-sair-header">
          <Link className="btn-sair" href={href} imag={icon} >
          </Link>
        </div>
      </div>
    </header>
  );
}
