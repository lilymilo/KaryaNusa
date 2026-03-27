import { useEffect, useState } from "react";
import API  from "../services/api";

export default function Home() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get("/stats");
        setStats(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
}, []);

return (
  <div>
    <h1>Home</h1>

    {stats && (
      <div>
        <p>Produk: {stats.products}</p>
        <p>Lowongan: {stats.jobs}</p>
      </div>
    )}
  </div>
 );
}
