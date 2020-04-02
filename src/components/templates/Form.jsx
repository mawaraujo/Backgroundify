import React, { useState } from 'react'

export const Form = ({ setSearch }) => {

    const [termino, setTermino] = useState('')
    // const [error, setError] = useState(false)

    const handleSearch = e => {
        e.preventDefault();
        
        if(termino.trim() === '') { 
            // setError(true) 
            return
        }

        // setError(false)
        setSearch(termino)
    }

    return(
    <form 
        id="form-search" 
        className="form_search card-bg mr-2" 
        onSubmit={handleSearch}>

            <input 
                type="text" 
                className="mr-2 rounded-pill" 
                placeholder="Enter what you want to search"
                onChange={e => setTermino(e.target.value)} 
            />
                            
            <button 
                className="btn btn-dark rounded-pill font-weight-bold">
                Search
            </button>
        </form>

        // { error 
        // ?   <div className="col-12 my-2 text-center">
        //         <p className="danger">¡No puedes buscar si no ingresas un texto!</p> 
        //     </div>
        // :   null
        // }
    )
}
