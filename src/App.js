import GlobalStyles from './components/GlobalStyles';
import { OrderProvider } from './Context/OrderContext';
import MainLayout from './MainLayout/MainLayout';

function App() {
    return (
        <GlobalStyles>
            <OrderProvider>
                <MainLayout />
            </OrderProvider>
        </GlobalStyles>
    );
}

export default App;
