import React from 'react';
import "./Filters.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/reducers"
import { filterShape, filterColor } from "../../redux/actions/home.actions";

import { colors } from "../../constants/colors";
import { colorFilterOptions, shapeFilterOptions } from "../../constants/filters";

export const ColorFilters = () => {
  const dispatch = useDispatch();
  const { colorFilters: selectedFilters } = useSelector((state: RootState) => state.home )
  const selectFilter = (filter: string) => {
    dispatch(filterColor(filter));
  }

  const [filterOptions, setFilterOptions] = React.useState<string[]>([]);
  React.useEffect(() => {
    setFilterOptions(colorFilterOptions);
  },[])

  const colorsMap: { [key: string]: string } = colors;
  return (
    <div>
      <p>Colors</p>
      <div className="filters-container">
        {filterOptions.map((filter: string) => (
          <div
            className={`color-filter${selectedFilters.includes(filter)?' active':''}`}
            style={{ backgroundColor: colorsMap[filter] }}
            key={filter}
            onClick={() => selectFilter(filter)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export const ShapeFilters = () => {
  const dispatch = useDispatch();
  const { shapeFilters: selectedFilters } = useSelector((state: RootState) => state.home )
  const selectFilter = (filter: string) => {
    dispatch(filterShape(filter));
  }

  const [filterOptions, setFilterOptions] = React.useState<string[]>([]);
  React.useEffect(() => {
    setFilterOptions(shapeFilterOptions);
  },[])

  return (
    <div>
      <p>Shapes</p>
      <div className="filters-container">
        {filterOptions.map((filter: string) => (
          <div
            className={`shape-filter${selectedFilters.includes(filter)?' active':''}`}
            key={filter}
            onClick={() => selectFilter(filter)}
          >{filter}</div>
        ))}
      </div>
    </div>
  )
}

