import React, { useState, useEffect } from "react";

const A = () => {
  useEffect(() => {
    console.log("constructor triggered - a ");
    return () => {
      console.log("destructor triggered - a ");
    };
  }, []);
  return <B />;
};

const B = () => {
  useEffect(() => {
    console.log("constructor triggered - b ");
    return () => {
      console.log("destructor triggered - b ");
    };
  }, []);
  return <C />;
};

const C = () => {
  useEffect(() => {
    console.log("constructor triggered - c ");
    return () => {
      console.log("destructor triggered - c ");
    };
  }, []);

  return <div>I am C</div>;
};

const F = () => {
  const [showMe, setShowMe] = useState(true);
  return (
    <div>
      <div>{showMe && <A />}</div>
      <button
        onClick={() => {
          setShowMe((prev) => !prev);
        }}
      >
        Click me bro
      </button>
    </div>
  );
};

export default F;
