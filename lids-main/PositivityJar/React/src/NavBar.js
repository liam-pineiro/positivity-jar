import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Dashboard</NavLink></li>
                <li><NavLink to="/my-jars">MyJars</NavLink></li>
                <li><NavLink to="/account">Account</NavLink></li>
                <li></li>
            </ul>
        </nav>
    );
}

export default Navbar;