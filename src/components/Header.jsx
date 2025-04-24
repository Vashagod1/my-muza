import '../styles/components/_header.scss';
import {Headphones, Search} from 'lucide-react';
import {NavLink} from "react-router";
import {useState} from "react";
import ProfileDropdown from "./ProfileDropdown";

const links = [
    {id: 1, label: 'Главное', link: '/'},
    {id: 2, label: 'Библиотека', link: '/library'},
    {id: 3, label: 'Избранное', link: '/favourite/'}
];

export default function Header() {
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const toggleSearch = () => setIsSearchVisible(prev => !prev);

    return (
        <div className="header__wrapper">
            <header className="header container">
                <div className="header__logo">
                    <NavLink to="/" className="header__logo__link">
                        Муза<Headphones/> Музыка
                    </NavLink>
                </div>
                <nav className="header__nav">
                    <ul className="header__list">
                        {links.map(link => (
                            <li key={link.id}>
                                <NavLink
                                    className="header__nav-link"
                                    style={({isActive}) => ({
                                        borderBottom: isActive ? "3px solid #DC7000" : undefined,
                                    })}
                                    to={link.link}
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="header__search">
                    <Search className="header__search-icon" onClick={toggleSearch}/>
                    {isSearchVisible && (
                        <input
                            type="text"
                            className="header__search-input"
                            placeholder="Трек, альбом, исполнитель"
                            autoFocus
                        />
                    )}
                </div>
                <ProfileDropdown/>
            </header>
        </div>
    );
}
