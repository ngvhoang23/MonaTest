import { Col, InputNumber, Row } from 'antd';
import React, { useContext } from 'react';
import CustomInput from '../CustomeInput/CustomeInput';
import { DollarIcon, EmailIcon, PhoneIcon, UserIcon } from '../Icons/Icons';
import { OrderContext } from '../../Context/OrderContext';

const rules = {
    customerEmail: {
        required: 'Email khách hàng là bắt buộc',
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Địa chỉ email không hợp lệ',
        },
    },

    customerName: { required: 'Tên khách hàng là bắt buộc' },

    customerPhone: {
        required: 'Số điện thoại khách hàng là bắt buộc',
        pattern: {
            value: /^[0-9]{10,11}$/,
            message: 'Số điện thoại không hợp lệ',
        },
    },
};

const CustomerFields = ({ control, errors }) => {
    const { order, setOrder } = useContext(OrderContext);

    return (
        <div>
            <Row gutter={[8, 16]}>
                <Col span={24}>
                    <CustomInput
                        label="Customer name"
                        name="customerName"
                        control={control}
                        rules={rules.customerName}
                        placeholder="Enter Customer name"
                        type="text"
                        prefix={<UserIcon size={24} />}
                        size="large"
                        onChange={(e) => {
                            setOrder((prev) => ({ ...prev, customerName: e.target.value }));
                        }}
                        error={errors.customerName}
                    />
                </Col>

                <Col span={12}>
                    <CustomInput
                        label="Phone number"
                        name="customerPhone"
                        control={control}
                        rules={rules.customerPhone}
                        placeholder="Enter Phone number"
                        type="text"
                        prefix={<PhoneIcon size={24} />}
                        size="large"
                        onChange={(e) => {
                            setOrder((prev) => ({ ...prev, customerPhone: e.target.value }));
                        }}
                        error={errors.customerPhone}
                    />
                </Col>

                <Col span={12}>
                    <CustomInput
                        label="Email"
                        name="customerEmail"
                        control={control}
                        rules={rules.customerEmail}
                        placeholder="Email"
                        type="text"
                        prefix={<EmailIcon size={24} />}
                        size="large"
                        onChange={(e) => {
                            setOrder((prev) => ({ ...prev, customerEmail: e.target.value }));
                        }}
                        error={errors.customerEmail}
                    />
                </Col>
            </Row>
        </div>
    );
};

export default CustomerFields;
