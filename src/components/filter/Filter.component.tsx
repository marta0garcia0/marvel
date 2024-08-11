import { useEffect } from "react";
import search from "./../../assets/search.svg";
import "./Filter.scss";

function FilterComponent(props: { onChange: (text: string) => void }) {
  useEffect(() => {}, []);
  return (
    <div className="Filter">
      <img src={search} alt="search" width={14} />
      <input
        placeholder="SEARCH A CHARACTER..."
        onChange={(e) => {
          props.onChange(e.target.value);
        }}
      />
    </div>
  );
}

export default FilterComponent;
