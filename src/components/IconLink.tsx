import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';



interface IconLinkProps {
    to: string;
    linkText: string;
   
}

const IconLink = ({ to, linkText }: IconLinkProps) =>{
    return (
        
        // <>
        //     <Link to={to} style={{ textDecoration: 'none' }}>
        //         {linkText}
        //     </Link>
        //     <div>
        //         <Outlet />
        //     </div>
        
        
        // </>
            <a href={to} style={{ textDecoration: 'none' }}>
                {linkText}
            </a>
        
    )
};


export default IconLink;