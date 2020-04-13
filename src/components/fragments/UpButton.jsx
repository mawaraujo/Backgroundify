import React from 'react'
import ArrowUp from '../../img/arrow_up.png'

export const UpButton = () => {
    const handleUp = () => window.scrollTo(0, 0)

    return(
        <div className="upButton text-center" onClick={handleUp}>
            <div> <img className="m-auto" src={ArrowUp} alt="Arrow" width="50px"/> </div>
        </div>
    )
}
