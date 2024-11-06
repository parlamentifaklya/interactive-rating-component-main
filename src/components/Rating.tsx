import React, { useState } from 'react';
import star from '../../images/icon-star.svg';
import '../App.css';
import { useRate } from './RateContext';

interface RatingProps {
    onSubmit: () => void;
}

const Rating: React.FC<RatingProps> = ({ onSubmit }) => {
    const [active, setActive] = useState<number | null>(null);
    const { setRateValue } = useRate();

    const handleBtnActive = (buttonValue: number) => {
        setActive(buttonValue);
        setRateValue(buttonValue);
    };

    const handleSubmit = () => {
        if (active !== null) {
            onSubmit();
        }
    };

    return (
        <div className="container">
            <div className="star-container">
                <img src={star} alt="icon-star.svg" />
            </div>
            <div className="text-container">
                <h1>How did we do?</h1>
                <p>Please tell us how we did with your support <br /> request. All feedback is appreciated to help us improve our offering!</p>
            </div>
            <div className="rating-container">
                {[1, 2, 3, 4, 5].map((button) => (
                    <button
                        key={button}
                        className={active === button ? "active-button" : ""}
                        type="button"
                        onClick={() => handleBtnActive(button)}
                    >
                        {button}
                    </button>
                ))}
            </div>
            <div className="submit-container" onClick={handleSubmit}>
                <input type="submit" value="SUBMIT" disabled={active === null}/>
            </div>
        </div>
    );
};

export default Rating;