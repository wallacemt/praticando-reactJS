import { useState } from "react";
import { Modal } from "@mui/material";
import { FaTimes, FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

export const GaleriaDeImagens = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const images  = {
        img1: "https://images5.alphacoders.com/137/thumb-1920-1372790.png",
        img2: "https://images2.alphacoders.com/564/thumb-1920-564835.jpg",
        img3: "https://images6.alphacoders.com/137/thumb-1920-1377233.png",
        img4: "https://images3.alphacoders.com/136/thumb-1920-1369831.png",
        img5: "https://images8.alphacoders.com/136/thumb-1920-1363709.png",
        img6: "https://images4.alphacoders.com/206/thumb-1920-20658.jpg",
        img7: "https://images.alphacoders.com/134/thumb-1920-1345265.png",
        img8: "https://images6.alphacoders.com/134/thumb-1920-1344091.png",
        img9: "https://images4.alphacoders.com/136/thumb-1920-1369866.png", 
        img10: "https://images.alphacoders.com/134/thumb-1920-1344826.png"
    };
    const handleNext = () => {
        if (currentIndex < Object.keys(images).length - 1) {
            setCurrentIndex(currentIndex + 1);
            setSelectedImage(images[Object.keys(images)[currentIndex + 1]]);
        }
    }
    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setSelectedImage(images[Object.keys(images)[currentIndex - 1]]);
        }
    }
    return (
        <div className="flex flex-col items-center">
            <ul className="grid grid-cols-3 gap-5">
                {Object.keys(images).map((key) => (
                    <li key={key} className="cursor-pointer">
                        <img
                            src={images[key]}
                            alt={key}
                            className="rounded-lg w-full h-full object-cover transition duration-300 hover:scale-105"
                            onClick={() => {
                                setSelectedImage(images[key]);
                                setCurrentIndex(Object.keys(images).indexOf(key));
                            }}
                        />
                    </li>
                ))}
            </ul>
            {selectedImage && (
                <Modal open={!!selectedImage} onClose={() => setSelectedImage(null)} className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="flex items-center justify-center w-full h-full">
                        <div className="bg-black bg-opacity-50 fixed inset-0 z-40" />
                        <div className="relative z-50 w-11/12 md:w-3/4 lg:w-1/2 max-h-full">
                            <img src={selectedImage} alt="" className="rounded-lg w-full h-full object-cover" />
                            <FaArrowAltCircleLeft className="absolute top-1/2  left-0 right-1/2 text-white text-3xl cursor-pointer" size={40} onClick={handlePrevious}/>
                            <FaArrowAltCircleRight className="absolute top-1/2 right-0 text-white text-3xl cursor-pointer" size={40} onClick={handleNext}/>
                            <FaTimes className="absolute top-2 right-2 text-white text-3xl cursor-pointer" onClick={() => setSelectedImage(null)} />
                        </div>
                    </div>
                </Modal>
            )}          
        </div>
    )
}

