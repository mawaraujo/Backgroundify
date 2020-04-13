import React, { useState, Fragment } from 'react'
import { Form } from './Form'

export const Header = ({setSearch, setTheme, setChangeTheme}) => {

    const [isSearch, setIsSearch] = useState(false)

    const handleSearch = () => {
        if(isSearch) setIsSearch(false)
        else setIsSearch(true)
    }

    //Close and open menu
    const handleMenu = () => {
        const header = document.getElementById('menu')
        if(header.classList.contains('active')) header.classList.remove('active')
        else header.classList.add('active')
    }

    const handleTheme = (background, color) => {
        const settings = {background, color}
        setTheme(settings)
        setChangeTheme(true)
    }
    
    return(
        <Fragment>
            <header id="menu" className="d-flex justify-content-between card-bg fixed-top">

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

                <div className="search_item mr-3" onClick={handleSearch}>
                    <p className="">Search</p>
                </div>

                <nav className="navbar card-bg d-flex flex-column text-center">

                    <a target="_blank" rel="noopener noreferrer" href="https://portfolio-maw.firebaseapp.com/#about">About me</a>
                    <a target="_blank" rel="noopener noreferrer" href="mailto:mauuroaraujo@gmail.com">Contact</a>

                    <div className="social d-flex flex-column mt-3">
                        <a className="btn btn-primary rounded-pill w-100" target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/mawaraujo">Linkedin</a>
                        <a className="btn btn-dark rounded-pill w-100" target="_blank" rel="noopener noreferrer" href="http://github.com/mawaraujo/">Github</a>
                        <a className="btn btn-danger rounded-pill w-100" target="_blank" rel="noopener noreferrer" href="https://portfolio-maw.firebaseapp.com/">Portfolio</a>
                    </div>

                    <div className="mt-2">
                        <p className="">Theme color</p>
                    </div>

                    <div className="theme mx-3 mt-1 py-1 px-2 rounded-pill d-flex">
                        <span className="white mr-2" onClick={() => handleTheme("light-bg", null)}></span>   {/* Light */}
                        <span className="dark mr-2" onClick={() => handleTheme("dark-bg", null)}></span>   {/* Dark */}
                        <span className="cf6da63 mr-2" onClick={() => handleTheme("light-bg", "cf6da63")}></span>   {/* Light yellow */}
                        <span className="cb0e0a8 mr-2" onClick={() => handleTheme("light-bg", "cb0e0a8")}></span>   {/*Light pink */}
                        <span className="c692db7 mr-2" onClick={() => handleTheme("dark-bg", "c692db7")}></span>   {/* Dark Violet */}
                        <span className="ce44985 mr-2" onClick={() => handleTheme("dark-bg", "ce44985")}></span>   {/* Dark pink */}
                        
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

            {   isSearch && 
                <div className="search">
                    <Form setSearch={setSearch} />
                </div> }

        </Fragment>
    )
}
