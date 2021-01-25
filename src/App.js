import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import ExApi from './Components/ExApi.js';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
function App() {
    return (
        <div>
        <Header />
            <Router>
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path='/login'>
                        <Login />
                    </Route>
                    <Route path='/signup'>
                        <Signup />
                    </Route>
                    <Route path='/user'>
                        show user
                    </Route>
                    <Route path='/admin'>
                        show admin stuff
                    </Route>
                    <Route path='/external-api'>
                        <ExApi />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;