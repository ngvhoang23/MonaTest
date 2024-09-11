import React, { createContext, useState } from 'react';

const OrderContext = createContext();

const OrderProvider = ({ children }) => {
    const [order, setOrder] = useState({
        customerName: '',
        customerEmail: '',
        customerPhone: '',
        cart: [],
        paymentMethod: 1,
        amountGiven: 0,
        total: 0,
        amountReturn: 0,
    });

    return <OrderContext.Provider value={{ order, setOrder }}>{children}</OrderContext.Provider>;
};

export { OrderProvider, OrderContext };
