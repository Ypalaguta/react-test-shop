import { React, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import GlobalStyles from './components/global-styles/global-styles.style'
import Header from './components/header/header.component'

import MainPage from './pages/main/main.component'
import CategoriesPage from './pages/categories/categories.component'
import ContactsPage from './pages/contacts/contacts.component'
import AuthPage from './pages/auth/auth.component'
import CheckoutPage from './pages/checkout/checkout.component'

function App() {
  const [userInfo, getUserInfo] = useState(null);
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Switch>
        <Route path="/categories" component={CategoriesPage} />
        <Route path="/contacts" component={ContactsPage} />
        <Route path="/auth">
          {userInfo ? <Redirect to="/" /> : <AuthPage />}
        </Route>
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/" component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
