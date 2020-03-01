import React, { Fragment, useContext } from 'react'

import {GlobalContext} from '../context/GlobalState'

import {Depense} from './Depense'

export const DepensesList = () => {

const {depenses} = useContext(GlobalContext)

    return (

        <Fragment>
        <h3> Mes depenses </h3>
        <ul className="list">
        {depenses.map(depense => (
          
          <Depense key={depense.id}  depense= {depense}/>
          )) }
         
        </ul>
        </Fragment>
        
    )
}
