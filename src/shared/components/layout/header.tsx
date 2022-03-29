import { classicNameResolver } from "typescript";
import classes from './header.module.css';
import logo from '../../../../src/logo.svg';

const Header:React.FC = () =>{
    return(
        <header className = {classes.header}>
          <img src={logo} className="App-logo" height="100rem" width="100rem" alt="logo" />
          <div className={classes.title}><h1>User Management</h1></div>
          <nav>
              <ul>  
              <li><span className={classes.notification}> Notification bell</span></li>
              <li><span className={classes.profile}> User Profile </span></li>
              </ul>
          </nav>
        </header>
    );
}

export default Header;