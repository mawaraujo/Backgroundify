import React from 'react'
import { Form } from './Form'

export const Header = ({setSearch}) => {

    //Close and open menu
    const handleMenu = () => {
        const header = document.getElementById('menu')
        if(header.classList.contains('active')) header.classList.remove('active')
        else header.classList.add('active')
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
                    <a className="btn btn-primary rounded-pill" target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/mawaraujo">Linkedin</a>
                    <a className="btn btn-dark rounded-pill" target="_blank" rel="noopener noreferrer" href="http://github.com/mawaraujo/">Github</a>
                    <a className="btn btn-danger rounded-pill" target="_blank" rel="noopener noreferrer" href="https://portfolio-maw.firebaseapp.com/">Portfolio</a>
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
