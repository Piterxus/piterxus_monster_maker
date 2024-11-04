import { Outlet } from 'react-router-dom';
import IconLink from './IconLink';

const Layout = () => (
    <div>
     <IconLink to="cart" linkText="Cart" />
        <div>
            <Outlet />
        </div>
    </div>
);

export default Layout;