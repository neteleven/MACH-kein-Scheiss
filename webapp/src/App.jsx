import { WriteData } from "./components/WriteData";
import { ReadData } from "./components/ReadData";

const AVAILABLE_FIELDS = ["age"];
const BASE_URL = "http://localhost:8080/users";

function App() {
  return (
    <div>
      <ReadData availableFields={AVAILABLE_FIELDS} baseUrl={BASE_URL} />
      <hr />
      <WriteData availableFields={AVAILABLE_FIELDS} baseUrl={BASE_URL} />
    </div>
  );
}

export default App;
