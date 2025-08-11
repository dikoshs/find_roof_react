import { BriefcaseBusiness, ChevronRight, ClipboardList, Hammer, Headset, History, LogOut, Dock, UserCog } from "lucide-react";
import { useNavigate } from "react-router-dom";
import avatar from '../../assets/images/avatar.png';
import ProfileImage from '../../assets/images/ProfileImage.png';
import Footbar from "../menu/Footbar";

// import BottomNavbar from "../menu/BottomNavbar";
// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "../../redux/store";
// import { useEffect } from "react";

const Profile = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col h-screen bg-white">
            <div className="flex items-center p-6">
                <img src={ProfileImage} className="w-20 h-20 rounded-[13px] me-8" />
                <span className="text-[#136E65] font-[700] text-[24px]">
                    {/* { user?.first_name } { user?.last_name } */}
                    Adam Adam
                </span>
            </div>
            <div className="w-full h-screen pb-16 px-4 overflow-y-auto">
                <div className="flex justify-between border-b border-gray-300 p-6">
                    <div onClick={() => navigate('/personal')} className="flex">
                        <UserCog className="text-[#136E65] me-2" />
                        <span className="text-gray-500 font-[700]">Личные данные</span>
                    </div>
                    <ChevronRight className="text-gray-300" />
                </div>
                <div className="flex justify-between border-b border-gray-300 p-6">
                    <div className="flex">
                        <Hammer className="text-[#136E65] me-2" />
                        <span className="text-gray-500 font-[700]">Мой ...</span>
                    </div>
                    <ChevronRight className="text-gray-300" />
                </div>
                <div className="flex justify-between border-b border-gray-300 p-6">
                    <div className="flex">
                        <History className="text-[#136E65] me-2" />
                        <span className="text-gray-500 font-[700]">История посещений</span>
                    </div>
                    <ChevronRight className="text-gray-300" />
                </div>
                <div className="flex justify-between border-b border-gray-300 p-6">
                    <div className="flex">
                        <BriefcaseBusiness className="text-[#136E65] me-2" />
                        <span className="text-gray-500 font-[700]">История платежей</span>
                    </div>
                    <ChevronRight className="text-gray-300" />
                </div>
                <div className="flex items-center justify-between border-b border-gray-300 p-6">
                    <div className="flex" onClick={() => navigate('/balance')}>
                        <Dock className="text-[#136E65] me-2" />
                        <span className="text-gray-500 font-[700]">Баланс</span>
                    </div>
                    <div className="flex items-center">
                        {/* <button type="button" onClick={() => navigate('/balance/top_up')} className="text-white text-[12px] me-4 bg-[#136E65] p-2 rounded-[10px]">Пополнить</button> */}
                        <ChevronRight className="text-gray-300" />
                    </div>
                </div>
                <div className="flex justify-between border-b border-gray-300 p-6">
                    <div className="flex">
                        <Headset className="text-[#136E65] me-2" />
                        <span className="text-gray-500 font-[700]">Обратная связь</span>
                    </div>
                    <ChevronRight className="text-gray-300" />
                </div>
                <div className="flex justify-between border-b border-gray-300 p-6">
                    <div onClick={() => navigate('/legal_docs')} className="flex">
                        <ClipboardList className="text-[#136E65] me-2" />
                        <span className="text-gray-500 font-[700]">Правовые документы</span>
                    </div>
                    <ChevronRight className="text-gray-300" />
                </div>
                <div className="flex justify-between border-b border-gray-300 p-6">
                    <div className="flex text-red-400">
                        <LogOut className="me-2" />
                        <span className="">Выход из аккаунта</span>
                    </div>
                </div>
            </div>

            <Footbar />
        </div>
    );
};

export default Profile;
