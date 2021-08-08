import React from 'react';
import { useHistory, Switch, BrowserRouter as Router, Route } from "react-router-dom";

const Change = () => {
    const history = useHistory();
    
    const routeChange = () => {
        history.push('/about');
    }
    return (
        <button onClick={routeChange}>
            Перейти к вопросам.
        </button>
    )
}

const StartWindow = () => {
    return (
        <Router>
            <Switch>
            
                <Route path="/" exact component={Change}></Route>
                <Route path="/about" component={()=> (<div>about</div>)}></Route>
            </Switch>
        </Router>
    )
}

export default StartWindow;