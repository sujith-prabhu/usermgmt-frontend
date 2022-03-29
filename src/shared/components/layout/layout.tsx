
import Header from './header';
import SideBar from './sidebar';
import classes from './layout.module.css';
import { Outlet } from 'react-router-dom';

interface Props{
    children: React.ReactNode
}

const Layout:React.FC<Props> = ({children}) =>{
    return(
        <div>
            <Header>
                This is header
            </Header>
            <SideBar>This is sidebar</SideBar>
            <main className={classes.main}>{children}</main>
            <Outlet />
        </div>

    )

}
export default Layout;