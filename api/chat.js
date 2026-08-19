export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { messages } = req.body;

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-20b",
        max_tokens: 2000,
        reasoning_effort: "none",
        messages
      }),
    });

    const data = await response.json();
    console.log("Groq status:", response.status);
    console.log("Groq error detail:", JSON.stringify(data?.error));
    console.log("Key present:", !!process.env.GROQ_API_KEY);
    return res.status(200).json(data);
  } catch (err) {
    console.error("Groq API error:", err);
    return res.status(500).json({ error: "Failed to fetch from Groq" });
  }
}