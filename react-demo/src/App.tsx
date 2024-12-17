import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { useState } from "react";

function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const [alertVisible, setAlertVisible] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleButtonClick = (text: string) => {
    setAlertVisible(true);
  };

  return (
    <div>
      {alertVisible && (
        <Alert onAlertExit={() => setAlertVisible(false)}>
          You clicked the button!
        </Alert>
      )}
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup>
      <Button onButtonClick={handleButtonClick}>Click me!</Button>
    </div>
  );
}

export default App;
