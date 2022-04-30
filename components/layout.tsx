import Header from './header';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className='h-screen bg-gray-800 text-white'>{children}</main>
      <Footer />
    </>
  );
}
