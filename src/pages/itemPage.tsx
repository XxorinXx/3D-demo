import { faUnity } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import QRCode from "qrcode.react";
import chair from "../assets/images/chair.jpg";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const ItemPage = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [qrData, setQrData] = useState("");

  useEffect(() => {
    const currentDomain = window.location.hostname;
    setQrData(`https://${currentDomain}/openAR`);
  }, []);
  const toggleDialog = () => {
    setIsOpen(!isOpen);
  };

  const buttonOnClick = () => {
    const userAgent = navigator.userAgent || navigator.vendor;

    if (/Windows|Linux|Macintosh|Mac OS/i.test(userAgent)) {
      console.log("Web/Desktop");
      toggleDialog();
    } else if (/android/i.test(userAgent)) {
      console.log("android");
      navigate("/openAR");
    } else if (/iPad|iPhone|iPod/i.test(userAgent)) {
      console.log("ios");
      navigate("/openAR");
    } else {
      console.log("IDK wtf is that");
    }
  };
  return (
    <>
      <img src={chair} width={350} className="self-center mt-24" />
      <button onClick={buttonOnClick} className="w-72 h-20 bg-primary  rounded-xl self-center mt-8 flex-row">
        <h1 className="text-white text-xl">Show in my home</h1>
        <FontAwesomeIcon icon={faUnity} size="xl" color="white" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-boxes p-5 rounded-xl shadow-lg">
            <FontAwesomeIcon icon={faClose} size="lg" color="white" className="cursor-pointer" onClick={toggleDialog} />
            <div className="mt-4 mr-5">
              <QRCode value={qrData} size={150} />
            </div>

            <p className="mt-7">Scan to open in your home</p>
            <p className=" text-center">(ios 12+ only)</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemPage;
