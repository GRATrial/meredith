// ### PLACEHOLDER: Researcher will customize video data

export interface VideoResult {
  id: string;
  title: string;
  source: string;
  duration: string;
  views: string;
  thumbnailKey?: string;
}

// Fictional video results for research simulation
export const VIDEOS: VideoResult[] = [
  {
    id: "v1",
    title: "Meredith Mueller named Partner at Kensington Advisory Group",
    source: "YouTube · Kensington Advisory",
    duration: "2:47",
    views: "Jan 22, 2025"
  },
  {
    id: "v2",
    title: "Community Leadership Awards 2024 — Meredith Mueller ...",
    source: "YouTube · Naperville Community TV",
    duration: "5:18",
    views: "Oct 15, 2024"
  },
  {
    id: "v3",
    title: "Meredith Mueller discusses financial planning for families",
    source: "YouTube · WealthWise Channel",
    duration: "12:05",
    views: "Aug 9, 2024"
  }
];

