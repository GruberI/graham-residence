import Product from "./Product";

const products = [
  {
    id: 0,
    name: "Example Painting 1",
    href: "#",
    price: "$6000",
    description: "Thai Mainhard",
    imageSrc:
      "https://ipfs.filebase.io/ipfs/QmPBJLEdzH3LoEhvVcSSPQiig5t2zJNAP7tiJG6TKY6bie",
    hoverImageSrc:
      "https://ipfs.filebase.io/ipfs/QmP4WbX8xmmTbKMgQE3tfxUf4sUFUDSEuttS6jR2fnXFDr",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 1,
    name: "Example Painting 2",
    href: "#",
    price: "$7200",
    description: "Thai Mainhard",
    imageSrc:
      "https://ipfs.filebase.io/ipfs/QmamK5c84zEX5ajPnfPyz7pjzoF2pYkd7uk77mR6Ran4ef",
    hoverImageSrc:
      "https://ipfs.filebase.io/ipfs/QmWwE9YznH25DZmV6Q1A5Q6i3vahN9BXXihVSjk4hYtpLd",
    imageAlt:
      "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
  },
  {
    id: 2,
    name: "Example Painting 3",
    href: "#",
    price: "$3200",
    description: "Thai Mainhard",
    imageSrc:
      "https://ipfs.filebase.io/ipfs/Qmcs5efmjXzpUHwUhAoowmmK2M8SRBovcSVAB3BSTgLdLy",
    hoverImageSrc:
      "https://ipfs.filebase.io/ipfs/QmQkKEMvBs6PW3za8Hh6WUsS6QJK2ZQEbrozmn5T9cpAgr",
    imageAlt:
      "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
  },
  {
    id: 3,
    name: "Example Painting 4",
    href: "#",
    price: "$3280",
    description: "Thai Mainhard",
    imageSrc:
      "https://ipfs.filebase.io/ipfs/QmTaCvR4yuxzbwhW9N6RRxLDuz2QX2nr6E7LH2Thy5kPKZ",
    hoverImageSrc:
      "https://ipfs.filebase.io/ipfs/QmRCDK3DfZzCLeypiWGLjGXqLhZEg9AVP9eXJyAUoCBEKM",
    imageAlt:
      "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
  },
  {
    id: 4,
    name: "Example Painting 5",
    href: "#",
    price: "$6200",
    description: "Thai Mainhard",
    imageSrc:
      "https://ipfs.filebase.io/ipfs/QmYrSDacdKhuK8cp7jqjofgYZKXaJoBDFSzkrLFivg3GJA",
    hoverImageSrc:
      "https://ipfs.filebase.io/ipfs/QmSEmcBeTGzqtWsS6gEufYFccJ1pwzJNyWZ6c4oS3gfPjM",
    imageAlt:
      "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
  },
  {
    id: 5,
    name: "Example Painting 6",
    href: "#",
    price: "$6400",
    description: "Thai Mainhard",
    imageSrc:
      "https://ipfs.filebase.io/ipfs/QmNg6JNyHy3DiUfinaUo8LwfGZquQaLFJFfBy6fn7jhgjv",
    hoverImageSrc:
      "https://ipfs.filebase.io/ipfs/QmPKdqqJrXpHyabK55BnXJW8bdoyrWDonqeFoSCqzahUKG",
    imageAlt: "Paper card sitting upright in walnut card holder on desk.",
  },
];

export default function ProductsGrid() {

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="mx-auto text-left pb-6">
        <h2 className="text-1xl text-gray-900 border-b pb-2" id="products-grid">Featured Artist Thai Minhard</h2>
        </div>
        <h2 id="products-heading" className="sr-only">
          Products
        </h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <Product product={product} key={product.id}/>
          ))}
        </div>
      </div>
    </div>
  );
}
