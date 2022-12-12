import React from "react";

import { GameLayout, Board, RefreshButton } from "./components";
import { useDictionary } from "./hooks";

function App() {
  const { dictionary, onRefresh } = useDictionary();

  return (
    <GameLayout>
      <Board dictionary={dictionary} />
      <RefreshButton onClick={onRefresh} />
    </GameLayout>
  );
}

export default App;
