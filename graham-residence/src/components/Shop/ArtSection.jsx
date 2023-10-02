import ProductsGrid from "./ProductsGrid";

const artwork = [
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

// const artwork = [
//   {
//     id: 0,
//     name: "A Quiet Noise",
//     href: "#",
//     price: "$6000",
//     description: "Kyle Steed",
//     imageSrc:
//       "https://ipfs.filebase.io/ipfs/QmZzKzkY6vyn9K8J6UcCyfdeNnYsFSMZPjY13We4EDvPpf",
//     hoverImageSrc:
//       "https://ipfs.filebase.io/ipfs/Qmf5Z8FyZ11TZ3r93sBpsxdcjr5F6G7qygxw82SYhRjg52",
//     imageAlt:
//       "Person using a pen to cross a task off a productivity paper card.",
//   },
//   {
//     id: 1,
//     name: "A Quiet Noise 2",
//     href: "#",
//     price: "$7200",
//     description: "Kyle Steed",
//     imageSrc:
//       "https://ipfs.filebase.io/ipfs/QmTbAeVrcSrxttFnv5J2LHnAiYKprgzc94vgtcn7gHjXHy",
//     hoverImageSrc:
//       "https://ipfs.filebase.io/ipfs/QmYcu2AT6EikaLemSr57Kp4bRhaBKyiLd17tdzv3kbxx3G",
//     imageAlt:
//       "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
//   },
//   {
//     id: 2,
//     name: "A Quiet Noise 3",
//     href: "#",
//     price: "$3200",
//     description: "Kyle Steed",
//     imageSrc:
//       "https://ipfs.filebase.io/ipfs/QmUMyJ18KZBY7SyKetPetGxpjM8RgjN58dkA9YgYPWrLLe",
//     hoverImageSrc:
//       "https://ipfs.filebase.io/ipfs/QmUMpcRBL5ZZs1JaGm9NsvQTTBE7jgK2NTfYXnXyDZ9PK9",
//     imageAlt:
//       "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
//   },
//   {
//     id: 3,
//     name: "A Quiet Noise 4",
//     href: "#",
//     price: "$3280",
//     description: "Kyle Steed",
//     imageSrc:
//       "https://ipfs.filebase.io/ipfs/QmSLbxBbhQo5gpMd1zrfrXj4Bm8peKVcbY4N8VNUTmGK6A",
//     hoverImageSrc:
//       "https://ipfs.filebase.io/ipfs/QmVV6AA7SwTvFBifraqujfNmbazpqMDby4kjMMhjidRtkA",
//     imageAlt:
//       "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
//   },
//   {
//     id: 4,
//     name: "A Quiet Noise 5",
//     href: "#",
//     price: "$6200",
//     description: "Kyle Steed",
//     imageSrc:
//       "https://ipfs.filebase.io/ipfs/QmWARsmfMwSUUfTJmjvoxYmu4BPLvVNR8Mhso9e31tHiqG",
//     hoverImageSrc:
//       "https://ipfs.filebase.io/ipfs/QmSpME4b7DWNqf3Q8b1M9By9AkR92dSgACsygBuTLAbqCs",
//     imageAlt:
//       "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
//   },
//   {
//     id: 5,
//     name: "A Quiet Noise 6",
//     href: "#",
//     price: "$6400",
//     description: "Kyle Steed",
//     imageSrc:
//       "https://ipfs.filebase.io/ipfs/QmQZvVJy6zCkwmJcdz9XRejpHx9xwkrAdzHPYcSkzsa3JQ",
//     hoverImageSrc:
//       "https://ipfs.filebase.io/ipfs/QmVML4rLgKKom3yiCgpbcpUAJZo6kLTu8ehQte5SqevvaS",
//     imageAlt: "Paper card sitting upright in walnut card holder on desk.",
//   },
// ];

export default function ArtSection() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-1xl px-4 py-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mx-auto text-left pb-6 scroll-smooth" id="artwork">
          <h2 className="text-1xl text-gray-900 border-b pb-2">
            Featured Artist Thai Minhard
          </h2>
        </div>
        <ProductsGrid products={artwork} />
      </div>
    </div>
  );
}
