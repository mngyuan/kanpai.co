import React, { Component } from 'react';
import './App.css';
import promo from '../promo.jpg';

const words = `
Coming Soon

// かんぱい / 乾杯 / 건배 //
__ supplY°Co __

F A L L C O L L E C T I O N 2 0 1 7 S
ASIAN。CULTURAL。HERITAGE。STREETWEAR

新 || 신 || しん && 加州製造

■
`;

const options = ['かんぱい', '乾杯', '건배'];

class App extends Component {
  render() {
    const option = options[Math.floor(Math.random()*options.length)];
    return (
      <div className="App">
        <div className="bgwords">
          {option}
        </div>
        <div className="promo">
          <img src={promo} alt="kanpai.co promo"/>
          <div className="words">
            {words}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
