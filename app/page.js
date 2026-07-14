export default function Home() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold">היועץ הטכני שלך בשטח</h1>
        <p className="mt-4 text-lg">מומחיות בטמבור, נירלט, סיקה ותרמוקיר – הכל במקום אחד.</p>
        <a href="https://wa.me/972500000000" className="inline-block mt-6 bg-green-600 text-white px-8 py-3 rounded-xl font-bold">
          ייעוץ טכני בוואטסאפ
        </a>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="p-6 border rounded-lg bg-white shadow-sm">
          <h2 className="text-xl font-bold">מדריכי שיפוץ</h2>
          <p>גישה למפרטי איטום, עבודות גבס ותקנים רשמיים.</p>
        </div>
        <div className="p-6 border rounded-lg bg-white shadow-sm">
          <h2 className="text-xl font-bold">שירות לוגיסטי</h2>
          <p>הובלות מנוף, פינוי פסולת ואספקה מיידית לאתרי בנייה.</p>
        </div>
      </section>
    </div>
  );
}
