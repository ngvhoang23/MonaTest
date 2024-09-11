import React, { useContext } from 'react';
import { Radio } from 'antd';
import { OrderContext } from '../../Context/OrderContext';

const OptPaymentMethod = () => {
    const { order, setOrder } = useContext(OrderContext);

    const onChange = (e) => {
        setOrder((prev) => ({ ...prev, paymentMethod: e.target.value }));
    };

    return (
        <div>
            <h2 className="font-normal mb-4]">Payment</h2>
            <div className="flex flex-row items-center justify-between mt-4">
                <div className="flex items-start justify-center flex-col w-[200px]">
                    <Radio.Group onChange={onChange} value={order.paymentMethod}>
                        <Radio className="font-semibold flex items-center justify-start flex-row mb-4" value={1}>
                            <div className="flex items-center justify-center">
                                <img src={require('../../assets/images/money.png')} alt="" className="w-[40px]" />
                                <p className="ml-2 font-medium">{`(Cash)`}</p>
                            </div>
                        </Radio>
                        <Radio value={2}>
                            <div className="flex items-center justify-start">
                                <img src={require('../../assets/images/atm-card.png')} alt="" className="w-[40px]" />
                                <p className="ml-2 font-medium">{`(Credit Card)`}</p>
                            </div>
                        </Radio>
                    </Radio.Group>
                </div>

                <div className="flex items-center justify-end w-[200px]">
                    <div>
                        <div className="flex items-center justify-between w-[200px]">
                            <p>Subtotal</p>
                            <p>$ {order.total}</p>
                        </div>

                        <div className="flex items-center justify-between w-[200px]">
                            <p>Tax</p>
                            <p>$ 0</p>
                        </div>

                        <div className="flex items-center justify-between w-[200px]">
                            <p>Shipping</p>
                            <p>$ 0</p>
                        </div>

                        <div className="flex items-center justify-between w-[200px] font-bold">
                            <p>Total</p>
                            <p>$ {order.total}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OptPaymentMethod;
