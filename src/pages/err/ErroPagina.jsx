import "./Erropagina.css";

export default function ErroPagina() {
  return (
    <div className="erro-pagina">
      <div className="grid-bg" />
      <div className="scanline" />
      <span className="corner tl" /><span className="corner tr" />
      <span className="corner bl" /><span className="corner br" />

      <div className="content">
        <p className="eyebrow">// erro do sistema</p>
        <h1 className="title-404" data-text="404">404</h1>
        <div className="divider" />
        <p className="text">Página não encontrada</p>
        <a href="/" className="btn">← voltar ao início</a>
      </div>
    </div>
  );
}