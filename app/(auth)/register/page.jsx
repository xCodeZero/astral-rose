import React from "react";
import "../../../styles/auth.scss";

const page = () => {
  return (
    <div className="auth">
      <div className="auth_header">
        <h1>Register</h1>
      </div>

      <div className="auth_content container_auth">
        <div className="auth_content-search">
          <div>
            <input
              required
              type="text"
              value="test"
              placeholder="Search articles"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
