import React from 'react'

export const Navigator = ({actualPage, totalPages, oldPage, nextPage }) => {
    return(
        <div className="container-fluid my-5 pb-5 text-center">
            <div className="row">
                <div className="col-12">
                    { actualPage === 1
                        ? null
                        :   
                        <button
                            type="button" 
                            className="btn btn-dark px-2 rounded-pill mr-2" 
                            onClick={oldPage} >
                            Anterior    
                        </button> }
                
                    { actualPage === totalPages
                        ? null
                        :   
                        <button
                            type="button" 
                            className="btn btn-dark px-2 rounded-pill " 
                            onClick={nextPage} >
                            Siguiente
                        </button> }
                </div>
            </div>
        </div>
    )
}
