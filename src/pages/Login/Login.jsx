import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";
import Label from "../../components/Label/Label";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Loading from "../../components/loading/loading";
import Notification from "../../components/Notification/Notification";
import Logo from "./../../assets/logo.jpeg";
import { useState } from "react";
import "./Login.css";

function Login() {
  const [notification, setNotification] = useState(null);

  function homeLogin(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (!email || !senha) {
      setNotification({
        tipo: "aviso",
        mensagem: "Preencha todos os campos!",
      });

      setTimeout(() => setNotification(null), 3000);
      return;
    }

    setNotification({
      tipo: "sucesso",
      mensagem: "Login realizado com sucesso!",
    });

    setTimeout(() => setNotification(null), 3000);
  }

  return (
    <div className="page-login">
      <Loading />

      {notification && (
        <Notification
          tipo={notification.tipo}
          mensagem={notification.mensagem}
        />
      )}

      <main className="login">
        <Form className="form-login" onSubmit={homeLogin}>
          <img className="logo" src={Logo} alt="Logo AlexSousaDev" />

          <h2 className="title-login">
            Alex<span>Sousa</span>Dev
          </h2>

          <div className="form-group">
            <Label htmlFor="email">E-mail</Label>

            <Input
              id="email"
              type="email"
              placeholder="Digite seu E-mail"
            />
          </div>

          <div className="form-group">
            <Label htmlFor="senha">Senha</Label>

            <Input
              id="senha"
              type="password"
              placeholder="Digite sua Senha"
            />
          </div>

          <Button type="submit">
            Entrar
          </Button>
        </Form>
      </main>

      <Footer />
    </div>
  );
}

export default Login;
