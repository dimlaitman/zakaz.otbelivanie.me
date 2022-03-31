import SocialLinks from "./modules/sociallinks";

export default function Home() {
  return (
    <div className="flex justify-center bg-[url('/bg.jpeg')] bg-center bg-cover h-screen w-screen">
      <div className="flex flex-col sm:mx-0 min-h-fit mx-2 max-w-2xl space-y-4">
        <div className="grid mt-5 text-black bg-white rounded-3xl text-sm px-5 py-2.5 text-center">
          <p className=" text-base">
            ОТБЕЛИВАНИЕ.ME - №1 магазин отбеливающей продукции из Англии🇬🇧 США🇺🇸
            Италии🇮🇹 Швейцарии🇨🇭
          </p>
          <p className=" text-gray-500 underline-offset-1 ...">
            Более 1000 отзывов и 10000 довольных клиентов за 8 лет работы. Нам
            доверяют звёзды!
          </p>
        </div>
        <SocialLinks />
        </div>
    </div>
  );
}