import { ReactNode, createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface ProductContextProps {
  children: ReactNode;
}
interface Product {
  id: string;
  title: string;
}
export interface ProductContextDefault {
  products: Product[];
  addProduct: (title: string) => void;
  deleteProduct: (id: string) => void;
}
const productContextDataDefault = {
  products: [],
  addProduct: () => {},
  deleteProduct: () => {},
};

export const ProductContext = createContext<ProductContextDefault>(
  productContextDataDefault
);
const ProductContextProvider = ({ children }: ProductContextProps) => {
  const [products, setProducts] = useState<Product[]>(
    productContextDataDefault.products
  );
  const addProduct = (title: string) =>
    setProducts([...products, { id: uuidv4(), title }]);
  localStorage.setItem("products", JSON.stringify(products));
  const deleteProduct = (id: string) =>
    setProducts(products.filter((product) => product.id !== id));
  const productContextData = {
    products,
    addProduct,
    deleteProduct,
  };
  return (
    <ProductContext.Provider value={productContextData}>
      {children}
    </ProductContext.Provider>
  );
};
export default ProductContextProvider;
