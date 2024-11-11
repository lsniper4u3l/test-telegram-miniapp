// pages/index.js
import { useEffect, useState } from "react";

export default function Home() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram.WebApp.initDataUnsafe) {
      const user = window.Telegram.WebApp.initDataUnsafe.user;
      if (user) {
        setUserData(user);
      }
    }
  }, []);

  return (
    <main className="p-4">
      {userData ? (
        <div>
          <h1 className="text-2xl font-bold mb-4">User Data</h1>
          <ul>
            <li>ID: {userData.id}</li>
            <li>First Name: {userData.first_name}</li>
            <li>Last Name: {userData.last_name}</li>
            <li>Username: {userData.username}</li>
            <li>Language Code: {userData.language_code}</li>
            <li>Is Premium: {userData.is_premium ? 'Yes' : 'No'}</li>
          </ul>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </main>
  );
}
