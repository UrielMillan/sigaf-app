import React , { Component } from 'react';
import { connect } from 'react-redux'
import { ChakraProvider } from "@chakra-ui/react"
import { Switch, Route, Redirect } from 'react-router-dom';
import { loadSesion } from './redux/actions/sesionActions';
import PrivateRoute from './util/PrivateRoute';
import Login from './containers/login';
import Header from './components/header';
import Users from './containers/users';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    
  }

  render(){
    return (
      <ChakraProvider>
        {this.props.sesion.isLogged  ? <Header /> : null}
        <Switch>
          <Users />
        </Switch>
      </ChakraProvider>
    );
  }
}

const mapStateToProps = state =>({
  sesion: state.sesion
});

const mapDispatchToProps = dispatch =>({
  loadSesion: (sesionData) => dispatch(loadSesion(sesionData))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
