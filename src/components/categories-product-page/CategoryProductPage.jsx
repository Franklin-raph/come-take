import ProductCard from "../productCard/ProductCard";

const CategoryProductPageCard = ({ allProducts }) => {
  console.log(allProducts);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 md:gap-6 gap-3">
        {allProducts && allProducts.map(product => (
            <ProductCard product={product}/>
        ))}
    </div>
  )
}

export default CategoryProductPageCard