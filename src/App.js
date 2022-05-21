import React from 'react';
import Card from './components/Card';
import './index.css';

import sedan from './images/icon-sedans.svg';
import suv from './images/icon-suvs.svg';
import luxury from './images/icon-luxury.svg';


function App() {
  return (
    <div className='all'>
      <Card info={'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'} 
            title={'SEDANS'} 
            img={sedan} 
            clas={'sedan'}/>
      <Card info={'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'} 
            title={'SUVS'} 
            img={suv}
            clas={'suv'} />
      <Card info={'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.'} 
            title={'LUXURY'} 
            img={luxury}
            clas={'luxury'}
            />
    </div>
  );
}

export default App;
