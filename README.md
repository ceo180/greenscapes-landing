# GreenScapes - Landscaping Company Landing Page

A modern, responsive landing page for a fictional landscaping company built with Next.js, Tailwind CSS, and the Vercel AI SDK.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6)

## Features

### 🌿 Landing Page
- **Hero Section** - Full-screen hero with background image and call-to-action buttons
- **Services Section** - 6 service cards showcasing landscaping offerings
- **Gallery Section** - Project showcase with hover effects
- **Testimonials** - Customer reviews with ratings
- **Contact Section** - Contact form and company information
- **Responsive Navigation** - Fixed navbar with logo and links

### 💬 AI-Powered Chat Widget
- Floating chat button (bottom-right corner)
- Real-time AI responses powered by GROQ AI
- Streaming text responses
- Message history with user/AI differentiation
- Sales-focused system prompt for landscaping inquiries

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **AI**: Vercel AI SDK + GROQ AI
- **Images**: Next.js Image Optimization with Unsplash

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- GROQ API key

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd 24-7-sales-agent-chatbot
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the project root:
   ```env
   GROQ_API_KEY=your-groq-api-key-here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts      # AI chat API endpoint
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Main landing page
├── components/
│   └── ChatWidget.tsx        # Floating chat component
├── public/                   # Static assets
├── next.config.js            # Next.js configuration
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── package.json
```

## API Routes

### POST /api/chat

Handles chat messages and returns AI-streamed responses.

**Request Body:**
```json
{
  "messages": [
    { "role": "user", "content": "What services do you offer?" }
  ]
}
```

**Response:** Streamed text response from GROQ AI.

## Chat Widget System Prompt

The AI assistant is configured to:
- Answer questions about landscaping services
- Discuss pricing (mentions it depends on square footage)
- Help with booking consultations
- Redirect off-topic questions back to landscaping

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENAI_API_KEY` | Your GROQ AI API key | Yes |

## Customization

### Changing the Color Scheme
The site uses Tailwind's `emerald`, `lime`, and `stone` color palettes. Modify classes in `page.tsx` and `ChatWidget.tsx` to change the theme.

### Updating Images
Images are sourced from Unsplash. Replace URLs in `page.tsx` with your own images. Ensure any new domains are added to `next.config.js`.

### Modifying the AI Behavior
Edit the system prompt in `app/api/chat/route.ts` to change how the AI assistant responds.

## License

This project is for educational and demonstration purposes.

---

Built with ❤️ using Next.js and the Vercel AI SDK
