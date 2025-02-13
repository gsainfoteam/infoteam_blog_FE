"use client";

import { useState } from "react";
import CategroyButton from "../components/CategoryButton/CategoryButton";

export default function MainLayout({ children }) {
  const [filter, setFilter] = useState<boolean[]>([true, false, false]);
  const category = ["전체", "기술", "문화"];
  const handleClick = (idx: number) => {
    const newArr = Array(category.length).fill(false);
    newArr[idx] = true;
    setFilter(newArr);
  };
  return (
    <>
      {category.map((elm, index) => {
        return (
          <CategroyButton
            key={index}
            filter={filter}
            elm={elm}
            index={index}
            handleClick={handleClick}
          />
        );
      })}
      {children}
    </>
  );
}
