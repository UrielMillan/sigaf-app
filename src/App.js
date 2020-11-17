import { ChakraProvider } from "@chakra-ui/react"
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <Switch>
          <Route path='/login' component={Login} exact={true} />
          <Route path='/dashboard' component={Dashboard} exact={true} />
          <Redirect to='/dashboard' />
      </Switch>
    </ChakraProvider>
  );
}

export default App;
