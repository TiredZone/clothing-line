/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const animateCSS = (element, animation, prefix = 'animate__') =>
    // We create a Promise and return it
    new Promise(resolve => {
        const animationName = `${prefix}${animation}`;
        const node = document.querySelector(element);

        node.classList.add(`${prefix}animated`, animationName);

        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
            event.stopPropagation();
            node.classList.remove(`${prefix}animated`, animationName);
            resolve('Animation ended');
        }

        node.addEventListener('animationend', handleAnimationEnd, { once: true });
    });

const Navbar = () => {
    // local state
    const [mobileActive, setMobileActive] = useState(false);
    const [burgerActive, setBurgerActive] = useState(false);
    const [bgColor, setBgColor] = useState(false);
    const [scrollingDown, setScrollingDown] = useState(false);

    const router = useRouter();

    const handleHamburgerClick = e => {
        e.preventDefault();

        const newValue = !mobileActive;

        setBurgerActive(newValue);

        if (!newValue) {
            animateCSS('.navbar-menu', 'fadeOutLeft').then(() => {
                setMobileActive(newValue);
            });
        } else {
            setMobileActive(newValue);
        }
    };

    const handleNavbarItemClick = () => {
        setBurgerActive(false);
        setMobileActive(false);
    };

    useEffect(() => {
        // const elmnt = document.getElementById('__next');
        let oldScroll = 0;
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) setBgColor(true);
            else setBgColor(false);

            if (oldScroll && oldScroll > window.scrollY) setScrollingDown(false);
            else setScrollingDown(true);

            oldScroll = window.scrollY;
        });
    }, []);

    return (
        <nav
            className={`navbar has-font-roboto has-centered-menu custom-navbar is-fixed-top ${
                bgColor ? 'has-navbar-bg-color' : ''
            } ${scrollingDown ? 'is-hidden-up' : ''}`}
            role="navigation"
            aria-label="main navigation"
        >
            <a
                role="button"
                className={`navbar-burger has-text-white ${burgerActive ? 'is-active' : ''}`}
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
                onClick={handleHamburgerClick}
            >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
            </a>
            <div className={`navbar-menu ${mobileActive ? 'is-active animate__animated animate__fadeInLeft' : ''}`}>
                {/* center menu */}
                <div className="navbar-start">
                    <Link href="/" passHref>
                        <a
                            role="button"
                            className={`navbar-item ${router.pathname === '/home' ? 'is-active' : ''}`}
                            onClick={handleNavbarItemClick}
                        >
                            Home
                        </a>
                    </Link>
                    <Link href="/about" passHref>
                        <a
                            role="button"
                            className={`navbar-item ${router.pathname === '/about' ? 'is-active' : ''}`}
                            onClick={handleNavbarItemClick}
                        >
                            About
                        </a>
                    </Link>
                    <Link href="/shop" passHref>
                        <a
                            role="button"
                            className={`navbar-item ${router.pathname === '/shop' ? 'is-active' : ''}`}
                            onClick={handleNavbarItemClick}
                        >
                            Clothes
                        </a>
                    </Link>
                    <Link href="/accessories" passHref>
                        <a
                            role="button"
                            className={`navbar-item ${router.pathname === '/accessories' ? 'is-active' : ''}`}
                            onClick={handleNavbarItemClick}
                        >
                            Accessories
                        </a>
                    </Link>

                    <Link href="/contact" passHref>
                        <a
                            role="button"
                            className={`navbar-item ${router.pathname === '/contact' ? 'is-active' : ''}`}
                            onClick={handleNavbarItemClick}
                        >
                            Contact
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
