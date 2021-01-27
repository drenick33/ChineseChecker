import React from 'react';
import './App.less';
import Navbar from './components/layout/Navbar';
import Main from './components/pages/main/Main';

import { Layout } from 'antd';
const { Header } = Layout;

function App() {
  return (
    <div className='App'>
      <Header>
        <Navbar></Navbar>
      </Header>
      <Main />
    </div>
  );
}

// const mapDispatchToProps = (dispatch: any) => ({
//   loadUser: () => dispatch({ type: 'USER_LOADING' }),
// });

export default App;
