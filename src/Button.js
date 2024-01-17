import React from 'react';

const CustomButton = ({ onClick, text, color, backgroundColor, disabled }) => {
  const buttonStyle = {
    color: color || 'white',
    backgroundColor: backgroundColor || 'blue',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'background-color 0.3s ease',
  };

  return (
    <button onClick={onClick} style={buttonStyle} disabled={disabled}>
      {text}
    </button>
  );
};

export const PrimaryButton = (props) => {
  return <CustomButton {...props} backgroundColor="blue" />;
};

export const SecondaryButton = (props) => {
  return <CustomButton {...props} backgroundColor="green" />;
};

export const RedButton = (props) => {
  return <CustomButton {...props} backgroundColor="red" />;
};

export const YellowButton = (props) => {
  return <CustomButton {...props} backgroundColor="yellow" color="black" />;
};

export const PurpleButton = (props) => {
  return <CustomButton {...props} backgroundColor="purple" />;
};

export const OrangeButton = (props) => {
  return <CustomButton {...props} backgroundColor="orange" />;
};

export const TealButton = (props) => {
  return <CustomButton {...props} backgroundColor="teal" />;
};

