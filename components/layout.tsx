import Header from './header';
import Footer from './footer';
import { ReactNode } from 'react'

type ButtonProps = {
    children: ReactNode;
}

export default function Layout({ children }: ButtonProps) {
  return (
    <>
      <Header />
      <main className='h-screen bg-gray-800 text-white'>{children}</main>
      <Footer />
    </>
  );
}
