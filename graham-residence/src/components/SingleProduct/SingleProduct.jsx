import { useState } from "react";
import { Disclosure, Tab } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import Layout from "@/components/Layout";

const product = {
  name: `"Dreaming of Yucca"`,
  price: "$7250",
  subHeading: 'KYLE STEED',
  images: [
    {
      id: 1,
      name: "Angled view",
      src: "https://ipfs.filebase.io/ipfs/QmZzKzkY6vyn9K8J6UcCyfdeNnYsFSMZPjY13We4EDvPpf",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
      id: 2,
      name: "Angled view",
      src: "https://ipfs.filebase.io/ipfs/Qmf5Z8FyZ11TZ3r93sBpsxdcjr5F6G7qygxw82SYhRjg52",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
      id: 3,
      name: "Angled view",
      src: "https://ipfs.filebase.io/ipfs/QmVmbeMmM9h244UCofAkThHxYzWUpTbYJRi5y6r2y2bpZA",
      alt: "Angled front view with bag zipped and handles upright.",
    },
  ],
  colors: [
    {
      name: "Washed Black",
      bgColor: "bg-gray-700",
      selectedColor: "ring-gray-700",
    },
    { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
    {
      name: "Washed Gray",
      bgColor: "bg-gray-500",
      selectedColor: "ring-gray-500",
    },
  ],
  description: `
      <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
    `,
  details: [
    {
      name: "DESCRIPTION",
      items: [
        "The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.",
      ],
    },
    {
      name: "DETAILS",
      items: [
        "Dimensions: 72W x 2.5D x 48H",
        "Weight: 35 lb",
        "Materials: Vertical Grain 2.5 White Oak, Fredrix 558 Raw Canvas",
      ],
    },
    {
      name: "SHIPPING & RETURNS",
      items: [
        "This item is fulfilled via standard ground shipping. This item is made to order, all sales are final. View our complete Return Policy in our FAQs.",
      ],
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Product() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <Layout>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-0 py-16 sm:px-0 sm:py-24 lg:max-w-5xl lg:px-0">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-20">
            {/* Image gallery */}
            <Tab.Group as="div" className="flex flex-col-reverse">
              {/* Image selector */}
              <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                <Tab.List className="grid grid-cols-4 gap-6">
                  {product.images.map((image) => (
                    <Tab
                      key={image.id}
                      className="relative flex h-24 cursor-pointer items-center justify-center bg-white text-sm font-medium uppercase text-gray-400 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                    >
                      {({ selected }) => (
                        <>
                          <span className="sr-only">{image.name}</span>
                          <span className="absolute inset-0 overflow-hidden">
                            <img
                              src={image.src}
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </span>
                          <span
                            className={classNames(
                              selected ? "ring-slate-400" : "ring-transparent",
                              "pointer-events-none absolute inset-0 ring-2 ring-offset-2"
                            )}
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </Tab>
                  ))}
                </Tab.List>
              </div>

              <Tab.Panels className="aspect-h-1 aspect-w-1 w-full">
                {product.images.map((image) => (
                  <Tab.Panel key={image.id}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover object-center "
                    />
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>

            {/* Product info */}
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <div className="flex place-content-between">
                <h1 className="text-3xl font-light tracking-tight text-gray-500">
                  {product.name}
                </h1>
                <p className="text-3xl tracking-tight text-gray-500">
                  {product.price}
                </p>
              </div>
              <p className="mt-4 text-neutral-500 border-b pb-6">{product.subHeading}</p>

              <form className="mt-6">
                <div className="mt-20 flex justify-center ">
                  <button
                    type="submit"
                    className="flex max-w-sm items-center justify-center border-2 border-slate-400 border-black px-8 py-3 text-base font-light  text-gray-500 hover:bg-neutral-200 hover:border-neutral-200 focus:outline-none focus:ring-2 focus:ring-stone-600 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                  >
                    ADD TO CART
                  </button>
                </div>
              </form>

              <section aria-labelledby="details-heading" className="mt-20">
                <div className="divide-y divide-gray-200 border-t">
                  {product.details.map((detail) => (
                    <Disclosure as="div" key={detail.name}>
                      {({ open }) => (
                        <>
                          <h3>
                            <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                              <span
                                className={classNames(
                                  open ? "text-gray-600" : "text-gray-500",
                                  "text-sm font-medium"
                                )}
                              >
                                {detail.name}
                              </span>
                              <span className="ml-4 flex items-center">
                                {open ? (
                                  <MinusIcon
                                    className="block h-6 w-6 text-slate-400 group-hover:text-slate-500"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusIcon
                                    className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel
                            as="div"
                            className="prose prose-sm pb-6"
                          >
                            <ul role="list">
                              {detail.items.map((item) => (
                                <li key={item} className="list-none">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
