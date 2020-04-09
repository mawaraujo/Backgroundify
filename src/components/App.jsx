import React, { Fragment, useState, useEffect } from 'react';
import '../css/App.min.css'
import '../css/style.css'

//Templates
import { Header } from './templates/Header'
import { ImgGrid } from './templates/ImgGrid'
import { Navigator } from './templates/Navigator'

//Fragments
import { ClearUI } from './fragments/ClearUI'

function App() {  

  //Theme switch
  const body = document.body
  const themeOnStorage = localStorage.getItem('theme')
  const themeColorOnStorage = localStorage.getItem('color')
  const [theme, setTheme] = useState({themeColorOnStorage, themeOnStorage})
  const [changeTheme, setChangeTheme ] = useState(false) 
  const colors = ["c1089ff", "c692db7", "ce44985", "cffb6b9"]

  useEffect(() => {
    if(changeTheme === true) {
      localStorage.setItem('theme', theme.background)
      localStorage.setItem('color', theme.color)

      //Remove color class
      body.classList.forEach(b => {
        colors.filter(color => color === b)
        .map(del => { body.classList.remove(del) })
      })

      body.classList.remove('undefined')
      body.classList.remove('null')

      if(theme.background === 'light-bg') {      
        body.classList.add('light-bg', theme.color)
        body.classList.remove('dark-bg')
      }else {
        body.classList.add('dark-bg', theme.color)
        body.classList.remove('light-bg')
      }
    }else {
      if(theme.themeOnStorage === 'dark-bg') body.classList.remove('light-bg')
      else body.classList.remove('dark-bg')

      body.classList.add(theme.themeColorOnStorage)
      body.classList.add(theme.themeOnStorage)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme])

  const [search, setSearch] = useState('')
  const [resultsOfSearch, setResultsOfSearch] = useState([])

  //Paginator
  const [actualPage, setActualPage ] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    const handleSearch = async () => {
      const elementsByPagination = 28
      const orientation = 'portrait'
      const key = 'HWKIZ9zNO9xNg_jlQn9V9fP8z8f61ZATkqfLHujtcYA'
      let URL = ''

      if(search === '') URL = `https://api.unsplash.com/photos?page=${actualPage}&client_id=${key}&per_page=${elementsByPagination}&orientation=${orientation}`
      else URL = `https://api.unsplash.com/search/photos?page=${actualPage}&query=${search}&client_id=${key}&per_page=${elementsByPagination}&orientation=${orientation}`
      
      const response = await fetch(URL)
      const result = await response.json()
      setResultsOfSearch(result)
      
      //Calcular total paginas (Ceil redondea)
      const calcPages = Math.ceil(result.total / elementsByPagination)
      setTotalPages(calcPages)
    }

    //Volver arriba
    const head = document.getElementById('up')
    head.scrollIntoView({ behavior: 'smooth' })

    handleSearch()
  }, [search, actualPage])

  //Define old page
  const oldPage = () => {
    const nuevaPaginaActual = actualPage - 1
    if(nuevaPaginaActual === 0) return;
    setActualPage(nuevaPaginaActual)
  }

  //Define next page
  const nextPage = () => {
    const nuevaPaginaActual = actualPage + 1
    if(nuevaPaginaActual > totalPages) return;
    setActualPage(nuevaPaginaActual)
  }

  //Close navbar function
  const handleCloseNav = () => {
    const header = document.getElementById('menu')
    if(header.classList.contains('active')) header.classList.remove('active')
  }

  return (
    <Fragment>
      <Header setSearch={setSearch} theme={theme} setTheme={setTheme} setChangeTheme={setChangeTheme} />

      <div id="up" className="app" onClick={handleCloseNav} >
        { resultsOfSearch.length === 0
          ? <ClearUI />
          : <ImgGrid 
            resultsOfSearch={resultsOfSearch} 
            search={search} />
        }

        <Navigator
          actualPage={actualPage} 
          totalPages={totalPages} 
          oldPage={oldPage} 
          nextPage={nextPage} />

      </div>
    </Fragment>
  )
}

export default App;