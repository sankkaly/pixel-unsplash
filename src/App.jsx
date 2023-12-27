import Main from "./components/Main";
import Header from "./components/Header";
import QueryState from "./contex/queryState";
function App() {
  return (
    <>
      <QueryState>
        <Header />
        <Main />
      </QueryState>
    </>
  );
}

export default App;
