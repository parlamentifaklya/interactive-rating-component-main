import React, { createContext, useContext, useState } from 'react';

const RateContext = createContext<any>(null);

export const RateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [rateValue, setRateValue] = useState<number | null>(null);

    return (
        <RateContext.Provider value={{ rateValue, setRateValue }}>
            {children}
        </RateContext.Provider>
    );
};

export const useRate = () => {
    return useContext(RateContext);
};