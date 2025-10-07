import "./Navbar.css"
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const isActiveLink = (path) => {
        return location.pathname === path;
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-brand">
                <Link to="/" className="brand-link">
                    <span className="brand-icon"></span>
                    <span className="brand-text">Taheni Dziri</span>
                </Link>
            </div>

            {/* Desktop Menu */}
            <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                <Link 
                    className={`nav-link ${isActiveLink('/') || isActiveLink('/home') ? 'active' : ''}`} 
                    to="/"
                >
                    <span className="nav-icon"></span>
                    Home
                </Link>
                <Link 
                    className={`nav-link ${isActiveLink('/about') ? 'active' : ''}`} 
                    to="/about"
                >
                    <span className="nav-icon"></span>
                    About Me
                </Link>
                <Link 
                    className={`nav-link ${isActiveLink('/experiences') ? 'active' : ''}`} 
                    to="/experiences"
                >
                    <span className="nav-icon"></span>
                    Experiences
                </Link>
                <Link 
                    className={`nav-link ${isActiveLink('/education') ? 'active' : ''}`} 
                    to="/education"
                >
                    <span className="nav-icon"></span>
                    Education
                </Link>


                <Link 
                    className={`nav-link ${isActiveLink('/certifications') ? 'active' : ''}`} 
                    to="/certifications"
                >
                    <span className="nav-icon"></span>
                    Certifications
                </Link>
                
                <Link 
                    className={`nav-link ${isActiveLink('/contact') ? 'active' : ''}`} 
                    to="/contact"
                >
                    <span className="nav-icon"></span>
                    Contact
                </Link>
            </div>

            {/* CTA Button */}
            <div className="nav-actions">
                <Link className="nav-connect" to="/contact">
                    <span className="connect-icon"></span>
                    Let's Talk
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
                className={`burger-menu ${isMenuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Mobile Overlay */}
            {isMenuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
        </nav>
    );
}

export default Navbar;