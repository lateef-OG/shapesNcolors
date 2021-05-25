export interface ShapeInterface {
  id: number;
  name: string;
  color: string;
}

export interface HomeInitialState {
  data: ShapeInterface[];
  shapeFilters: string[];
  colorFilters: string[];
}

export interface AuthInitialState {
  token: string;
}

export interface Action {
  payload: string;
  type: string;
}
