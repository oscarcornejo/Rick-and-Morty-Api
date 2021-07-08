import Lottie from "react-lottie";
import animationData from "./mortyDance.json";

// scss
import "./Loading.scss";

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="loading">
      <Lottie options={defaultOptions} height={350} width={350} />
    </div>
  );
};

export default Loading;
