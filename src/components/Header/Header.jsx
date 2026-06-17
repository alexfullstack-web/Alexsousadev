import Links from "../Link/Link";

export default function Header() {
    
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="logo" />
        <h1 className="title">
          Alex<span>Sousa</span>Dev
        </h1>
      </div>
      <div className="Notifications">
        <img className="notification" src={Notification} alt="notification" />
        <p className="title-notification" id="notification">
          Notificações
        </p>
      </div>
      <div className="User">
        <img className="user" src={User} alt="user" />
        <p className="title-user" id="user">Alex Sousa</p>
      </div>
      <div className="btn-sair">
        <Links className="btn-sair" href="#" text="Sair" />
      </div>
    </header>
  );
}
