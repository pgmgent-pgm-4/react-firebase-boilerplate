import * as Routes from '../../routes';

import {
  Link
} from "react-router-dom";

const MainNavigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={Routes.LANDING}>Home</Link>
        </li>
        <li>
          <Link to={Routes.PROJECTS}>Projects</Link>
        </li>
        <li>
          <Link to={Routes.AUTH_SIGN_IN}>Sign In</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;