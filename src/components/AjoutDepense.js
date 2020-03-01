import React, { Fragment, useState } from 'react'

export const AjoutDepense = () => {

    const [text, setText] = useState('')

    const [amount, setAmount]  = useState(0)

    return (
        <Fragment>
        <h3>Ajout nouvelle depense</h3>
        <form id="form">
          <div className="form-control">
            <label htmlFor="text">Text</label>
            <input type="text" value={text} onChange={ (e) => setText(e.target.value)}
            placeholder="Enter text..." />
          </div>
          <div className="form-control">
            <label htmlFor="amount"
              >Amount <br />
              
              </label>
            <input type="number" value={amount} onChange={ (e) => setAmount(e.target.value)}
             placeholder="Enter amount..." />
          </div>
          <button className="btn"> Ajout Depense </button>
        </form>

        </Fragment>
    )
}
