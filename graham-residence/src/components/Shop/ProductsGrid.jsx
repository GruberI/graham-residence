import Product from "./Product";

export default function ProductsGrid({ products }) {
  return (
    <div className="grid gap-10 sm:grid-cols-4 lg:grid-cols-4">
    {/* Previous grid */}
     {/* <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8"> */}
      {products.map((product) => (
        <Product product={product} key={product.id}/>
      ))}
    </div>
  );
}
