import React, { Fragment, useState, useEffect } from 'react';
import '../css/App.min.css'
import '../css/style.css'

//Templates
import { Header } from './templates/Header'
import { ImgGrid } from './templates/ImgGrid'
import { Navigator } from './templates/Navigator'

//Fragments
import { ClearUI } from './fragments/ClearUI'
import { UpButton } from './fragments/UpButton'

function App() {  
  //Theme switch
  const themeOnStorage = localStorage.getItem('theme')
  const themeColorOnStorage = localStorage.getItem('color')
  const [theme, setTheme] = useState({themeColorOnStorage, themeOnStorage})
  const [isChangeTheme, setIsChangeTheme ] = useState(false)

  useEffect(() => {
    const body = document.body
    
    //Si el usuario cambia de tema
    if(isChangeTheme) {
      localStorage.setItem('theme', theme.background)
      localStorage.setItem('color', theme.color)

      body.removeAttribute('class')

      if(theme.background === 'light-bg') {      
        body.classList.add('light-bg', theme.color)
        body.classList.remove('dark-bg')
      } else {
        body.classList.add('dark-bg', theme.color)
        body.classList.remove('light-bg')
      }

      setIsChangeTheme(false)
      
      //Si se recarga la pagina, se aplican los cambios del body con el localStorage
    } else {

      if(theme.themeOnStorage === 'dark-bg') body.classList.remove('light-bg')
      else body.classList.remove('dark-bg')

      body.classList.add(theme.themeColorOnStorage)
      body.classList.add(theme.themeOnStorage)
      
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme])

  //Fetch
  const [search, setSearch] = useState('')
  const [resultsOfSearch, setResultsOfSearch] = useState([])
  const [actualPage, setActualPage ] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    const handleSearch = async () => {
      const elementsByPagination = 28
      const key = 'HWKIZ9zNO9xNg_jlQn9V9fP8z8f61ZATkqfLHujtcYA'
      let URL

      if(search === '') URL = `https://api.unsplash.com/photos?page=${actualPage}&client_id=${key}&per_page=${elementsByPagination}&orientation=portrait`
      else URL = `https://api.unsplash.com/search/photos?page=${actualPage}&query=${search}&client_id=${key}&per_page=${elementsByPagination}&orientation=portrait`
      
      const response = await fetch(URL)

      if(response.ok) {
        const result = await response.json()
        setResultsOfSearch(result)

        //Eliminamos pantalla de carga
        setIsLoading(false)

        //Calcular total paginas (Ceil redondea)
        const calcPages = Math.ceil(result.total / elementsByPagination)
        setTotalPages(calcPages)

      }else setIsLoading(true)
    }

    //Volver arriba
    const head = document.getElementById('up')
    head.scrollIntoView({ behavior: 'smooth' })

    handleSearch()
  }, [search, actualPage])

  //Close navbar function
  const handleCloseNav = () => document.getElementById('menu').classList.remove('active')

  return (
    <Fragment>
      <Header 
        setSearch={setSearch} 
        theme={theme} 
        setTheme={setTheme} 
        setChangeTheme={setIsChangeTheme}
      />

      <div id="up" className="app" onClick={handleCloseNav} >
        { isLoading
          ? <ClearUI />
          : <>
              <ImgGrid 
                resultsOfSearch={resultsOfSearch} 
                search={search} />
              <Navigator
                actualPage={ actualPage } 
                totalPages={ totalPages }
                setActualPage={ setActualPage } />
            </>
        }
      </div>
    </Fragment>
  )
}

export default App;