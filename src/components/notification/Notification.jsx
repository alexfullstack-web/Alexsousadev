import Aviso from "../icon/warning.png";
import Sucesso from "../icon/check-mark.png";
import Erro from "../icon/cancel.png";
import "./Notification.css";

export default function Notification({ tipo, mensagem }) {
  const icones = {
    aviso: Aviso,
    sucesso: Sucesso,
    erro: Erro,
  };

  return (
    <div className={`notification-toast ${tipo}`}>
      <img src={icones[tipo]} alt={tipo} />
      <p>{mensagem}</p>
    </div>
  );
}