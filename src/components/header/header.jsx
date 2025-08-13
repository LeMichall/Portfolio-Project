import React from 'react';
import css from './header.module.css';

const Header = () => (
    <header className={css.portfolioHeader}>
        <div className={css.container}>
            <h1>Your Name</h1>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
);

export default Header;