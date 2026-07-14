export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="font-bold text-xl text-blue-800">ח. סבן</div>
      <div className="space-x-6 space-x-reverse text-gray-700">
        <a href="#products">קטלוג</a>
        <a href="#guides">מדריכים</a>
        <a href="https://wa.me/972500000000" className="bg-green-500 text-white px-4 py-2 rounded-lg">WhatsApp</a>
      </div>
    </nav>
  );
}
