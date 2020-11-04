import {React, useState} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux';

import GlobalStyles from './components/global-styles/global-styles.style'
import Header from './components/header/header.component'

import MainPage from './pages/main/main.component'
import CategoriesPage from './pages/categories/categories.component'
import ContactsPage from './pages/contacts/contacts.component'
import AuthPage from './pages/auth/auth.component'
import CheckoutPage from './pages/checkout/checkout.component'
import {createStructuredSelector} from "reselect";
import {selectUserStatus} from "./redux/user/user.selectors";

function App(props) {
    const {userStatus} = props;
    return (
        <div className="App">
            <GlobalStyles/>
            <Header/>
            <Switch>
                <Route path="/categories" component={CategoriesPage}/>
                <Route path="/contacts" component={ContactsPage}/>
                <Route path="/auth">
                    {userStatus ? <Redirect to="/"/> : <AuthPage/>}
                </Route>
                <Route path="/checkout">
                    {userStatus ? <CheckoutPage/> : <Redirect to="/"/>}
                </Route>
                <Route path="/" component={MainPage}/>
            </Switch>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    userStatus: selectUserStatus
});

export default connect(mapStateToProps)(App);
