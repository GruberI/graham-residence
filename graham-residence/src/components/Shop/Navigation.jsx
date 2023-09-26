const navigation = {
  categories: [
    {
      name: "Artworks",
      href: "/property",
    },
    {
      name: "Home Goods",
      href: "#",
    },
    {
      name: "Journal",
      href: "/about",
    },
  ],
};

export default function Navigation() {
  return (
    <div aria-label="Top" className="w-screen">
      <div className="bg-white px-6 py-24 sm:py-8 lg:px-8">
        <div className="mx-auto text-center">
          <div className="inset-x-0 bottom-0 sm:static sm:flex-1 sm:self-stretch">
            <div className="flex h-14 space-x-8 overflow-x-auto  px-4 pb-px sm:h-full sm:justify-center sm:overflow-visible border-t border-b sm:border-t-2 sm:border-b-2 sm:pt-3 sm:pb-3">
              {navigation.categories.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center text-sm font-sm text-gray-700 hover:text-gray-800"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
