import { Link } from 'react-router-dom';

export function NavBar(){
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/Doclist'>DocsList</Link>
            <Link to='/SearchDoc'>SearchDoc</Link>
        </nav>
    )
}