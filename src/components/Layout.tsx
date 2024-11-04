import { Outlet } from 'react-router-dom';

const Layout = () => (
    <div>
     
        <div>
            <Outlet />
        </div>
    </div>
);

export default Layout;