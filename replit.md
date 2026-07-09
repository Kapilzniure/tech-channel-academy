# The Transmission — Technology Channel

A premium creative broadcast platform by Bishworaj Poudel covering AI, automation, self-hosting, and development.

## Stack

- **Framework**: TanStack Start (React 19 + SSR) with file-based routing
- **Styling**: Tailwind CSS v4 + custom OKLCH dark theme
- **Fonts**: Syne (display/headings) + Inter (body)
- **UI**: Radix UI component library
- **Package manager**: Bun
- **Build**: Vite via `@lovable.dev/vite-tanstack-config`

## Running the project

```bash
bun install       # install dependencies
bun run dev       # start dev server on port 5000
bun run build     # production build
```

The dev workflow is configured as "Start application" → `bun run dev` → port 5000.

## Project structure

```
src/
  routes/
    __root.tsx              # App shell, head tags, fonts
    index.tsx               # Homepage ("The Transmission" design)
    episodes.index.tsx      # All Transmissions archive page
    episodes.$slug.tsx      # Single transmission/episode page
  components/
    site/
      Navbar.tsx            # Top nav with Join Free + Book Training modals
      Footer.tsx            # Premium footer
      EpisodeCard.tsx       # Transmission card (featured + compact variants)
      JoinModal.tsx         # Newsletter signup modal
      BookModal.tsx         # Training booking modal
    ui/                     # Radix UI-based component library
  data/
    episodes.ts             # All content: episodes, topics, tools, courses
  styles.css                # Theme variables (OKLCH dark palette)
```

## Design system

- **Background**: `oklch(0.1 0.028 258)` — very dark navy (~#0A0C14)
- **Accent/Primary**: `oklch(0.78 0.17 182)` — rich teal/cyan
- **Concept**: "The Transmission" — premium broadcast platform aesthetic with signal/waveform motifs, TX-001 episode numbering, and frequency-themed navigation

## User preferences

- Premium dark theme only — no light mode
- Creative, editorial layouts over standard grids
- "Transmission" terminology throughout (episodes = transmissions, topics = frequencies)
