import React from 'react'

export const Navigator = ({actualPage, totalPages, setActualPage}) => {
  
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

    return(
        <div className="container-fluid my-5 pb-5 text-center">
            <div className="row">
                <div className="col-12">
                    { actualPage === 1
                        ? null
                        :   
                        <button
                            type="button" 
                            className="btn btn-dark px-5 rounded-pill mr-2" 
                            onClick={oldPage} >
                            Previous page 
                        </button> }
                
                    { actualPage === totalPages
                        ? null
                        :   
                        <button
                            type="button" 
                            className="btn btn-dark px-5 rounded-pill " 
                            onClick={nextPage} >
                            Next page
                        </button> }
                </div>
            </div>
        </div>
    )
}
