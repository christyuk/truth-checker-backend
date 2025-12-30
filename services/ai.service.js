const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function analyzeClaim(text) {
  try {
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a fact-checking AI. Respond with verdict, confidence (0-1), and explanation.",
        },
        {
          role: "user",
          content: text,
        },
      ],
    });

    const reply = completion.choices[0].message.content;

    return {
      verdict: reply.includes("true") ? "True" : "False",
      confidence: 0.9,
      explanation: reply,
    };
  } catch (error) {
    console.error("AI error:", error.message);
    return {
      verdict: "Unknown",
      confidence: 0,
      explanation: "AI failed to analyze the claim",
    };
  }
}

module.exports = { analyzeClaim };
