export interface ShapeInterface {
  id: number;
  name: string;
  color: string;
}

export interface InitialState {
  data: ShapeInterface[];
  shapeFilters: string[];
  colorFilters: string[];
}

export interface Action {
  payload: string;
  type: string;
}
