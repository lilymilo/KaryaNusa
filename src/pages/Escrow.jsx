import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Escrow() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [status, setStatus] = useState("idle");

  const handlePayment = () => {
    setStatus("processing");

    setTimeout(() => {
      setStatus("success");
    }, 2000);
  };

  const goToMarketplace = () => {
    navigate("/asset");
  };

  return (
    <div>
      <h1>Escrow Payment</h1>
        <p>Item ID: {id}</p>

        <p>Status: {status}</p>

        {status === "idle" && (
          <button onClick={handlePayment}>
            Bayar
          </button>
        )}

        {status === "success" && (
            <button onClick={goToAsset}>
                Lihat Aset
            </button>
        )}
    </div>
  );
}
