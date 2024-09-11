import React, { useContext, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { OrderContext } from '../../Context/OrderContext';
import ProductItem from '../ProductItem/ProductItem';
import { Col, Descriptions, Divider, InputNumber, Row, Space, Table, Tag } from 'antd';
import { createPortal } from 'react-dom';
import CalcCustomerAmount from '../CalcCustomerAmount/CalcCustomerAmount';

function OrderInfo({ setOpen }) {
    const { order, setOrder } = useContext(OrderContext);

    const { cart } = order;

    const items = [
        {
            key: '1',
            label: 'Customer name',
            children: order.customerName,
        },
        {
            key: '2',
            label: 'Customer phone',
            children: order.customerPhone,
        },
        {
            key: '3',
            label: 'Customer email',
            children: order.customerEmail,
        },
        {
            key: '4',
            label: 'Payment method',
            children: order.paymentMethod === 1 ? 'Cash' : 'Credit Card',
        },
    ];

    const columns = [
        {
            title: 'Product Name',
            dataIndex: 'productName',
            key: 'productName',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
        },
    ];

    const data = useMemo(() => {
        return cart.map((item) => ({
            key: item.id,
            productName: item.product_name,
            price: item.price,
            quantity: item.quantity,
        }));
    });

    return createPortal(
        <div
            className="fixed w-[100vw] h-[100vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-100 flex justify-center items-center bg-black/50 z-30 backdrop-blur-sm"
            onClick={() => setOpen(false)}
        >
            <div className="p-8 w-[900px] bg-[#fafafa] rounded-2xl shadow-md" onClick={(e) => e.stopPropagation()}>
                <Divider>
                    <header className="font-semibold text-[3.5rem] mb-4">Order Info</header>
                </Divider>

                <Descriptions
                    className="mb-8 border-[1px] border-[#9ea0a5] px-12 py-6 rounded-md"
                    layout="vertical"
                    title="Customer Info"
                    items={items}
                />

                <Table className="mb-8" columns={columns} dataSource={data} pagination={false} />

                <div className="flex items-center justify-end w-full mb-8">
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
                <div className="flex items-end justify-end flex-col">
                    <div className="flex items-center justify-between w-full mb-2">
                        <p className="font-normal">Amount given by customer:</p>

                        <InputNumber
                            className="text-[#4c71fb] font-semibold mb-4"
                            defaultValue={order.amountGiven}
                            formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            disabled
                        />
                    </div>

                    {order.amountReturn > 0 && (
                        <div className="flex items-center justify-between w-full">
                            <p className="font-normal">Change to be returned to the customer:</p>
                            <p>$ {order.amountReturn}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>,
        document.body,
    );
}

export default OrderInfo;
