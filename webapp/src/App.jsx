import { WriteData } from "./components/WriteData";
import { ReadData } from "./components/ReadData";

const AVAILABLE_FIELDS = [""];
const BASE_URL = "https://d1vjn6dipu3c0u.cloudfront.net/";

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
