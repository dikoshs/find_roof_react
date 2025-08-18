
export interface FilterRequest {
  city: string;
  priceFrom: string;
  priceTo: string;
  rooms: string;
  dealType: "rent" | "buy" | "";
  startDate: string;
  endDate: string;
}

export async function mockSearchApi(filter: FilterRequest) {
  console.log("🔍 Отправлен фильтр:", filter);

  const activeFilters = Object.entries(filter).filter(([_, v]) => v !== "");
  if (activeFilters.length === 0) {
    return []; 
  }

  await new Promise((res) => setTimeout(res, 500));

  return [
    {
            id: 1,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2CwdHpA7vRRjVq7FJz7KsUQM3vvE0vqcpNQ&s",
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
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2CwdHpA7vRRjVq7FJz7KsUQM3vvE0vqcpNQ&s",
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
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2CwdHpA7vRRjVq7FJz7KsUQM3vvE0vqcpNQ&s",
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
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2CwdHpA7vRRjVq7FJz7KsUQM3vvE0vqcpNQ&s",
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
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2CwdHpA7vRRjVq7FJz7KsUQM3vvE0vqcpNQ&s",
            status: "Продажа",
            rating: 4.9,
            title: "Пентхаус · 120 м² · 10/10 этаж",
            address: "Алматы, пр. Абая",
            complex: "жил. комплекс Sky City",
            price: "75 000 000",
            period: "₸",
        },
  ];
}
