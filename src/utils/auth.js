import {jwtDecode} from "jwt-decode"; // Ensure the correct import

export const isAuthenticated = () => {
  const token = localStorage.getItem("token");

  if (!token) return false;

  try {
    // Decode the token to get its payload
    const decodedToken = jwtDecode(token);

    // Get the current time in seconds
    const currentTime = Date.now() / 1000;

    // Check if the token has expired (JWT typically contains an 'exp' field for expiration time)
    if (decodedToken.exp && decodedToken.exp < currentTime) {
      debugger;
      return false; // Token is expired
    }

    return true; // Token is valid and not expired
  } catch (error) {
    // If there's any error during decoding, assume the token is invalid
    return false;
  }
};
