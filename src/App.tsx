import { Provider } from 'react-redux';
import './App.css';
import './styles/styles.css';
import { SoumHeader } from './components/core/soum-header';
import { FilterComponent } from './components/shared/filter/filter';
import { store } from "./redux/store";
import { ProductsComponent } from './containers/products/products';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <SoumHeader></SoumHeader>
          </header>
          <div className="body-container">
            <FilterComponent />
            <ProductsComponent />
          </div>
        </div>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
