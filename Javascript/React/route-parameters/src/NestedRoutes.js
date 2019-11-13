import React, { Component } from 'react'
import{BrowserRouter as Router,Route,Link,Switch,useRouteMatch,useParams} from 'react-router-dom';
export default class NestedRoutes extends Component {
    render() {
        return (
            <div>
                <hr/>
                <h1>this is the nested route Example</h1>
                <Router>
                    <div>
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/topics'>Topic to learn</Link>
                            </li>
                        </ul>
                        <hr/>
                        <Switch>
                            <Route path='/' exact>
                                <Home/>
                            </Route>
                            <Route path="/topics">
                                <Topics/>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}
const Home=()=>(<div><h2>Home Page</h2></div>)
function Topics(){
    let {path,url}=useRouteMatch();
    return(
        <div>
        <ul>
            <h3>Topics</h3>
            <li><Link to={`${url}/class-Component`}>Class Component in React</Link></li>
            <li><Link to={`${url}/Bootstrap`}>Bootstrap with React(Reactstrap)</Link></li>
            <li><Link to={`${url}/State-props`}>state and Props in react</Link></li>
        </ul>
        <Switch>
            <Route exact path={path}>
                <h4>Please select a Topic in react</h4>
            </Route>
            <Route path={`${path}/:topicId`}>
            <Topic/>
            </Route>
        </Switch>
        </div>
    )
}
function Topic(){
    let{topicId}=useParams();
    return(
<div>
    <h4>{topicId}</h4>
</div>
    );
}