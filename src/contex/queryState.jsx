import { useState } from "react";
import QueryContext from "./queryContext";

// created context to share the state of "query" and "orientation" between header and main component

const QueryState = (props) => {
  const [orientation, setOrientation] = useState("");
  const [query, setQuery] = useState("");

  return (
    <QueryContext.Provider
      value={{ query, setQuery, orientation, setOrientation }}
    >
      {props.children}
    </QueryContext.Provider>
  );
};

export default QueryState;
