import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import API from "../services/api";

export default function DetailItem() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const res = await API.get(`/marketplace/${id}`);
      setItem(res.data);
    };

    fetchItem();
  }, [id]);

  if (!item) return <p>Loading...</p>;

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <p>Harga: {item.price}</p>

      <button onClick={() => navigate(`/escrow/${item.id}`)}>
        Beli 
      </button>
    </div>
  );
}