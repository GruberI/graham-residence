import Product from "./Product";

export default function ProductsGrid({ products }) {
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {products.map((product) => (
        <Product product={product} key={product.id}/>
      ))}
    </div>
  );
}
