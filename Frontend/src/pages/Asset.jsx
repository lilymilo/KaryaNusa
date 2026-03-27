import { useEffect, useState } from "react";

export default function Asset() {
  const [assets, setAssets] = useState([]);

    useEffect(() => {
      setAssets([
        { Id: 1, name: "NFT Design UI Kit" },
        { Id: 2, name: "Source Code App" },
    ]);
}, []);

return (
    <div>
        <h1>Aset Saya</h1>

        {assets.map((asset) => (
            <p key={asset.id}>{asset.name}</p>
        ))}
    </div>
 );
}