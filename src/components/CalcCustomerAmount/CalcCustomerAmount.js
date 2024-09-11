import { InputNumber } from 'antd';
import React, { useContext } from 'react';
import { OrderContext } from '../../Context/OrderContext';

const CalcCustomerAmount = () => {
    const { order, setOrder } = useContext(OrderContext);

    return (
        <div className="flex items-end justify-end flex-col">
            <div className="flex items-center justify-between w-full mb-2">
                <p className="font-normal">Amount given by customer:</p>

                <InputNumber
                    className="text-[#4c71fb] font-semibold mb-4"
                    defaultValue={0}
                    formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={(value) => value?.replace(/\$\s?|(,*)/g, '')}
                    onChange={(value) => {
                        setOrder((prev) => ({ ...prev, amountGiven: value, amountReturn: value - order.total }));
                    }}
                />
            </div>

            {order.amountReturn > 0 && (
                <div className="flex items-center justify-between w-full">
                    <p className="font-normal">Change to be returned to the customer:</p>
                    <p>$ {order.amountReturn}</p>
                </div>
            )}
        </div>
    );
};

export default CalcCustomerAmount;
