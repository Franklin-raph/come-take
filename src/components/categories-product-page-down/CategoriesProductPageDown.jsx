import ProductCard from "../productCard/ProductCard";

const CategoriesProductPageDown = ({ categoryProductsArray }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-6 gap-3">
        {categoryProductsArray && categoryProductsArray.map(product => (
            <ProductCard product={product}/>
        ))}
    </div>
  )
}

export default CategoriesProductPageDown