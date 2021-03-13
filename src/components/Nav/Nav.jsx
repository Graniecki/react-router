import { Switch, Route, NavLink } from 'react-router-dom';

import Home from '../Home/Home';
import About from '../About/About';
import Another from '../Another/Another';
import BlockInfo from '../BlockInfo/BlockInfo';

import './Nav.scss';

const Nav = () => {
  return (
    <>
      <nav className="nav">
        <ul>
          <li>
            <NavLink
              to="/"
              exact
              activeClassName="selected"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              activeStyle={{
                backgroundColor: 'blue'
              }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/another"
              activeStyle={{
                backgroundColor: 'yellow'
              }}
            >
              Another
            </NavLink>
          </li>
        </ul>
      </nav>

      <div style={{textAlign: 'center'}}>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/another/:name" component={BlockInfo} />
          <Route path="/another" component={Another} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </>
  );
};

export default Nav;
