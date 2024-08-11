import { ReactNode } from "react";
import logo from "./../../assets/marvel-logo.svg";
import "./Menu.scss";
import Heart from "../heart/Heart";
import { useFav } from "../../context/FavContext";

export const MenuComponent: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { favs } = useFav();
  return (
    <div className="Menu">
      <div className="Menu-wrapper">
        <img className="Logo" src={logo} alt={"Marvel"} height={52} />
        <div className="Likes-container">
          <Heart
            likes={favs.length}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
      </div>
      {children}
    </div>
  );
};
