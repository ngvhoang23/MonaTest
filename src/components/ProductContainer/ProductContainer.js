import { Input } from 'antd';
import React, { useContext, useEffect, useState, useTransition } from 'react';
import ProductItem from '../ProductItem/ProductItem';
import axios from 'axios';
import { OrderContext } from '../../Context/OrderContext';
import { debounce } from '../../utils';
const { Search } = Input;

const ProductContainer = () => {
    const [products, setProducts] = useState([]);
    const [searchedProducts, setSearchedProducts] = useState([]);

    const { order, setOrder } = useContext(OrderContext);

    useEffect(() => {
        axios
            .get(`https://66e11833c831c8811b53bee3.mockapi.io/products/products`)
            .then((res) => {
                const products = res.data;
                products.forEach((product) => {
                    product.quantity = 0;
                });
                setProducts(products);
                setSearchedProducts(products);
            })
            .catch((error) => console.log('error', error));
    }, []);

    const handleAddCartItem = (product) => {
        setOrder((prev) => ({
            ...prev,
            cart: [...prev.cart, product],
            total: prev.total + product.quantity * product.price,
        }));
    };

    const handleRemoveCartItem = (product) => {
        setOrder((prev) => ({
            ...prev,
            cart: prev.cart.filter((item) => item.id !== product.id),
            total: prev.total - product.quantity * product.price,
        }));
    };

    useEffect(() => {
        const newTotal = order.cart.reduce((total, product) => {
            return total + product.price * product.quantity;
        }, 0);
        setOrder((prev) => ({
            ...prev,
            total: newTotal,
            amountReturn: prev.amountGiven - newTotal,
        }));
    }, [order.cart]);

    const handleSearch = (e) => {
        if (e.target.value === '') {
            setSearchedProducts(products);
        }
        setSearchedProducts(() => {
            const list = [];
            products.forEach((product) => {
                if (product.product_name.toLowerCase().includes(e.target.value)) {
                    list.push(product);
                }
            });

            return list;
        });
    };

    return (
        <div>
            <header>Products</header>
            <div className="flex items-center justify-between w-full mt-3">
                <Search
                    placeholder="Search Product..."
                    className="font-normal "
                    style={
                        {
                            // width: '48%',
                        }
                    }
                    size="middle"
                    onChange={(e) => handleSearch(e)}
                />
            </div>
            {searchedProducts.length > 0 && (
                <div className="flex items-center justify-start flex-wrap my-8 mx-[-8px] h-[440px] overflow-y-scroll">
                    {searchedProducts.map((product) => {
                        return (
                            <ProductItem
                                key={product.id}
                                className={'w-[31%] mx-[8px] mb-[8px]'}
                                data={product}
                                onSelect={(e) => {
                                    if (e.target.checked) {
                                        handleAddCartItem(product);
                                    } else {
                                        handleRemoveCartItem(product);
                                    }
                                }}
                                onChangeQuantity={(quantity) => {
                                    setOrder((prev) => ({
                                        ...prev,
                                        cart: prev.cart.map((item) => {
                                            if (item.id !== product.id) {
                                                item.quantity = quantity;
                                            }

                                            return item;
                                        }),
                                    }));
                                    setProducts((prev) => {
                                        return prev.map((item) => {
                                            if (item.id === product.id) {
                                                item.quantity = quantity;
                                            }
                                            return item;
                                        });
                                    });
                                }}
                                onChangePrice={(price) => {
                                    setOrder((prev) => ({
                                        ...prev,
                                        cart: prev.cart.map((item) => {
                                            if (item.id !== product.id) {
                                                item.price = price;
                                            }

                                            return item;
                                        }),
                                    }));
                                    setProducts((prev) => {
                                        return prev.map((item) => {
                                            if (item.id === product.id) {
                                                item.price = price;
                                            }
                                            return item;
                                        });
                                    });
                                }}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default ProductContainer;
