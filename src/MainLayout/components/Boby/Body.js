import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Divider } from 'antd';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import CustomerFields from '../../../components/CustomerFields/CustomerFields';
import OptPaymentMethod from '../../../components/OptPaymentMethod/OptPaymentMethod';
import ProductContainer from '../../../components/ProductContainer/ProductContainer';
import TotalOrderAmount from '../../../components/TotalOrderAmount/TotalOrderAmount';
import { OrderContext } from '../../../Context/OrderContext';
import CalcCustomerAmount from '../../../components/CalcCustomerAmount/CalcCustomerAmount';
import OrderInfo from '../../../components/OrderInfo/OrderInfo';

const Body = () => {
    const { order, setOrder } = useContext(OrderContext);
    const [showOrder, setShowOrder] = useState(false);

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        setShowOrder(true);
    };

    return (
        <div className="w-full">
            <ProductContainer />
            <Divider style={{ borderColor: '#dce0ea' }} />
            <CustomerFields register={register} control={control} errors={errors} />
            <Divider style={{ borderColor: '#dce0ea' }} />
            <OptPaymentMethod />
            <Divider style={{ borderColor: '#dce0ea' }} />
            {order.paymentMethod === 1 && (
                <>
                    <CalcCustomerAmount />
                    <Divider style={{ borderColor: '#dce0ea' }} />
                </>
            )}
            <Button
                type="primary"
                className="w-full mt-8 font-normal transition-all duration-300"
                size="large"
                onClick={() => {
                    handleSubmit(onSubmit)();
                }}
            >
                Create Order
            </Button>

            {showOrder && <OrderInfo setOpen={setShowOrder} />}
        </div>
    );
};

export default Body;
