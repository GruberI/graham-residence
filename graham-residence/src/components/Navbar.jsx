"use client";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

const navigation = {
  categories: [
    {
      name: "The Property",
      href: "/property",
    },
    {
      name: "The Shop",
      href: "#",
    },
    {
      name: "About",
      href: "/about",
    },
  ],
};

export default function Navigation() {
  return (
    <div className="bg-white">
      <header className="relative bg-white">
      {/* navbar full width */}
        <nav aria-label="Top" className="w-screen sm:px-6 lg:px-8">
        {/* navbar not full width <nav aria-label="Top" className="w-screen sm:px-6 lg:px-8"> */}
          <div className="border-b border-gray-200 px-4 pb-14 sm:px-0 sm:pb-0">
            <div className="flex h-16 items-center justify-between">
              {/* Company Name */}
              <div className="flex flex-1">
                <a href="#">
                  <p className="text-medium">THE GRAHAM RESIDENCE</p>
                </a>
              </div>

              {/* Middle menu */}
              <div className="absolute inset-x-0 bottom-0 sm:static sm:flex-1 sm:self-stretch">
                <div className="flex h-14 space-x-8 overflow-x-auto border-t px-4 pb-px sm:h-full sm:justify-center sm:overflow-visible sm:border-t-0 sm:pb-0">
                  {navigation.categories.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center text-medium font-medium text-gray-700 hover:text-gray-800"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex flex-1 items-center justify-end">
                {/* Search */}
                <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Search</span>
                  <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                </a>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-8">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      0
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
