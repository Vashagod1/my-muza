import '../style/Header.scss'
import {Link} from 'react-router-dom';


export default function Header() {
    return (
        <header className="Header">
            <div className="header__logo">
                <Link to="/"></Link>
            </div>
        </header>
    )
}