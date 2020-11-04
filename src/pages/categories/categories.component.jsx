import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import CategoryItems from '../../components/category-items/category-items.component';

function CategoriesPage(props) {
    return (
        <Switch>
            <Route path={['/categories/overalls','/categories/socks', '/categories/hats', '/categories/dogs', '/categories/cats']} component={CategoryItems} />
            <Redirect to='/' />
        </Switch>
    );
}

export default CategoriesPage;