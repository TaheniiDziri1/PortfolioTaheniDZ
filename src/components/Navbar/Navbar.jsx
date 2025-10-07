import "./Navbar.css";
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        // Check if mobile on mount and resize
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const isActiveLink = (path) => {
        return location.pathname === path;
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMobile ? 'mobile' : ''}`}>
            <div className="nav-brand">
                <Link to="/" className="brand-link" onClick={() => setIsMenuOpen(false)}>
                    <span className="brand-text">Taheni Dziri</span>
                </Link>
            </div>

            {/* Desktop Menu */}
            <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                <Link 
                    className={`nav-link ${isActiveLink('/') || isActiveLink('/home') ? 'active' : ''}`} 
                    to="/"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Home
                </Link>
                <Link 
                    className={`nav-link ${isActiveLink('/about') ? 'active' : ''}`} 
                    to="/about"
                    onClick={() => setIsMenuOpen(false)}
                >
                    About Me
                </Link>
                <Link 
                    className={`nav-link ${isActiveLink('/experiences') ? 'active' : ''}`} 
                    to="/experiences"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Experiences
                </Link>
                <Link 
                    className={`nav-link ${isActiveLink('/education') ? 'active' : ''}`} 
                    to="/education"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Education
                </Link>
                <Link 
                    className={`nav-link ${isActiveLink('/certifications') ? 'active' : ''}`} 
                    to="/certifications"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Certifications
                </Link>
                <Link 
                    className={`nav-link ${isActiveLink('/contact') ? 'active' : ''}`} 
                    to="/contact"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Contact
                </Link>

                {/* Mobile CTA Button */}
                {isMobile && (
                    <Link 
                        className="nav-connect mobile-connect" 
                        to="/contact"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Let's Talk
                    </Link>
                )}
            </div>

            {/* Desktop CTA Button */}
            {!isMobile && (
                <div className="nav-actions">
                    <Link className="nav-connect" to="/contact">
                        Let's Talk
                    </Link>
                </div>
            )}

            {/* Mobile Menu Button */}
            <button 
                className={`burger-menu ${isMenuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Mobile Overlay */}
            {isMenuOpen && (
                <div 
                    className="menu-overlay" 
                    onClick={toggleMenu}
                    aria-hidden="true"
                ></div>
            )}
        </nav>
    );
}

export default Navbar;