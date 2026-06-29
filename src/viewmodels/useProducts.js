import {
  useState,
  useEffect,
} from "react";

import ApiService
  from "../services/apiService";

export function useProducts() {
  const [products, setProducts] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  const [category, setCategory] =
    useState("todos");

  const [searchQuery,
    setSearchQuery] =
    useState("");

  const loadProducts =
    async () => {
      setLoading(true);

      const data =
        await ApiService.getProducts(
          category === "todos"
            ? null
            : category
        );

      setProducts(data);
      setLoading(false);
    };

  const search =
    async query => {
      const data =
        await ApiService.searchProducts(
          query
        );

      setProducts(data);
    };

  useEffect(() => {
    loadProducts();
  }, [category]);

  return {
    products,
    loading,
    category,
    setCategory,
    searchQuery,
    setSearchQuery,
    search,
    refresh: loadProducts,
  };
}
