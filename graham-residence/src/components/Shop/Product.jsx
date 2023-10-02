import { useState } from "react";
import styles from './Product.module.css'

export default function Product({ product }) {
  const [hover, setHover] = useState(false);

  return (
    <a key={product.id} href={product.href} className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none lg:h-80">
        <img
          src={!hover ? product.imageSrc : product.hoverImageSrc}
          alt={product.imageAlt}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          style={{imageRendering: 'high-quality'}}
          onMouseEnter={() => {
            setTimeout(() => setHover(true), 300);
          }}
          onMouseLeave={() => {
            setTimeout(() => setHover(false), 300);
          }}
        />
      </div>
      <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </div>
      <p className="mt-1 text-sm italic text-gray-500">{product.description}</p>
    </a>
  );
}
