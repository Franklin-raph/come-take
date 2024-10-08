import ProductCard from "../productCard/ProductCard";

const BrandNewProducts = ({brandNewProducts}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-10 gap-3">
        {brandNewProducts && brandNewProducts.map(product => (
            <ProductCard product={product}/>
        ))}
    </div>
  )
}

export default BrandNewProducts