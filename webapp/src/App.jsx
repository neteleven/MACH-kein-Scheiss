import { WriteData } from "./components/WriteData";
import { ReadData } from "./components/ReadData";

const AVAILABLE_FIELDS = ["name", "price"];
const BASE_URL = "https://d1hg44dt3lynuo.cloudfront.net/api/lunch";

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
