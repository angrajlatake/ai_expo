import googleTrends from "google-trends-api";
import { NextResponse } from "next/server";
const getTrends = async (req, res) => {
  try {
    const { keyword } = req.query;
    const result = await googleTrends.interestOverTime({ keyword: keyword });
    res.status(200).json({ data: JSON.parse(result) });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export async function GET() {
  const result = await googleTrends.dailyTrends({
    geo: "CA",
    category: "all",
  });
  const data = JSON.parse(result);
  console.log(data);
  console.log(data.default.trendingSearchesDays);
  const trends = data.default.trendingSearchesDays;
  return NextResponse.json({ data: trends });
}
