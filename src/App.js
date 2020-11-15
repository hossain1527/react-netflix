import "./App.css";
import infoDatabase from "./infoDatabase";

import Card from "./Card";

function App() {
  const infoComponents = infoDatabase.map((info) => (
    <Card
      key={info.key}
      imgSrc={info.imgSrc}
      title={info.title}
      name={info.name}
      link={info.link}
    />
  ));

  return (
    <>
      <h1 className="main-heading">
        List of most popular Netflix series in 2020
      </h1>
      {infoComponents}
    </>
  );
}

export default App;
