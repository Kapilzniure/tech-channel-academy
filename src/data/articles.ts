export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  link: string;
}

export const articles: Article[] = [
  {
    id: "automation-guide",
    title: "What is Automation? A Simple, Practical Guide",
    excerpt: "Hello everyone! Namaste, I'm Bishworaj Poudel, creator of Technology Channel. Today, I'll help you understand automation in a simple, practical, and fun way. With the help of automation you can make your life easy...",
    date: "Feb 11, 2026",
    readTime: "2 min read",
    tags: ["automation", "ai automation", "workflow automation"],
    link: "https://technologychannel.org/post/what-is-automation/"
  },
  {
    id: "n8n-setup",
    title: "How to Setup n8n to Own Domain",
    excerpt: "Setting up n8n on your own domain might sound complex, but it's actually quite straightforward once you break it down into simple steps. Having n8n running on your own domain gives you complete control...",
    date: "Feb 4, 2026",
    readTime: "6 min read",
    tags: ["n8n", "n8n setup", "docker", "caddy"],
    link: "https://technologychannel.org/post/how-to-setup-n8n-to-own-domain/"
  },
  {
    id: "n8n-beginners",
    title: "n8n For Beginners: Complete Guide to Workflow Automation",
    excerpt: "Are you tired of manually copying data between apps, sending the same emails over and over, or spending hours on repetitive tasks that could be automated? What if you could connect your favorite apps...",
    date: "Jan 26, 2026",
    readTime: "14 min read",
    tags: ["n8n", "automation", "no-code", "business automation"],
    link: "https://technologychannel.org/post/n8n-for-beginners/"
  },
  {
    id: "ai-slides",
    title: "How to Create Slides Using AI",
    excerpt: "Creating professional presentations can be time-consuming and challenging. From designing layouts to writing content, building slides from scratch requires significant effort. But what if AI could do most...",
    date: "Jan 2, 2026",
    readTime: "3 min read",
    tags: ["AI slides", "presentation", "Gemini Canvas"],
    link: "https://technologychannel.org/post/how-to-create-slides-using-ai/"
  },
  {
    id: "ai-tools",
    title: "Best Tools For AI Automation",
    excerpt: "AI automation is transforming how businesses and individuals handle repetitive tasks, connect applications, and streamline workflows. With the right automation tool, you can save hours of manual work...",
    date: "Jan 1, 2026",
    readTime: "4 min read",
    tags: ["AI automation", "N8n", "Zapier", "Make"],
    link: "https://technologychannel.org/post/best-tools-for-ai-automation/"
  },
  {
    id: "ai-models",
    title: "Top AI Models In the World",
    excerpt: "The world of Artificial Intelligence is rapidly evolving, with powerful AI models being developed by leading tech companies. These AI models are transforming how we work, learn, and interact with technology...",
    date: "Dec 28, 2025",
    readTime: "4 min read",
    tags: ["AI models", "ChatGPT", "Gemini", "Claude"],
    link: "https://technologychannel.org/post/top-ai-models-in-the-world/"
  },
  {
    id: "ssh-guide",
    title: "What is SSH and How to Create It",
    excerpt: "SSH, or Secure Shell, is a protocol used to securely access and manage a computer over an unsecured network. Imagine you're trying to send a secret message to a friend in a crowded room, and you don't...",
    date: "Dec 26, 2025",
    readTime: "5 min read",
    tags: ["ssh", "create ssh key", "ssh keygen"],
    link: "https://technologychannel.org/post/what-is-ssh-how-to-create-it/"
  },
  {
    id: "ai-headshot",
    title: "How to Create Professional Headshot Using AI",
    excerpt: "In today's professional world, having a high-quality headshot is essential for LinkedIn profiles, resumes, and professional networking. Professional photography can be expensive and time-consuming...",
    date: "Nov 29, 2025",
    readTime: "3 min read",
    tags: ["AI headshot", "professional headshot", "LinkedIn photo"],
    link: "https://technologychannel.org/post/how-to-create-professional-headshot-using-ai/"
  }
];
