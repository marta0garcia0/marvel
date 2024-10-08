import { useEffect, useState } from "react";
import heartFull from "./../../assets/heart-full.svg";
import heartEmpty from "./../../assets/heart-empty.svg";

import "./Card.scss";
import { Character } from "../../api/models";
import { useFav } from "../../context/FavContext";

export const Card = ({
  key,
  character,
  onClick,
}: {
  key: number;
  character: Character;
  onClick: (id: string) => void;
}) => {
  const { favs, updateFavs } = useFav();
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(!!favs.find((id) => id == character.id));
  }, [favs]);

  const onLike = () => {
    updateFavs({ id: character.id, status: !liked });
    setLiked(!!favs.find((id) => id == character.id));
  };

  return (
    <div className="Card" key={key + ""}>
      <img
        className="Card-cover"
        onClick={() => onClick(character.id + "")}
        src={character.thumbnail.path + "." + character.thumbnail.extension}
      />
      <div className="Card-footer">
        <div className="Card-footer__left">
          <p>{character.name.toUpperCase()}</p>
        </div>
        <div className="Card-footer__right">
          <img
            onClick={onLike}
            className="Card-heart"
            src={liked ? heartFull : heartEmpty}
            alt={"like"}
          />
        </div>
      </div>
    </div>
  );
};
