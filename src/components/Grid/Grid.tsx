import * as React from "react";
import "./Grid.style.scss";

export interface GridProps {
  col: number
}

const Grid: React.FC<GridProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Grid;
