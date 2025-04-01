import { User } from "lucide-react";
import { useState, useRef, useCallback, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function ProfileDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    // Закрытие дропдауна при клике вне его
    useEffect(() => {
        const handleClickOutside = event => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="profile-dropdown" ref={dropdownRef}>
            <button
                className="profile-dropdown__btn"
                onClick={toggleDropdown}
                aria-expanded={isOpen}
            >
                <User className="profile-dropdown__icon" />
            </button>

            {isOpen && (
                <ul className="profile-dropdown__menu">
                    <li>
                        <NavLink to="/profile">Профиль</NavLink>
                    </li>
                    <li>
                        <NavLink to="/settings">Настройки</NavLink>
                    </li>
                    <li>
                        <button onClick={() => alert("Выход из аккаунта")}>Выйти</button>
                    </li>
                </ul>
            )}
        </div>
    );
}
