import { Input } from 'antd';
import React from 'react';
import { Controller } from 'react-hook-form';
import { Typography } from 'antd';
const { Text } = Typography;

const CustomInput = ({ type = 'text', placeholder = 'Enter Response', error, onChange, ...rest }) => {
    return (
        <div className="input-container">
            <Controller
                name={rest.name}
                control={rest.control}
                rules={rest.rules}
                render={({ field, fieldState }) => (
                    <Input
                        className={fieldState.invalid ? 'custom-input error' : 'custom-input'}
                        size={rest.size}
                        placeholder={placeholder}
                        type={type}
                        prefix={rest.prefix}
                        {...field}
                        onChange={(e) => {
                            field.onChange(e);
                            onChange(e);
                        }}
                    />
                )}
            />
            <Text className={`transition-all duration-[3000ms]`} type="danger">
                {error?.message || ''}
            </Text>
        </div>
    );
};

export default CustomInput;
