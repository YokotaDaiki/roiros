import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return(
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 bg-gray-800 text-white">
        <div className="max-w-7xl rounded overflow-hidden shadow-lg border border-indigo-600">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">From ROIROS</div>
            <p className="text-white text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
          </div>
        </div>
        <div className="max-w-7xl rounded overflow-hidden shadow-lg border border-indigo-600 mt-3">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">First Single 『』について</div>
            <p className="text-white text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
          </div>
        </div>
      </div>
    </>
  )
}
