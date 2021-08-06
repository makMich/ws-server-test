import React from 'react';
import { useHistory, Router, Route } from "react-router-dom";

const StartWindow = () => {

    const history = useHistory();

    const routeChange = () => {
        history.push('/about');
    }

    return (
        <React.Fragment>
            <Router>
            <button onClick={routeChange}>
                Перейти к вопросам.
            </button>
                <Route path="/about"></Route>
            </Router>
        </React.Fragment>
    )
}

export default StartWindow;