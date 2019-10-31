import React from "react";

import { MovieProvider } from "./MovieProvider";
import Header from "./Header";
import Movies from "./Movies";
import AddMovie from "./AddMovie";

function App() {
  return (
    <MovieProvider>
      <Header />
      <AddMovie />
      <Movies />
    </MovieProvider>
  );
}

export default App;
