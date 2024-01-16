import React, { useState } from "react";

export default function TodoList() {
  const [inputValue, setInputValue] = useState("");

  const [jobs, setJobs] = useState(() => {
    const listJob = JSON.parse(localStorage.getItem("jobs")) || [];

    return listJob;
  });

  // Hàm gửi dữ liệu từ form
  const handleSubmit = (e) => {
    // Ngăn chặn sự kiện load lại trang
    e.preventDefault();

    // Tạo đối tượng job
    const job = {
      id: Math.ceil(Math.random() * 10000000),
      name: inputValue,
      status: false,
    };

    // Push công việc vào trong mảng
    setJobs((prevJobs) => {
      const newJobs = [...prevJobs, job];
      // Lưu lại dữ liệu lên local
      localStorage.setItem("jobs", JSON.stringify(newJobs));
      return newJobs;
    });

    // Reset lại giá trị bên trong input
    setInputValue("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Thêm</button>
      </form>
    </div>
  );
}
