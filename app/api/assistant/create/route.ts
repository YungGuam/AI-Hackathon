import OpenAI from "openai";

const perplexity = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: 'https://api/perplexity.ai/',
});

export const run
