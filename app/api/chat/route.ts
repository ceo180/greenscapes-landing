import { createGroq } from "@ai-sdk/groq";
import { streamText } from "ai";

export const runtime = "edge";

const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY,
});

const systemPrompt = `You are a helpful sales assistant for GreenScapes, a professional landscaping company. 

You only answer questions about:
- Landscaping services (lawn care, garden design, hardscaping, irrigation, outdoor lighting)
- Pricing (always mention that pricing depends on square footage and project complexity - encourage them to get a free quote)
- Booking consultations and appointments

If someone asks about topics unrelated to landscaping or our services, politely redirect them back to how GreenScapes can help with their outdoor space.

Be friendly, professional, and enthusiastic about helping customers transform their outdoor living spaces.`;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: groq("llama-3.3-70b-versatile"),
    system: systemPrompt,
    messages,
  });

  return result.toTextStreamResponse();
}
