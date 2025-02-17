import React, { useState, useEffect } from "react";
import axios from "axios";

type User = {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
};

const DataFetcher: React.FC = () => {
  const [userId, setUserId] = useState<number>(1);
  const [data, setData] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`);
        setData(response.data);
      } catch (err) {
        setError("Помилка завантаження даних");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]); 

  const handleNext = () => {
    setUserId((prev) => (prev < 10 ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setUserId((prev) => (prev > 1 ? prev - 1 : prev));
  };

  if (loading) return <p>Завантаження даних...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Інформація про користувача</h2>
      {data && (
        <>
          <p><strong>Ім'я:</strong> {data.name}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Місто:</strong> {data.address.city}</p>
        </>
      )}
      <div>
        <button onClick={handlePrev} disabled={userId === 1}>Назад</button>
        <button onClick={handleNext}>Вперед</button>
      </div>
    </div>
  );
};

export default DataFetcher;
