import React from "react";
const RenderingLists = () => {
  const names = [
    {
      name: "Nawaz",
      id: 1,
    },
    {
      name: "Shaik",
      id: 2,
    },
  ];

  return (
    <div>
      <ul>
        {names.map((val, key) => {
          return (
            <li key={key}>
              <div>{val.name}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RenderingLists;
