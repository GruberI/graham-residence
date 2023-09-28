export default function Quote() {
  return (
    <div className="w-screen sm:px-0 lg:px-0">
      <div className="bg-white">
        <div className="mx-auto text-center">
          <div className="inset-x-0 bottom-0 sm:static sm:flex-1 sm:self-stretch">
            <div className="flex flex-col h-14 space-x-8 overflow-x-auto  lg:px-60 lg:py-20 sm:h-full sm:justify-center sm:overflow-visible border-t border-b sm:border-t-2 sm:pt-20 sm:pb-20 sm:px-20 border-gray-400">
              <h1 className="text-2xl italic">
                "This is a quote from the artist. This artist is Thai Minhard.
                He is pretty cool and this quote is pretty cool also. This is a
                quote from the artist. This artist is Thai Minhard."
              </h1>
              <p className="pt-4 text-lg">Thai Minhard</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
