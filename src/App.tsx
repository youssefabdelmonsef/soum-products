import { Provider } from 'react-redux';
import './App.css';
import './styles/styles.css';
import { SoumHeader } from './components/core/soum-header';
import { FilterComponent } from './components/shared/filter/filter';
import { store } from "./redux/store";
import { ProductsComponent } from './containers/products/products';

function App() {
  return (
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
  );
}

export default App;
