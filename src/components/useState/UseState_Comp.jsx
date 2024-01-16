import React, { useState } from "react";

export default function UseState_Comp() {
  // Khu vực viết code js

  const bills = [100, 200, 300, 400, 500];

  // Tối ưu hiệu năng cho ứng dụng
  const [count, setCount] = useState(() => {
    // Tính tổng hóa đơn
    const total = bills.reduce((prev, current) => {
      console.log("re-render");
      return prev + current;
    }, 0);

    // Để callback function gán lại giá trị cho state thì phải có từ khóa return
    return total;
  });

  // Hàm xử lý tăng
  const handleIncrease = () => {
    // Cập nhật lại state (hay giá trị của biến count)
    setCount((prev) => prev + 1); // 1
    setCount((prev) => prev + 1); // 2
    setCount((prev) => prev + 1); // 3
  };
  return (
    <div>
      Count: {count}
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}
