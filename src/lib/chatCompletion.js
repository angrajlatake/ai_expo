import OpenAI from "openai";

const openai = new OpenAI();

openai.baseURL = "http://localhost:1234/v1";
openai.apiKey = "lm-studio";

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();
