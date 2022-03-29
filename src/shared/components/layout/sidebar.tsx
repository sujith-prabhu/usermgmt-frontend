import {Link} from "react-router-dom";

import classes from './sidebar.module.css';
import { BrowserRouter } from 'react-router-dom';

const Sidebar: React.FC = () =>{
  return(
  <div className={classes.sidebar}>
    <ul>
    <li><Link to="/">Dashbaord</Link> </li>
    <li><Link to="/users">User Management</Link> </li>
    </ul>
  </div>
  )
}

export default Sidebar;