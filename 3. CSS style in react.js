import React from "react";

function InlineStyleExample() {
  const headingStyle = {
    color: "white",
    backgroundColor: "#007BFF",
    padding: "10px",
    borderRadius: "5px",
    textAlign: "center",
  };

  return (
    <div>
      <h2 style={headingStyle}>Hello, Inline Styled Component!</h2>
      <p style={{ color: "gray", textAlign: "center" }}>
        This is an example of inline CSS styling in React.
      </p>
    </div>
  );
}

export default InlineStyleExample;
