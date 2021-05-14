import React from "react";
import useLocalStorage from "./useLocalStorage";
import useUpdateLogger from "./useUpdateLogger";

function App() {
  const [name, setName] = useLocalStorage("name", "");
  useUpdateLogger(name);
  const input = {
    height: "100px",
    width: "80%",
    margin: "20px auto",
    color: "#111",
    padding: "10px",
    fontSize: "15px",
  };
  return (
    <input
      type="text"
      style={input}
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}

export default App;
