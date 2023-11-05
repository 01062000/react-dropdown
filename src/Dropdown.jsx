import react, { useEffect, useState } from "react";

const Dropdown = ({ options }) => {
  const [selectedValue, setSelectedValue] = useState(options[0]);
  //console.log(options);
  function handleChange(e) {
    setSelectedValue(e.target.value);
  }
  useEffect(() => {
    console.log(selectedValue);
  }, [selectedValue]);
  return (
    <>
      <select onChange={handleChange} value={selectedValue}>
        {options.map((values, index) => {
          return <option key={index}>{values}</option>;
        })}
      </select>
    </>
  );
};

export default Dropdown;
