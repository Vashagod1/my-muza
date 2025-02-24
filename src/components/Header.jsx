import '../styles/components/_header.scss'
import {Headphones} from 'lucide-react';
import {NavLink} from "react-router";
import { Search } from 'lucide-react';


const links = [
    {
        id: 1,
        label: 'Главное',
        link: '/',

    },
    {
        id: 2,
        label: 'Библиотека',
        link: '/library',
    },
    {
        id: 3,
        label: 'Плейлисты',
        link: '/playlist/',
    }
]

export default function Header() {

    return (
        <div className="header-wrapper">
            <header className="header container">
            <div className="header__logo">
                <h2 className="header__logo__title">
                    Муза<Headphones/>Музыка
                </h2>
            </div>
            <nav className="header__nav">
                <ul className="header__nav__list">
                    {links.map((link) => (
                        <li key={link.id}>
                            <NavLink className="header__nav__list__link" to={link.link}>
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
                <Search />
            </header>
        </div>

    )
}