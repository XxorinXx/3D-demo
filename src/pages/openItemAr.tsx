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
      let usdzPath = "https://google.com";
      const userAgent = navigator.userAgent;
      console.log("userAgent", userAgent);

      if (userAgent.includes("Android")) {
        console.log("android");

        usdzPath =
          "https://firebasestorage.googleapis.com/v0/b/peerpay-23dff.appspot.com/o/chair.glb?alt=media&token=2439c002-364c-4cb8-a0ac-70728662f646";
      } else if (userAgent.includes("iPhone") || userAgent.includes("iPad") || userAgent.includes("iPod")) {
        console.log("ios");
        usdzPath =
          "https://firebasestorage.googleapis.com/v0/b/peerpay-23dff.appspot.com/o/chair.usdz?alt=media&token=e70f0709-716c-4701-8d06-79dc043705b3";
      } else if (userAgent.includes("Windows") || userAgent.includes("Macintosh") || userAgent.includes("Mac")) {
        console.log("Web/Desktop");
        navigate("/");
      } else {
        console.log("IDK wtf is that");
      }
      console.log(usdzPath);

      // Replace 'path/to/your/model.usdz' with the actual path to your USDZ file

      // Open USDZ file in AR Quick Look

      window.location.href = usdzPath;
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
