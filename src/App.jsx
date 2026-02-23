import { useState } from "react";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";

const App = () => {
  const [category, setCategory] = useState("technology");

  return (
    <>
      <Navbar category={category} setCategory={setCategory} />
      <NewsBoard category={category} />
    </>
  );
};

export default App;
