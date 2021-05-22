import React from "react";
import Shape from "../shape/Shape";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers"
import { shapeFilterOptions, colorFilterOptions} from "../../constants/filters";

import './Shapes.scss';
import { ShapeInterface } from "../../types";

const Shapes = () => {
  const state = useSelector((state: RootState) => state );
  const { home } = state;
  const { data: shapes, shapeFilters, colorFilters } = home;
  
  const [title, setTitle] = React.useState("");

  React.useEffect(() => {
    let sFLength = shapeFilters.length,
        cFLength = colorFilters.length,
        sFOLength = shapeFilterOptions.length,
        cFOLength = colorFilterOptions.length;
  
    let titleText = "";
    if(sFLength === sFOLength && cFLength === cFOLength) {
      titleText = "All items"
    }
    else if(sFLength === 1 && cFLength === 1) {
      titleText = `${colorFilters[0].charAt(0).toUpperCase() + colorFilters[0].slice(1)} ${shapeFilters[0].toLowerCase()} item`
    }
    else if(sFLength === sFOLength && cFLength === 1) {
      titleText = `All ${colorFilters[0].toLowerCase()} items`
    }
    else if(sFLength === 1 && cFLength === cFOLength) {
      titleText = `All ${shapeFilters[0].toLowerCase()} items`
    }
    else if(sFLength < sFOLength && cFLength === 1) {
      titleText = `Multiple ${colorFilters[0].toLowerCase()} items`
    }
    else if(sFLength === 1 && cFLength < cFOLength) {
      titleText = `Multiple ${shapeFilters[0].toLowerCase()} items`
    }
    else{
      titleText = "Multiple items"
    }

    setTitle(titleText);
 
  },[colorFilters, shapeFilters, colorFilters.length, shapeFilters.length])
  return (
    <>
    <h4 className="title">{title}:</h4>
    <div className="shapes-container">
      {shapes.map((shape: ShapeInterface) => (
        <Shape shape={shape} key={`shape-${shape.id}`}/>
      ))}
    </div>
    </>
  );
};

export default Shapes;
