import { classicNameResolver } from "typescript";
import classes from './header.module.css';
import logo from '../../../../src/logo.svg';

const Header:React.FC = () =>{
    return(
        <header className = {classes.header}>
          <div className={classes.title}>User Management</div>
          <img src={logo} className="App-logo" alt="logo" />
          <nav>
              <span className={classes.notification}> Notification bell</span>
              <span className={classes.profile}> User Profile </span>
          </nav>
        </header>
    );
}

export default Header;