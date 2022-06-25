import { Link } from 'react-router-dom';
import  NavCss  from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={NavCss.header}>
      <div className={NavCss.logo}>React Meetup</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All meetups</Link>
          </li>
          <li>
            <Link to="/new-meetups">Add New meetups</Link>
          </li>
          <li>
            <Link to="favorites">Favorite meetups</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
