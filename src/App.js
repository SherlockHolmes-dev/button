import React from 'react';
import '@master/css';

const App = () => {
  const handleButtonClick = (buttonText) => {
    console.log(`${buttonText} clicked!`);
  };

  return (
    <div>
      <h1>React Button Example</h1>
      <button className="bg:red color:white" onClick={() => handleButtonClick('Button 1')}>Button 1</button>
      <button className="bg:blue color:white" onClick={() => handleButtonClick('Button 2')}>Button 2</button>
      <button className="bg:black color:white" onClick={() => handleButtonClick('Button 3')}>Button 3</button>
    </div>
  );
};

export default App;
