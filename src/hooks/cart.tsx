import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
  quantity: number;
}

interface CartContext {
  products: Product[];
  addToCart(item: Product): void;
  increment(id: string): void;
  decrement(id: string): void;
}

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const items = await AsyncStorage.getItem('@GoMarketplace:products');

      if (items) {
        setProducts(JSON.parse(items));
      }
    }

    loadProducts();
  }, []);

  const addToCart = useCallback(
    async product => {
      const productExists = products.find(p => p.id === product.id);

      if (productExists) {
        const updatedProduct: Product = {
          ...productExists,
          price: Number(productExists.price),
          quantity: productExists.quantity + 1,
        };
        const listProducts: Product[] = products.filter(
          item => item.id !== updatedProduct.id,
        );

        setProducts([...listProducts, updatedProduct]);
      } else {
        const newProduct: Product = {
          id: product.id,
          title: product.title,
          image_url: product.image_url,
          price: Number(product.price),
          quantity: 1,
        };

        setProducts([...products, newProduct]);
      }

      await AsyncStorage.setItem(
        '@GoMarketplace:products',
        JSON.stringify(products),
      );
    },
    [products],
  );

  const increment = useCallback(
    async id => {
      const listProducts: Product[] = products.map(item => {
        if (item.id === id) {
          const updateProduct: Product = {
            ...item,
            quantity: item.quantity + 1,
          };
          return updateProduct;
        }
        return item;
      });

      setProducts(listProducts);

      await AsyncStorage.setItem(
        '@GoMarketplace:products',
        JSON.stringify(products),
      );
    },
    [products],
  );

  const decrement = useCallback(
    async id => {
      const checkItem: Product | undefined = products.find(
        item => item.id === id,
      );

      if (checkItem !== undefined) {
        if (checkItem.quantity === 1) {
          const listProducts = products.filter(item => item.id !== id);

          setProducts(listProducts);
        } else {
          const listProducts: Product[] = products.map(item => {
            if (item.id === id) {
              const newProduct: Product = {
                ...item,
                quantity: item.quantity - 1,
              };
              return newProduct;
            }
            return item;
          });

          setProducts(listProducts);
        }
      }

      await AsyncStorage.setItem(
        '@GoMarketplace:products',
        JSON.stringify(products),
      );
    },
    [products],
  );

  const value = React.useMemo(
    () => ({ addToCart, increment, decrement, products }),
    [products, addToCart, increment, decrement],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };
