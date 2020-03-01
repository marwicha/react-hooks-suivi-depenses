import React from 'react'

// {transation } for desctructuring ou props
export const Depense = ({depense}) => {
    return (
             
        <li className="minus">
        {depense.text} <span>-${depense.amount}</span><button 
        className="delete-btn">x</button>
      </li>
    )
}
