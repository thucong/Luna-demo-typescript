import "./App.css";
import Index from "./components/Index";
import ProductContextProvider from "./contexts/ProductContext";
import "./style.css";

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <Index />
      </ProductContextProvider>
    </div>
  );
}

export default App;
