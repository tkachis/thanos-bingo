import React, { memo } from "react";

import Cell from "../Cell";

const Row = ({ elements, onSelectCell }) => {
  return (
    <tr>
      {elements.map((data) => (
        <Cell key={data.text} onSelect={onSelectCell} data={data} />
      ))}
    </tr>
  );
};

export default memo(Row);
