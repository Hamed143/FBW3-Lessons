import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function Topics() {
    let { path, url } = useRouteMatch(); // {path: '/'}
    console.log(path);
    console.log(url);

    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${url}/link1`}>Link 1</Link>
                </li>
                <li>
                    <Link to={`${url}/link2`}>Link 2</Link>
                </li>
                <li>
                    <Link to={`${url}/link3`}>Link 3</Link>
                </li>
            </ul>
            <Switch>
                <Route path={`${path}/:topicId`}>
                    <Topic />

                </Route>
            </Switch>
        </div>
    );
}
function Topic(){
    let { topicId } = useParams();
    return (
        <div>
            <h3>Topic with ID: {topicId} </h3>
        </div>
    )
}
