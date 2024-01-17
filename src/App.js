import React from 'react';
import {
  PrimaryButton,
  SecondaryButton,
  RedButton,
  YellowButton,
  PurpleButton,
  OrangeButton,
  TealButton,
} from './Button'; 

const App = () => {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <h1>React Reusable Button Example</h1>
      <PrimaryButton onClick={handleButtonClick} text="Primary Button" />
      <SecondaryButton onClick={handleButtonClick} text="Secondary Button" />
      <RedButton onClick={handleButtonClick} text="Red Button" />
      <YellowButton onClick={handleButtonClick} text="Yellow Button" />
      <PurpleButton onClick={handleButtonClick} text="Purple Button" />
      <OrangeButton onClick={handleButtonClick} text="Orange Button" />
      <TealButton onClick={handleButtonClick} text="Teal Button" />
    </div>
  );
};

export default App;
