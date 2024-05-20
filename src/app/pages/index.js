import { useState } from "react";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [trends, setTrends] = useState(null);

  const fetchTrends = async () => {
    const response = await fetch(`/api/trends?keyword=${keyword}`);
    const data = await response.json();
    setTrends(data.data);
    console.log(data.data);
  };

  return (
    <div>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Enter keyword"
      />
      <button onClick={fetchTrends}>Get Trends</button>
      {trends &&
        trends.default.timelineData.map((item, index) => (
          <div key={index} className="card">
            <h3>Date: {item.formattedTime}</h3>
            <p>Interest: {item.value[0]}</p>
          </div>
        ))}
    </div>
  );
}
