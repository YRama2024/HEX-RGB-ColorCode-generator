import { useState } from "react";

function App() {
  const [color, setColor] = useState("");

  function changeBackGround(color) {
    setColor(color);
    document.body.style.backgroundColor = color;
  }

  function createRgbColor() {
    const getRandomRgbColor = function () {
      return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`;
    };
    changeBackGround(getRandomRgbColor());
  }

  function createHexColor() {
    const hexColor =
      "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
    changeBackGround(hexColor);
  }

  return (
    <div> <p  className="flex justify-center text-4xl my-4 p-1 "> Generate random HEX and RGB color codes</p>
      <div className="my-9">
        <div className="flex justify-center">
          <button
            className="border p-2 text-white bg-black rounded-xl"
            onClick={() => createHexColor()}
          >
            Create HEX color
          </button>
          <button
            className="ml-9 border p-2 text-white bg-black rounded-xl"
            onClick={() => createRgbColor()}
          >
            Create RGB color
          </button>
        </div>
      </div>
      <div className=" flex justify-center border p-5 text-4xl max-w-lg mx-auto bg-slate-900 text-white">
        color code: {color}
      </div>
    </div>
  );
}

export default App;
