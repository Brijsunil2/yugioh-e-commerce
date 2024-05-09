import "../styles/ProductsSection.css";
import ProductSection from "./ProductSection";

const ProductsSection = ({ products, filters }) => {
  return (
    <div className="productssection-container">
      {
        products.length == 0 && <h2>No Products Found</h2>
      }
      {products.map((product) => {
        if (
          filters.categories.length == 0 ||
          filters.categories.includes(product.category)
        ) {
          return <ProductSection key={product.id} product={product} />;
        }
      })}
    </div>
  );
};

export default ProductsSection;
