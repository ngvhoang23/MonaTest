import { Checkbox, Image, InputNumber, Select } from 'antd';
import React from 'react';

const ProductItem = ({ className, data, onSelect, onChangeSize, onChangePrice, onChangeQuantity }) => {
    return (
        <div className={className + ' rounded-xl border-[1px] border-[#dce0ea] cursor-pointer'}>
            <div className="relative">
                <Checkbox
                    className="absolute top-[14px] left-[14px] z-[1] scale-150"
                    size="large"
                    onChange={onSelect}
                ></Checkbox>
                <Image
                    src={data.image}
                    fallback="src\assets\images\angry-icon.png"
                    style={{ objectFit: 'contain', width: '100%' }}
                    className="rounded-xl"
                />
            </div>
            <div className="hover:bg-[#f5f7fd] transition-all duration-300 border-t-[1px] border-[#dce0ea] pt-4">
                <div className="px-[10px]">
                    <h2 className="text-[#2c3345] font-semibold pb-[6px]">{data.product_name}</h2>
                    <p className="text-[#545a6a] pb-[4px] h-[50px] text-ellipsis overflow-clip">{data.description}</p>
                </div>
                <div className="flex items-center justify-between flex-col p-[10px]">
                    <InputNumber
                        className="text-[#4c71fb] font-semibold mb-4"
                        defaultValue={data.price}
                        formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={(value) => value?.replace(/\$\s?|(,*)/g, '')}
                        onChange={onChangePrice}
                        addonBefore={'Price'}
                    />
                    <InputNumber
                        min={0}
                        max={data.stock}
                        defaultValue={data.quantity}
                        size="middle"
                        onChange={onChangeQuantity}
                        addonBefore={'Quantity'}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
