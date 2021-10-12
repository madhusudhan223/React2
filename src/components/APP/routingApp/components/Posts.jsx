import React from "react";

const Posts = ({ match }) => {
  return (
    <div className="Posts">
      Year:{match.year} Month:{match.month}
    </div>
  );
};

export default Posts;
