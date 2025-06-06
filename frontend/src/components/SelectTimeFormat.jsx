import { useContext } from "react";
import { gamecontext } from "../contexts/gamecontext";

function SelectTimeFormat({ onSelect }) {
    const formats = [
      { value: 300, label: '5+0' },
      { value: 600, label: '10+0' },
      { value: 900, label: '15+0' },
    ];
    const {setWhiteTime,setBlackTime} = useContext(gamecontext);
  
    return (
      <select
        onChange={(e) => {onSelect(Number(e.target.value));setWhiteTime(e.target.value);setBlackTime(e.target.value)}}
        className="px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none"
      >
        {formats.map((format) => (
          <option key={format.value} value={format.value}>
            {format.label}
          </option>
        ))}
      </select>
    );
  }
  
  export default SelectTimeFormat;