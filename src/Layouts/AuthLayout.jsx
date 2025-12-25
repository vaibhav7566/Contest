import React, { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

const AuthLayout = () => {
  const [toggle, settoggle] = useState(false);

  return (
    <div>
      {toggle ? (
        <Login settoggle={settoggle} />
      ) : (
        <Register settoggle={settoggle} />
      )}
    </div>
  );
};

export default AuthLayout;
