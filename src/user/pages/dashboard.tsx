import {Outlet} from "react-router-dom"
const Dashboard: React.FC = () =>{
  return(<div> <h1>Dash board</h1>
    <Outlet />
  </div>);
}

export default Dashboard;
