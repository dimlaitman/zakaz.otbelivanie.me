export default function Home() {
  return (
    <div className="flex justify-center bg-[url('/bg.jpeg')] bg-center bg-cover h-screen w-screen">
      <div className="flex flex-col sm:mx-0 min-h-fit mx-2  max-w-2xl space-x-4 h-screen w-screen">
        <div className="grid mt-5 text-black bg-white rounded-3xl text-sm px-5 py-2.5 text-center mb-2">
          <p className=" font-medium text-base">
            ОТБЕЛИВАНИЕ.ME - №1 магазин отбеливающей продукции из Англии🇬🇧 США🇺🇸
            Италии🇮🇹 Швейцарии🇨🇭
          </p>
          <p className="underline underline-offset-1 ...">
            Более 1000 отзывов и 10000 довольных клиентов за 8 лет работы.Нам
            доверяют звёзды!
          </p>
        </div>
        <div>02</div>
      </div>
    </div>
  );
}
