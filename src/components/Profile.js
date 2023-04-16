import { useState, useEffect } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(0);

  useEffect(() => {
    console.log("useEffect");
  }, []);
  return (
    <div>
      <h1>Profile Component</h1>
      <h2>Name:{props.name}</h2>
      <h2>Count:{count}</h2>
      <h2>Count:{count2}</h2>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
};

export default Profile;
