import "../style/index.scss";
import { Activity, NotFound, Results }  from "../Pages";
import {
  Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/results" component={Results} />
        <Route exact path="/" component={Activity} />
        <Route component={NotFound} />
      </Switch>
     </div>
  );
}

export default App;
