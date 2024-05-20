import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import NewaArticles from "@/components/shared/newsArticles";
export default async function Home() {
  const fetchTrends = async () => {
    const response = await fetch(`http://localhost:3000/api`, {
      next: {
        revalidate: 3600, // 1 hour
      },
    });
    const data = await response.json();
    return data.data;
  };

  const data = await fetchTrends();
  const { date, trendingSearches } = data[1];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">
        Welcome to{" "}
        <a
          className="text-blue-600 hover:underline"
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          AI experiments
        </a>
      </h1>
      <div className="grid gap-8">
        {trendingSearches?.map((item, index) => (
          <Card
            key="1"
            className="rounded-lg overflow-hidden shadow-lg max-w-sm mx-auto hover:shadow-xl transition-all duration-200"
          >
            <CardContent className="p-0">
              <div className="p-4">
                <h2 className="text-2xl font-bold hover:text-gray-700 transition-all duration-200">
                  {item.title.query}
                </h2>
                <h3 className="text-gray-500 hover:text-gray-600 transition-all duration-200">
                  {item.title.query}
                </h3>
                <p className="mt-2 text-gray-600 hover:text-gray-700 transition-all duration-200">
                  {item.articles[0].title}
                </p>
                <div className="flex mt-4 space-x-2">
                  <Button
                    className="w-full hover:bg-gray-700 hover:text-white transition-all duration-200"
                    size="sm"
                  >
                    Open
                  </Button>
                  <Button
                    className="w-full hover:border-gray-700 hover:text-gray-700 transition-all duration-200"
                    size="sm"
                    variant="outline"
                  >
                    Delete
                  </Button>
                </div>
                <NewaArticles articles={item.articles} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
