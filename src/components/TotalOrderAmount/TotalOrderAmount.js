import React from 'react';

const TotalOrderAmount = () => {
    return (
        <div className="flex items-center justify-end">
            <div>
                <div className="flex items-center justify-between w-[200px]">
                    <p>Subtotal</p>
                    <p>$ 300.00</p>
                </div>

                <div className="flex items-center justify-between w-[200px]">
                    <p>Tax</p>
                    <p>$ 24.00</p>
                </div>

                <div className="flex items-center justify-between w-[200px]">
                    <p>Shipping</p>
                    <p>$ 2.00</p>
                </div>

                <div className="flex items-center justify-between w-[200px] font-bold">
                    <p>Total</p>
                    <p>$ 326.00</p>
                </div>
            </div>
        </div>
    );
};

export default TotalOrderAmount;
