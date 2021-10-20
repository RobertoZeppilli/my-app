import React from 'react'

const Button = ({ text, color, type, width, onClick }) => {
    return (
        <button onClick={onClick} type={type} className="btn" style={{ backgroundColor: color, width: width }}>
            {text}
        </button>
    )
}

export default Button
