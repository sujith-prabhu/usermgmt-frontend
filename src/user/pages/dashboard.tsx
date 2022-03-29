import {Outlet} from "react-router-dom"
const Dashboard: React.FC = () =>{
  return(<div>Dash board
    <Outlet />
  </div>);
}

export default Dashboard;
