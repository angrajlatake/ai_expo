"use client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import NewsContent from "@/components/shared/newsContent";
const newsArticles = ({ articles }) => {
  const getContent = () => {
    console.log("Data");
  };
  return (
    <Accordion type="single" collapsible className="w-full">
      {articles.map((item, index) => {
        return (
          <AccordionItem value={`item-${index}`}>
            <AccordionTrigger onclick={getContent}>
              {item.title}
            </AccordionTrigger>
            <NewsContent url={item.url} />
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default newsArticles;
