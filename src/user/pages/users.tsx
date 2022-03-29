import { Outlet } from "react-router-dom";
const Users:React.FC = () =>{
  return(
    <div>
      <h1>
        List of Users
      </h1>
      <Outlet />
    </div>
  )
}

export default Users;