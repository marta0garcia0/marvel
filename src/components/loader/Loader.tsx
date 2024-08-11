import { useEffect } from "react";
import loader from "./../../assets/spinner.svg";
import "./Loader.scss";
import { useNavigate } from "react-router-dom";

function Loader(props: { url: string }) {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(props.url);
    }, 300);
  }, []);
  return (
    <div className="Loader">
      <img src={loader} alt={"Loading"} width={50} height={50} />
    </div>
  );
}

export default Loader;
