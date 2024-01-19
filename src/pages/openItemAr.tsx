import Lottie from "lottie-react";
import { useEffect } from "react";
import addingAppo from "../assets/lottieAnimations/addingAppo.json";
import { useNavigate } from "react-router-dom";

const OpenARPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    console.log("Effect triggered");
    // rest of the code...

    // Logic to open AR Quick Look automatically
    const openARViewer = () => {
      let usdzPath = "google.com";
      const userAgent = navigator.userAgent || navigator.vendor;

      if (/Windows|Linux|Macintosh|Mac OS/i.test(userAgent)) {
        console.log("Web/Desktop");
        navigate("/");
      } else if (/android/i.test(userAgent)) {
        console.log("android");
      } else if (/iPad|iPhone|iPod/i.test(userAgent)) {
        console.log("ios");
      } else {
        console.log("IDK wtf is that");
      }

      console.log(usdzPath);

      // Replace 'path/to/your/model.usdz' with the actual path to your USDZ file

      // Open USDZ file in AR Quick Look

      //window.location.href = `https:/${usdzPath}`;
    };

    // Simulate a delay for loading purposes

    openARViewer();
  }, []);

  return (
    <>
      <Lottie
        autoplay
        loop={true}
        style={{ height: "450", width: "450px", alignSelf: "center", marginTop: "5%" }}
        animationData={addingAppo}></Lottie>
      <h1 className="text-white text-l text-2xl self-center">Opening...</h1>
    </>
  );
};

export default OpenARPage;
