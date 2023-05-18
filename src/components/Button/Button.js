import React from 'react';
const Button = ({ text, linkTo }) => {
    return (
        <a href={linkTo} className="btn btn-success">
            {text}
        </a>
    );
};

export default Button;
