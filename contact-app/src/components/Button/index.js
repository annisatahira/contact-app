import React from 'react';
import './style.css';

const STYLES = ['btn--add', 'btn--delete'];

const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide'];

const COLORS = ['primary', 'white', 'blue', 'transparent', 'grey'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor,
  className
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const checkButtonColor = COLORS.includes(buttonColor) ? buttonColor : COLORS[0];

  const checkClassName = className ? className : '';

  return (
    <button 
      className={`btn 
        ${checkButtonStyle} 
        ${checkButtonSize}
        ${checkButtonColor}
        ${checkClassName}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}