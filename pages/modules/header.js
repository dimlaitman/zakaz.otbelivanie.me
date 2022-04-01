export const Header = ({ text }) => {
  return (
    <div className="grid mt-3 text-black bg-white rounded-3xl px-5 py-2.5 text-center">
      <p>
        ОТБЕЛИВАНИЕ.ME - это №1 <br /> магазин отбеливающей продукции из
        <br /> Англии 🇬🇧 США 🇺🇸 Италии 🇮🇹 Швейцарии 🇨🇭
        <p className="text-gray-500 underline-offset-1 text-sm">
          Более 1000 отзывов и 10000 довольных клиентов за 8 лет работы. Нам
          доверяют звёзды!
        </p>
      </p>
    </div>
  );
};

export default Header;
