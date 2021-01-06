import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Films from './FilmsComponent';
import Home from './HomeScreenComponent';


class Madlibs extends Component {



    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route path='/movies' component={Films} />
                    <Redirect to='/home' />
                </Switch>
            </React.Fragment >
        );

    }
}
export default Madlibs;