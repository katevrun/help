import {useState} from 'react';

 function Fourzd() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // 👇️ toggle
    setIsActive(current => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };

  return (
    <div>
      <button
        style={{
          backgroundColor: isActive ? 'green' : '',
          color: isActive ? 'white' : '',
        }}
        onClick={handleClick}
      >
        neClick
      </button>
    </div>
  );
  
}
export default Fourzd;