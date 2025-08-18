// src/components/Balance.tsx
import { useState } from "react";
import { ChevronRight, Wallet, Info, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Footbar from "../menu/Footbar";

const tabs = [
  { key: "actions", label: "Действие", icon: <Wallet size={18} /> },
  { key: "info", label: "Инфо", icon: <Info size={18} /> },
  { key: "statement", label: "Выписка", icon: <FileText size={18} /> },
];

const actions = ["История выписок", "Перевести", "Пополнить", "Закрыть"];

export default function Balance() {
  const [activeTab, setActiveTab] = useState("actions");

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="h-1/4 bg-gradient-to-r from-[#006258] to-teal-600 text-white p-6 text-center flex justify-center flex-col">
        <p className="text-sm opacity-80">Ваш баланс</p>
        <h1 className="text-5xl mt-1">25 300 ₸</h1>
      </div>

      <div className="flex shadow-sm">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 py-3 flex items-center justify-center gap-2 text-sm font-medium transition ${
              activeTab === tab.key
                ? "border-b-2 border-[#006258] text-[#006258]"
                : "text-gray-500"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      <div className="">
        <AnimatePresence mode="wait">
          {activeTab === "actions" && (
            <motion.div
              key="actions"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="">
                {actions.map((action, i) => (
                  <button
                    key={i}
                    className="w-full border-t backdrop-blur border-gray-200 flex items-center justify-between p-4"
                  >
                    {action}
                    <ChevronRight size={18} className="text-gray-400" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}
          {activeTab === "info" && (
            <motion.div
              key="info"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="">
                {actions.map((action, i) => (
                  <button
                    key={i}
                    className="w-full border-t backdrop-blur border-gray-200 flex items-center justify-between p-4"
                  >
                    {action}
                    <ChevronRight size={18} className="text-gray-400" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}
          {activeTab === "statement" && (
            <motion.div
              key="statement"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="">
                {actions.map((action, i) => (
                  <button
                    key={i}
                    className="w-full border-t backdrop-blur border-gray-200 flex items-center justify-between p-4"
                  >
                    {action}
                    <ChevronRight size={18} className="text-gray-400" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Footbar />
    </div>
  );
}
