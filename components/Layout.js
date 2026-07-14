// components/Layout.js (מבנה האתר)
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-gray-50" dir="rtl">
      <header className="bg-white shadow-sm p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">ח. סבן – חומרי בניין</h1>
        <nav className="space-x-4 space-x-reverse">
          <a href="#" className="hover:text-blue-600">קטלוג</a>
          <a href="#" className="hover:text-blue-600">מדריכים</a>
          <a href="#" className="bg-green-600 text-white px-4 py-2 rounded-full font-bold">WhatsApp</a>
        </nav>
      </header>
      <main className="flex-grow p-6">{children}</main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>© 2026 ח. סבן חומרי בניין (1994) בע"מ | סניפי הוד השרון</p>
      </footer>
    </div>
  );
};

// pages/index.js (דף הבית)
export default function Home() {
  const products = ['צבעים וגוונים', 'מוצרי גבס', 'איטום ושיקום', 'חומרי מחצבה'];

  return (
    <Layout>
      <section className="text-center py-12">
        <h2 className="text-4xl font-extrabold mb-4">המקצוענים מתחילים את היום ב-ח. סבן</h2>
        <p className="text-xl text-gray-600 mb-8">פתרונות טכניים, הובלה ומנוף לכל אזור השרון.</p>
        <button className="bg-blue-700 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-800">
          ייעוץ טכני מהיר ב-WhatsApp
        </button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product} className="bg-white p-6 rounded-xl shadow-md border hover:border-blue-500 transition">
            <h3 className="text-xl font-bold mb-2">{product}</h3>
            <p className="text-gray-500">מפרטים טכניים מלאים ומלאי זמין.</p>
          </div>
        ))}
      </section>
    </Layout>
  );
}
