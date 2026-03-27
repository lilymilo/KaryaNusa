import { useState, useEffect } from 'react';
import API from "../services/api";
import { useNavigate } from 'react-router-dom';

export default function Marketplace() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await API.get("/Marketplace");
      setItems(res.data);
    };

    fetchItems();
  }, []);

  return (
    <div>
      <h1>Marketplace</h1>

      {items.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>

          <button onClick={() => navigate(`/marketplace/${item.id}`)}>
            Lihat Detail
          </button>
        </div>
      ))}
      </div>
  );
}