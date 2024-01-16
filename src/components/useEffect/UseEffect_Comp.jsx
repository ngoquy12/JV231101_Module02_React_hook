import React, { useEffect, useState } from "react";

export default function UseEffect_Comp() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  console.log("inputValue: ", inputValue);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  // Cách 1:
  //   useEffect(() => {
  //     // Khi nhập dữ liệu từ input, thì giá trị của input sẽ hiển thị trên title
  //     console.log("Component render");
  //     document.title = inputValue;
  //   });

  // Cách 2:

  //   useEffect(() => {
  //     console.log("useEffect cách 2 được gọi");
  //   }, []);

  // Cách 3:
  useEffect(() => {
    console.log("useEffect cách 3 được gọi");
  }, [count]); // Khi inputValue có bất kì sự thay đổi nào thì callback mới được gọi

  return (
    <div>
      <div>Count: {count} </div>
      <button
        style={{ backgroundColor: "red", color: "#fff" }}
        onClick={handleIncrease}
      >
        Increase
      </button>
      <input
        value={inputValue}
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => setInputValue("Nguyễn Văn Nam")}>
        Change name
      </button>
    </div>
  );
}
