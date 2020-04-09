import React from 'react'
import { Form } from './Form'

export const Header = ({setSearch, theme, setTheme, setChangeTheme}) => {

    //Close and open menu
    const handleMenu = () => {
        const header = document.getElementById('menu')
        if(header.classList.contains('active')) header.classList.remove('active')
        else header.classList.add('active')
    }

    const handleTheme = (background, color) => {
        const settings = {background, color}
        const body = document.body

        setTheme(settings)
        setChangeTheme(true)
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

                <div className="theme mx-3 mt-3 py-1 px-2 rounded-pill d-flex">
                    <span className="white mr-2" onClick={() => handleTheme("light-bg", null)}></span>   {/* Light */}
                    <span className="dark mr-2" onClick={() => handleTheme("dark-bg", null)}></span>   {/* Dark */}
                    <span className="c1089ff mr-2" onClick={() => handleTheme("dark-bg", "c1089ff")}></span>   {/* Blue */}
                    <span className="c692db7 mr-2" onClick={() => handleTheme("dark-bg", "c692db7")}></span>   {/* Violet */}
                    <span className="ce44985 mr-2" onClick={() => handleTheme("dark-bg", "ce44985")}></span>   {/* Dark pink */}
                    <span className="cffb6b9" onClick={() => handleTheme("light-bg", "cffb6b9")}></span>   {/*Light pink */}
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
