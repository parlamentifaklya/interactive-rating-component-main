import React, { useState } from 'react';
import { RateProvider } from './components/RateContext';
import Rating from './components/Rating';
import Thankyou from './components/Thankyou';

const App = () => {
    const [submitted, setSubmitted] = useState(false);

    return (
        <RateProvider>
            {submitted ? (
                <Thankyou />
            ) : (
                <Rating onSubmit={() => setSubmitted(true)} />
            )}
        </RateProvider>
    );
};

export default App;