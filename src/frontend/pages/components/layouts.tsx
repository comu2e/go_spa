import Header from '../_layout/Header';
import Footer from '../_layout/Footer';


export default function Layout({ children }): JSX.Element {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}