import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleImg from '../assets/images/google-icon.svg';
import '../styles/auth.scss';

export function Home() {
  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire suas dúvidas da sua andiência em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="LetMeAsk" />
          <button className="create-room">
            <img src={googleImg} alt="LetMeAsk" />
            Crie uma sala com o Google
          </button>
          <label className="separator">ou entre em uma sala</label>
          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <button type="submit">Entrar na Sala</button>
          </form>
        </div>
      </main>
    </div>
  );
}
