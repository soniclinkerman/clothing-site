// import { useContext } from "react";
// import "./shop.styles.scss";
// import { CategoriesContext } from "../../contexts/categories.content";
// import CategoryPreview from "../../components/category-preview/category-preview.component";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories/categories-preview.component";
import Category from "../category/category.component";
const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
