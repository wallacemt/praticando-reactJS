import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const TabSystem = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);
    
    return (
        <div className="flex flex-col h-screen bg-gray-900 text-white">
            <div className="flex justify-center items-center">
                <Swiper
                    direction="horizontal"
                    slidesPerView={4}
                    spaceBetween={5}
                    navigation={true}
                    className="w-full bg-gray-700 rounded-b-lg p-2 shadow-md overflow-x-auto"
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 25,
                        },
                    }}
                >
                    {tabs.map((tab, index) => (

                        <SwiperSlide
                            key={index}
                            className="flex justify-center items-center flex-shrink-0 cursor-pointer px-24"
                        >
                            <button
                                onClick={() => setActiveTab(index)}
                                className={`px-4 py-4 rounded-t-lg transition duration-300 ease-in-out whitespace-nowrap font-semibold ${
                                    activeTab === index
                                        ? "bg-gray-900 text-blue-400 shadow-lg"
                                        : "bg-gray-600 hover:bg-gray-500"
                                }`}
                            >
                                {tab.title}
                            </button>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center p-4">
                <div className="w-11/12 md:w-3/4 lg:w-1/2 mb-4 text-2xl font-bold text-center text-green-400">
                    {tabs[activeTab]?.title}
                </div>
                <div className={`w-11/12 md:w-3/4 lg:w-1/2 h-3/4 ${tabs[activeTab]?.component ? 'bg-blue-900' : 'bg-gray-800'} rounded-lg shadow-lg overflow-auto p-4`}>
                    {tabs[activeTab]?.component}
                </div>
            </div>
        </div>
    );
};

export default TabSystem;

