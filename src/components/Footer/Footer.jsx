import Links from "../Link/Link";
import Logo from "../../assets/logo.jpeg";
import iconInstagram from "../icon/instagram.png";
import iconWhatsApp from "../icon/whatsapp.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* Logo */}
        <div className="footer__logo">
          <img className="logo-footer" src={Logo} alt="Logo AlexSousaDev" />
          <div className="footer__logo-info">
            <h1 className="title">
              Alex<span>Sousa</span>Dev
            </h1>
            <span className="footer__tagline">Desenvolvimento Web &amp; Mobile</span>
          </div>
        </div>

        {/* Suporte */}
        <div className="Cards">
          <h2 className="subtitle">Suporte</h2>
          <p>(99) 98468-6139</p>
          <div className="cards__divider" />
          <p>alexsousadev.21@gmail.com</p>
        </div>

        {/* Redes sociais */}
        <div className="Cards-rede-social">
          <div className="footer__social-links">
            <Links className="link-social" href="https://www.instagram.com/alex.sousadev/" imag={iconInstagram} text="Instagram" />
            <Links className="link-social" href="https://wa.me/5599984686139" imag={iconWhatsApp} text="WhatsApp" />
          </div>
        </div>

      </div>

      <p className="copyright">
        &copy; 2026 AlexSousaDev — Todos os direitos reservados
      </p>
    </footer>
  );
}