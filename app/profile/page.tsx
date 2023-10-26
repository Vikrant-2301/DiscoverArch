"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProfilePage() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/users/userProfile")
      .then((response) => {
        setUser(response.data.user);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen justify-center py-2">
      <h1>Profile</h1>
      <hr />
      {loading ? (
        <p>Loading...</p>
      ) : user ? (
        <div>
          <h1>Profile Page</h1>
          <p>User Name:</p>
        </div>
      ) : (
        <p>Error fetching user data.</p>
      )}
    </div>
  );
}
