import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NewRoom } from './pages/NewRoom';
import { Home } from './pages/Home';
import { AdminRoom } from './pages/AdminRoom';
import './styles/global.scss';

import { AuthContextProvider } from './contexts/AuthContext';
import { Room } from './pages/Room';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" exact component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
          <Route component={AdminRoom} path="/admin/rooms/:id" />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
