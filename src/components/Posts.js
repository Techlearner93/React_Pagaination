import React from "react";

export const Posts = ({ data, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="list-group mb-4">
      {data.currentData().map((each) => (
        <li key={each.id} className="list-group-item">
          {each.title}
        </li>
      ))}
    </ul>
  );
};
