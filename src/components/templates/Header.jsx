import React from 'react'
import { Form } from './Form'
import Sun from '../../img/Sun-64.png'
import Moon from '../../img/Moon-64.png'

export const Header = ({setSearch, theme, setTheme}) => {

    //Close and open menu
    const handleMenu = () => {
        const header = document.getElementById('menu')
        if(header.classList.contains('active')) header.classList.remove('active')
        else header.classList.add('active')
    }

    const handleTheme = () => {
        if(theme === 'light') setTheme('dark')
        else setTheme('light')
    }
    
    return(
        <header id="menu" className="d-flex justify-content-between card-bg fixed-top">

            <div className="head_content d-flex">

                <div onClick={handleMenu} className="menu_button">
                    <span className="bar bar-1"></span>
                    <span className="bar bar-2"></span>
                    <span className="bar bar-3"></span>
                </div>

                <div className="brand ml-2">
                    <a className="navbar-brand" 
                        href="/">
                        Backgroundify
                    </a>
                </div>     

            </div>

            <div className="search">
                <Form setSearch={setSearch} />
            </div>

            <nav className="navbar card-bg d-flex flex-column text-center">

                <a target="_blank" rel="noopener noreferrer" href="https://portfolio-maw.firebaseapp.com/#about">About me</a>
                <a target="_blank" rel="noopener noreferrer" href="mailto:mauuroaraujo@gmail.com">Contact</a>

                <div className="social d-flex flex-column mt-3">
                    <a className="btn btn-primary rounded-pill w-100" target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/mawaraujo">Linkedin</a>
                    <a className="btn btn-dark rounded-pill w-100" target="_blank" rel="noopener noreferrer" href="http://github.com/mawaraujo/">Github</a>
                    <a className="btn btn-danger rounded-pill w-100" target="_blank" rel="noopener noreferrer" href="https://portfolio-maw.firebaseapp.com/">Portfolio</a>
                </div>

                <div className="theme mx-3 mt-3 py-1 px-2 rounded-pill border" onClick={handleTheme}>
                    <span className="my-auto mr-3 icon_theme">
                        {
                            theme === 'light'
                            ? <img src={Moon} width="15" />
                            : <img src={Sun} width="15" />
                        }
                    </span>

                    <span className="toggle_theme">
                        { theme === 'light' ? 'Dark theme' : 'Light theme' }
                    </span>
                </div>

                <div className="hr my-4">
                    <hr className="w-50 m-auto" />
                </div>

                <div className="credit">
                    <p>Wallpapers by
                        <a rel="noopener noreferrer" target="_blank" href="https://www.unsplash.com/"> Unsplash</a>
                    </p>
                </div>

            </nav>

        </header>
    )
}
