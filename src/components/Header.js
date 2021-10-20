import React from 'react'
import Button from '../components/Button'

const Header = ({ title, onAdd }) => {

    
    return (
        <header className="header">
            <div className="container">
                <div className="inner">
                    <h1>{title}</h1>
                    <Button onClick={onAdd} text="Add" color="red" type="button" />
                </div>
            </div>
        </header>
    )
}

export default Header
