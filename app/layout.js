import './globals.css';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body className="bg-gray-50">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
