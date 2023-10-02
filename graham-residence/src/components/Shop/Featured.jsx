export default function Featured() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 border-t border-b border-gray-400">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div>
            <div className="border-b border-gray-200 pb-10" id="featured">
              <h2 className="font-medium text-gray-500">About the artist</h2>
              <p className="mt-2 text-3xl font-light tracking-tight text-gray-900 sm:text-4xl">
                Thai Minnard
              </p>
            </div>

            <div className="mt-10 space-y-10">
              <p className="mt-3 text-sm text-gray-500">
                Some info about the artist. Things he really likes or maybe a
                featured product. Who knows the world is our oyster. He was born in a shoe with his ten other brothers and sisters. He knew by the time he was two he wanted to escape the shoe and he felt he could do this through art. 
              </p>
            </div>
          </div>

          <div>
            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
              <img
                src="https://ipfs.filebase.io/ipfs/QmUnzeB3t6JZDNBXUeZQJQFDghy9NMhpaDNHunkkQUv3zG"
                alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
