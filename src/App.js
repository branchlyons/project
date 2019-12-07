import React from 'react';
import GlobalStyle from './style.js';
import IconStyle from './statics/iconfont/iconfont'
import Header from './common/header/index.js'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'
import Detail from './pages/datail/loadable.js'
import Write from './pages/write';



function App() {
  return (
    <Provider store={store}>
      <div >
        <GlobalStyle />
        <IconStyle />
        <BrowserRouter>
        <Header />
          <Route path='/' exact component={Home} ></Route>
          <Route path='/login' exact component={Login} ></Route>
          <Route path='/detail/:id' exact component={Detail}></Route>
          <Route path='/write' exact component={Write}></Route>
        </BrowserRouter>
      </div>
    </Provider>
  );
}


export default App;

