import "swiper/swiper-bundle.css";
import { MapPinned, Bell, SlidersHorizontal, Search, Star, MapPin } from "lucide-react";
import LandingScreenImage from "../../assets/images/LandingScreenImage.avif";

const Main = () => {

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
            title: "2-комнатная квартира · 65 м² · 7/12 этаж",
            address: "Алматы, р-н Бостандык, Абая",
            complex: "жил. комплекс Город Солнца",
            price: "28 000 000",
            period: "₸",
        },
        {
            id: 3,
            image: LandingScreenImage,
            status: "Аренда",
            rating: 4.5,
            title: "Студия · 30 м² · 2/5 этаж",
            address: "Шымкент, мкрн Нурсат",
            complex: "жил. комплекс GreenCity",
            price: "15 000",
            period: "/ неделя",
        },
        ];

    return (
        <div className="">
            <div className="flex justify-between p-6">
                <div className="flex flex-col">
                    <div>
                        FindRoof
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                        <MapPinned />
                        <span className="mr-2">
                            Kazakhstan, Karaganda
                        </span> 
                    </div>
                </div>
                <div className="bg-white shadow-xl flex items-center justify-center w-12 h-12 rounded-xl">
                    <Bell className="text-gray-900" />
                </div>
            </div>
            <div className="flex items-center gap-x-3 pr-6 pl-6">
                <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                    type="text"
                    placeholder="Search"
                    className="bg-white shadow-lg w-full h-12 pl-10 pr-4 rounded-xl focus:outline-none focus:ring-1 ring-gray-300"
                    />
                </div>

                <button className="bg-white shadow-lg flex items-center justify-center w-15 h-12 rounded-xl">
                    <SlidersHorizontal className="text-gray-900" />
                </button>
            </div>
            
            <div className="mt-5 ml-6">
                <span>
                    Реккомендаций
                </span>
            </div>

            <div className="mt-3 overflow-x-auto">
                <div className="flex gap-4 ml-6">
                    {listings.map((item) => (
                    <div
                        key={item.id}
                        className="flex-shrink-0 flex flex-col w-72 bg-[#fbfbfb] ring-1 ring-gray-100 rounded-xl p-4"
                    >
                        <img
                        alt="Listing photo"
                        src={item.image}
                        className="w-full h-40 object-cover rounded-lg"
                        />

                        <div className="flex mt-4 justify-between items-center">
                        <span className="inline-flex items-center rounded-full bg-[#AFD9D5] px-2.5 py-1 text-xs font-medium">
                            {item.status}
                        </span>
                        <div className="flex items-center gap-1 text-sm text-gray-700">
                            <Star className="w-4 h-4 text-amber-500" aria-hidden="true" />
                            <span>{item.rating}</span>
                        </div>
                        </div>

                        <div className="text-sm mt-2 font-semibold text-gray-900 leading-snug">
                        {item.title}
                        </div>

                        <div className="mb-2">
                        <div className="flex items-start text-gray-800">
                            <MapPin className="w-4 h-4 mt-0.5 text-gray-500" aria-hidden="true" />
                            <span>{item.address}</span>
                        </div>
                        <span className="text-xs text-gray-500">{item.complex}</span>
                        </div>

                        {/* Цена всегда внизу */}
                        <div className="mt-auto flex items-baseline gap-1">
                        <span className="text-lg font-semibold text-emerald-700">
                            {item.price}&nbsp;₸
                        </span>
                        <span className="text-sm text-gray-500">{item.period}</span>
                        </div>
                    </div>
                    ))}
                </div>
            </div>

            <div>
                
            </div>

        </div>
    );
};

export default Main;
