import React, { useContext } from "react";
import { userContext } from "../App";

const GrandChild = () => {
  const { user, setUser } = useContext(userContext);

  console.log(user);
  console.log(setUser);
  return (
    <div>
      <button onClick={() => setUser("Updated")}>Update</button>
    </div>
  );
};

export default GrandChild;
