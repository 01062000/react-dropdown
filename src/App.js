import Dropdown from "./Dropdown";
import "./styles.css";

export default function App() {
  const dropdownOptions = ["Yes", "Probably not"];

  return (
    <>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>

      <Dropdown options={dropdownOptions} />
    </>
  );
}
