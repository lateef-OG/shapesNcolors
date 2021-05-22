import "./Filters.scss";

import { colors } from "../../constants/colors";

export const ColorFilters = ({ filters }: { filters: string[] }) => {
  const colorsMap: { [key: string]: string } = colors;
  return (
    <div>
      <p>Colors</p>
      <div className="filters-container">
        {filters.map((filter: string) => (
          <div
            className="color-filter"
            style={{ backgroundColor: colorsMap[filter] }}
            key={filter}
          ></div>
        ))}
      </div>
    </div>
  );
};

export const ShapeFilters = ({ filters }: { filters: string[] }) => {
  return (
    <div>
      <p>Shapes</p>
      <div className="filters-container">
        {filters.map((filter: string) => (
          <div
            className="shape-filter"
            key={filter}
          >{filter}</div>
        ))}
      </div>
    </div>
  )
}

