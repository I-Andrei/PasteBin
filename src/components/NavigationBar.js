import { Link } from 'react-router-dom';

export function NavBar(){
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/paste'>DocsList</Link>
        </nav>
    )
}