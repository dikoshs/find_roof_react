import { useState } from "react";
import { useFilter } from "../../redux/hooks/useFilter";

export default function Filter({ onSearch }: { onSearch: () => void }) {
  const { filterRequest, setFilter, resetFilter } = useFilter();
  const [dateModal, setDateModal] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow p-4 max-w-3xl mx-auto mt-6">
      {/* Город */}
      <input
        type="text"
        placeholder="Город"
        value={filterRequest.city}
        onChange={(e) => setFilter("city", e.target.value)}
        className="w-full border rounded-lg p-2 mb-3"
      />

      {/* Цена */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        <input
          type="number"
          placeholder="Цена от"
          value={filterRequest.priceFrom}
          onChange={(e) => setFilter("priceFrom", e.target.value)}
          className="border rounded-lg p-2"
        />
        <input
          type="number"
          placeholder="Цена до"
          value={filterRequest.priceTo}
          onChange={(e) => setFilter("priceTo", e.target.value)}
          className="border rounded-lg p-2"
        />
      </div>

      {/* Комнаты */}
      <select
        value={filterRequest.rooms}
        onChange={(e) => setFilter("rooms", e.target.value)}
        className="w-full border rounded-lg p-2 mb-3"
      >
        <option value="">Количество комнат</option>
        <option value="1">1 комната</option>
        <option value="2">2 комнаты</option>
        <option value="3">3 комнаты</option>
        <option value="4">4+ комнат</option>
      </select>

      {/* Тип сделки */}
      <div className="flex gap-4 mb-3">
        <button
          className={`px-4 py-2 rounded-lg border ${
            filterRequest.dealType === "rent"
              ? "bg-blue-500 text-white"
              : "bg-gray-100"
          }`}
          onClick={() => setFilter("dealType", "rent")}
        >
          Аренда
        </button>
        <button
          className={`px-4 py-2 rounded-lg border ${
            filterRequest.dealType === "buy"
              ? "bg-blue-500 text-white"
              : "bg-gray-100"
          }`}
          onClick={() => setFilter("dealType", "buy")}
        >
          Покупка
        </button>
      </div>

      {/* Даты */}
      <button
        className="w-full border rounded-lg p-2 mb-3"
        onClick={() => setDateModal(true)}
      >
        {filterRequest.startDate && filterRequest.endDate
          ? `${filterRequest.startDate} → ${filterRequest.endDate}`
          : "Выбрать даты"}
      </button>

      {dateModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-4 rounded-xl w-80">
            <h3 className="text-lg mb-3 font-semibold">Выберите даты</h3>
            <input
              type="date"
              value={filterRequest.startDate}
              onChange={(e) => setFilter("startDate", e.target.value)}
              className="w-full border rounded-lg p-2 mb-2"
            />
            <input
              type="date"
              value={filterRequest.endDate}
              onChange={(e) => setFilter("endDate", e.target.value)}
              className="w-full border rounded-lg p-2 mb-3"
            />
            <div className="flex justify-between">
              <button
                className="px-4 py-2 rounded-lg border"
                onClick={() => setDateModal(false)}
              >
                Отмена
              </button>
              <button
                className="px-4 py-2 rounded-lg bg-blue-500 text-white"
                onClick={() => setDateModal(false)}
              >
                Готово
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Кнопки */}
      <div className="flex justify-between mt-4">
        <button
          className="px-4 py-2 rounded-lg border"
          onClick={resetFilter}
        >
          Сбросить
        </button>
        <button
          className="px-4 py-2 rounded-lg bg-blue-500 text-white"
          onClick={onSearch}
        >
          Поиск
        </button>
      </div>
    </div>
  );
}
