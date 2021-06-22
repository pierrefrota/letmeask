import { useHistory } from "react-router-dom";

import { Button } from "../components/Button";

import illustratioSvg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIon from "../assets/images/google-icon.svg";

import "../styles/auth.scss";
import { useAuth } from "../hooks/useAuth";

export function Home() {
  const { user, signInWithGoogle } = useAuth();
  const history = useHistory();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    history.push("/rooms/new");
  }
  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustratioSvg}
          alt="Ilustração simbilizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>

      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />

          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIon} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>

          <form action="">
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
