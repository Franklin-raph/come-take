import ProductCard from "../productCard/ProductCard";

const BrandNewProducts = ({brandNewProducts, getAllProductsAfterSaveOrUnsave, msg, setMsg, alertType, setAlertType, getMySavedProducts}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-10 gap-3">
        {brandNewProducts && brandNewProducts?.map(product => (
            <ProductCard msg={msg} setMsg={setMsg} alertType={alertType} getMySavedProducts={getMySavedProducts} setAlertType={setAlertType} getAllProductsAfterSaveOrUnsave={getAllProductsAfterSaveOrUnsave} product={product}/>
        ))}
    </div>
  )
}

export default BrandNewProducts