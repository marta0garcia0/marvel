import { useState, useEffect } from "react";
import { getCharacters } from "../../api/api";
import { Character, CharacterResponse } from "../../api/models";
import { useAuth } from "../../context/AuthContext";
import { Card } from "../../components/card/Card";
import { useNavigate } from "react-router-dom";
import "./CharacterList.scss";
import FilterComponent from "../../components/filter/Filter.component";
import loader from "./../../assets/spinner.svg";

function CharacterList() {
  const [charactersInfo, setCharactersInfo] = useState<CharacterResponse>();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [filter, setFilter] = useState<string>();
  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { ts, hash } = useAuth();

  useEffect(() => {
    setLoading(true);
    if (ts && hash)
      getCharacters(ts, hash, filter, page)
        .then((data: CharacterResponse) => {
          setCharactersInfo(data);
          setCharacters(characters.concat(data.results));
        })
        .finally(() => {
          setLoading(false);
        });
  }, [ts, hash]);

  const loadMore = () => {
    setPage(page + 1)
  };

  useEffect(() => {
    setLoading(true);
    if (ts && hash)
      getCharacters(ts, hash, filter, page*20)
        .then((data: CharacterResponse) => {
          setCharactersInfo(data);
          setCharacters(characters.concat(data.results));
        })
        .finally(() => {
          setLoading(false);
        });
  }, [filter, page]);

  return (
    <div className="CharacterList">
      <FilterComponent
        onChange={(text) => {
          setFilter(text);
          setPage(0);
          setCharacters([])
        }}
      />
      {charactersInfo && charactersInfo ? (
        <>
          <div className="CharacterList-cards">
            {characters.map((character) => {
              return (
                <Card
                  key={character.id}
                  character={character}
                  onClick={(id: string) => navigate(`${id}`)}
                />
              );
            })}
          </div>
          {!loading &&
          charactersInfo &&
          charactersInfo.count < charactersInfo.total ? (
            <div className="CharacterList-more">
              <button onClick={loadMore} className="CharacterList-more__button">
                more
              </button>
            </div>
          ) : null}
 
        </>
      ) : null}
          {loading ? (
            <div className="CharacterList-loading">
            <img src={loader} alt={"Loading"} width={50} height={50} />
            </div>
          ) : null}
    </div>
  );
}

export default CharacterList;
