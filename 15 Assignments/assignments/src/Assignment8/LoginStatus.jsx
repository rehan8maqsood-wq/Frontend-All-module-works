import { useState } from "react";

function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <h1>Login Status</h1>

      {isLoggedIn ? (
        <h2>Logged In</h2>
      ) : (
        <h2>Logged Out</h2>
      )}

      <button onClick={handleLoginLogout}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default LoginStatus;