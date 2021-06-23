import { Link } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import '../styles/auth.scss';
import { Button } from '../components/Button';

export function NewRoom() {
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
          <h2>Criar uma nova Sala</h2>
          <form>
            <input type="text" placeholder="Nome da Sala" />
            <Button type="submit">Criar Sala </Button>
          </form>
          <p>
            Quer entrar em uma sala existente?&nbsp;
            <Link to="/">Clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  );
}