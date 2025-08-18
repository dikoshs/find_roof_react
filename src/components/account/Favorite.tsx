import Footbar from '../menu/Footbar'
import LandingScreenImage from "../../assets/images/LandingScreenImage.avif";
import { Star, MapPin } from "lucide-react";

const Favorite = () => {
  const listings = [
    {
        id: 1,
        image: LandingScreenImage,
        status: "Аренда",
        rating: 4.2,
        title: "1-комнатная квартира · 45 м² · 4/9 этаж",
        address: "Астана, Сарайшык р-н, Ахмет",
        complex: "жил. комплекс Центральный",
        price: "22 000",
        period: "/ неделя",
    },
    {
        id: 2,
        image: LandingScreenImage,
        status: "Продажа",
        rating: 4.8,
        title: "2-комнатная квартира · 65 м² · 5/12 этаж",
        address: "Караганда, пр. Бухар Жырау",
        complex: "жил. комплекс Сарыарка",
        price: "19 000 000",
        period: "₸",
    },
    {
        id: 3,
        image: LandingScreenImage,
        status: "Аренда",
        rating: 4.5,
        title: "Студия · 30 м² · 2/5 этаж",
        address: "Алматы, мкрн Самал",
        complex: "жил. комплекс Горизонт",
        price: "15 000",
        period: "/ неделя",
    },
    {
        id: 4,
        image: LandingScreenImage,
        status: "Аренда",
        rating: 4.0,
        title: "3-комнатная квартира · 78 м² · 7/9 этаж",
        address: "Астана, Есильский р-н",
        complex: "жил. комплекс Капитал",
        price: "35 000",
        period: "/ неделя",
    },
    {
        id: 5,
        image: LandingScreenImage,
        status: "Продажа",
        rating: 4.9,
        title: "Пентхаус · 120 м² · 10/10 этаж",
        address: "Алматы, пр. Абая",
        complex: "жил. комплекс Sky City",
        price: "75 000 000",
        period: "₸",
    },
  ];

  return (
    <div>
      <div className="p-6 space-y-4">
        {listings.map((item) => (
        <div
            key={item.id}
            className="w-full bg-[#fbfbfb] ring-1 ring-gray-100 rounded-3xl p-4 flex flex-row"
        >
            {/* Картинка */}
            <img
            src={item.image}
            alt={item.title}
            className="rounded-l-3xl w-2/5 object-cover"
            />

            {/* Контент */}
            <div className="flex flex-col flex-1 ml-4">
            {/* Верх: статус + рейтинг */}
            <div className="flex mt-2 justify-between items-center">
                <span className="inline-flex items-center rounded-full bg-[#AFD9D5] px-2.5 py-1 text-xs font-medium">
                {item.status}
                </span>
                <div className="flex items-center gap-1 text-sm text-gray-700">
                <Star className="w-4 h-4 text-amber-500" aria-hidden="true" />
                <span>{item.rating}</span>
                </div>
            </div>

            {/* Заголовок */}
            <div className="text-sm mt-2 font-semibold text-gray-900 leading-snug">
                {item.title}
            </div>

            {/* Адрес + комплекс */}
            <div className="mb-2">
                <div className="flex items-start text-gray-800">
                <MapPin
                    className="w-4 h-4 mt-0.5 text-gray-500"
                    aria-hidden="true"
                />
                <span>{item.address}</span>
                </div>
                <span className="text-xs text-gray-500">{item.complex}</span>
            </div>

            {/* Цена */}
            <div className="mt-auto flex items-baseline gap-1">
                <span className="text-lg font-semibold text-emerald-700">
                {item.price}&nbsp;₸
                </span>
                <span className="text-sm text-gray-500">{item.period}</span>
            </div>
            </div>
        </div>
        ))}
    </div>
        
      <Footbar />
    </div>
  )
}

export default Favorite
