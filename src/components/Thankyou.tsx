import React from 'react';
import { useRate } from './RateContext';
import thankyou from '../../images/illustration-thank-you.svg';
import '../App.css';

const Thankyou = () => {
  const { rateValue } = useRate();

  return (
    <div className="container">
        <img className='thx-img' src={thankyou} alt="illustration-thank-you.svg" />
        <div className='selctiontext-container'>
            You selected {rateValue !== null ? rateValue : 'x'} out of 5
        </div>
        <div className='text-container'>
            <h1 className='thx-h1'>Thank you!</h1>
            <p className='thx-p'>
                We appreciate you taking the time to give a rating. <br />
                If you ever need more support, don't hesitate to <br />
                get in touch!
            </p>
        </div>
    </div>
  );
}

export default Thankyou;