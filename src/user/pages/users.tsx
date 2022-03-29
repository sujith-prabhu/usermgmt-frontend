import { Outlet } from "react-router-dom";
const Users:React.FC = () =>{
  return(
    <div>
      This is users page
      <Outlet />

    </div>
  )
}

export default Users;