import Link from "next/link";
export default function Home() {
  return(
    <>
      <h1 className='text-xl text-gray-800'>Hello Next.js</h1>
      <Link href="/about">
        <button className="bg-indigo-700 font-semibold text-white py-2 px-6 rounded">About</button>
      </Link>
    </>
  )
}
