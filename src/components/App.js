import React from "react";
import ListPeople from "./ListPeople";
import {Route, Router, Switch} from "react-router-dom";
import ShowPerson from "./ShowPerson";
import history from "../history"

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Switch>
                        <Route path="/" exact component={ListPeople} />
                        <Route path="/people/:id" exact component={ShowPerson} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;