import { AccordionContent } from "@/components/ui/accordion";
import extractArticle from "@/lib/articleExctraction";

const newsContent = async ({ url }) => {
  //   const article = await extractArticle(url);
  return (
    <AccordionContent>
      <p>Test</p>
    </AccordionContent>
  );
};

export default newsContent;
