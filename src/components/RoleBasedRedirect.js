// RoleBasedRedirect.js
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RoleBasedRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("role");
    const token = localStorage.getItem("token");
    if (role === "Admin" && token) {
      navigate("/admin");
    } else if (role === "Client") {
      navigate("/client");
    } else {
      // Redirect to a default route or handle other roles here
      navigate("/client"); // Replace '/default' with your desired default route
    }
  }, [navigate]);

  return null; // This component does not render anything
};

export default RoleBasedRedirect;
