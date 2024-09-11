import React from 'react';
import Header from './components/Header/Header';
import Body from './components/Boby/Body';
import Footer from './components/Footer/Footer';

const MainLayout = () => {
    return (
        <div className="flex items-center justify-center ">
            <div className="flex items-center justify-center flex-col w-[800px] p-10 border-[1px] shadow-md m-4">
                <Header />
                <Body />
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;
