import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    const controlNavbar = () => {
        if (window.scrollY > 442) {
            if (window.scrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        } else {
            setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
    };

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 442);
    };

    useEffect(() => {
        const updateNavbar = () => {
            controlNavbar();
            handleScroll();
        };

        window.addEventListener('scroll', updateNavbar);

        // 초기 상태 설정
        setIsVisible(true);
        setLastScrollY(0);
        setIsScrolled(window.scrollY > 442);

        return () => {
            window.removeEventListener('scroll', updateNavbar);
        };
    }, [location.pathname]);

    const isAboutPage = location.pathname === '/about';

    return (
        <nav className={`navbar ${isVisible ? 'visible' : 'hidden'} ${isAboutPage && isScrolled ? 'no-blur' : ''}`}>
            <ul className='main_contents'>
                <Link to="/"><li className='mtfont'>GBI' Portfolio</li></Link>
                <li className='nav_item'>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/project">Project</Link>
                    <Link to="/webcloning">WebCloning</Link>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
