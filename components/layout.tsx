import Header from './header';
import Footer from './footer';
import { ReactNode } from 'react'

type ViewProps = {
    children: ReactNode;
}

export default function Layout({ children }: ViewProps) {
  return (
    <>
      <Header />
      <main className='h-screen bg-gray-800 text-white'>{children}</main>
      <Footer />
    </>
  );
}
