import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.less';
import Navbar from './components/layout/Navbar';
import Main from './components/pages/main/Main';

import { Layout } from 'antd';
const { Header } = Layout;

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header>
          <Navbar></Navbar>
        </Header>
        <Switch>
          <Route exact path='/' component={Main} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

// const mapDispatchToProps = (dispatch: any) => ({
//   loadUser: () => dispatch({ type: 'USER_LOADING' }),
// });

export default App;