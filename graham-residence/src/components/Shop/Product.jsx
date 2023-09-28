import { useState } from "react";

export default function ArtSingle({ product }) {
  const [hover, setHover] = useState(false);

  return (
    <a key={product.id} href={product.href} className="group">
      <div className="aspect-h-2 aspect-w-1 w-full overflow-hidden sm:aspect-h-2 sm:aspect-w-2">
        <img
          src={!hover ? product.imageSrc : product.hoverImageSrc}
          alt={product.imageAlt}
          className="h-full w-full object-cover object-center"
          onMouseEnter={() => {
            setTimeout(() => setHover(true), 500);
          }}
          onMouseLeave={() => {
            setHover(false);
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
