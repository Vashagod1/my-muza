import '../styles/components/_header.scss'
import {Headphones} from 'lucide-react';
import {NavLink} from "react-router";
import {Search} from 'lucide-react';
import { useState } from "react";


const links = [
    {id: 1, label: 'Главное', link: '/',},
    {id: 2, label: 'Библиотека', link: '/library',},
    {id: 3, label: 'Плейлисты', link: '/playlist/',}
];


export default function Header() {
    const [SearchVisible, setSearchVisible] = useState(false);

    return (
        <div className="header-wrapper">
            <header className="header container">
                <div className="header__logo">
                    <h2 className="header__logo__title">
                        <NavLink to="/" className="header__logo__link">
                            Муза<Headphones /> Музыка
                        </NavLink>

                    </h2>
                </div>
                <nav className="header__nav">
                    <ul className="header__nav__list">
                        {links.map((link) => (
                            <li key={link.id}>
                                <NavLink className="header__nav__list__link" activeClassName="active" to={link.link}>
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="header__search">
                    <Search className="search-icon" onClick={() => setSearchVisible(!SearchVisible)}/>
                    {SearchVisible && (
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Трек, альбом, исполнитель"
                            autoFocus
                        />
                    )}
                </div>
                <button className="header__profile">Профиль</button>
            </header>
        </div>

    )
}