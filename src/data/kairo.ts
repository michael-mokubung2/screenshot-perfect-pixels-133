export type Genre = "Action" | "Sci-Fi" | "Romance" | "Slice of Life" | "Psychological";
export const GENRES: Genre[] = ["Action", "Sci-Fi", "Romance", "Slice of Life", "Psychological"];

export type Anime = {
  id: string; title: string; jp: string; genres: Genre[]; year: number; episodes: number;
  description: string; streams: { name: string; url: string }[];
};

export const ANIME: Anime[] = [
  { id: "frieren", title: "Frieren: Beyond Journey's End", jp: "葬送のフリーレン", genres: ["Slice of Life", "Action"], year: 2023, episodes: 28, description: "An elf mage outlives her heroic party and learns, slowly, what it meant to know them.", streams: [{ name: "Crunchyroll", url: "https://www.crunchyroll.com/series/GG5H5XQX4/frieren-beyond-journeys-end" }] },
  { id: "steins", title: "Steins;Gate", jp: "シュタインズ・ゲート", genres: ["Sci-Fi", "Psychological"], year: 2011, episodes: 24, description: "A self-proclaimed mad scientist discovers that text messages can be sent into the past.", streams: [{ name: "Crunchyroll", url: "https://www.crunchyroll.com" }, { name: "Hulu", url: "https://www.hulu.com" }] },
  { id: "aot", title: "Attack on Titan", jp: "進撃の巨人", genres: ["Action", "Psychological"], year: 2013, episodes: 89, description: "Humanity lives behind walls, until the walls stop being enough.", streams: [{ name: "Crunchyroll", url: "https://www.crunchyroll.com" }, { name: "Hulu", url: "https://www.hulu.com" }] },
  { id: "your-lie", title: "Your Lie in April", jp: "四月は君の嘘", genres: ["Romance", "Slice of Life"], year: 2014, episodes: 22, description: "A pianist who stopped hearing his own music meets a violinist who plays without rules.", streams: [{ name: "Netflix", url: "https://www.netflix.com" }, { name: "Crunchyroll", url: "https://www.crunchyroll.com" }] },
  { id: "cyberpunk", title: "Cyberpunk: Edgerunners", jp: "サイバーパンク エッジランナーズ", genres: ["Sci-Fi", "Action"], year: 2022, episodes: 10, description: "A street kid in Night City chooses to survive as an edgerunner.", streams: [{ name: "Netflix", url: "https://www.netflix.com" }] },
  { id: "monster", title: "Monster", jp: "モンスター", genres: ["Psychological"], year: 2004, episodes: 74, description: "A surgeon saves a boy's life — and spends years hunting what that boy becomes.", streams: [{ name: "Netflix", url: "https://www.netflix.com" }] },
  { id: "kaguya", title: "Kaguya-sama: Love Is War", jp: "かぐや様は告らせたい", genres: ["Romance"], year: 2019, episodes: 37, description: "Two student council geniuses wage psychological war over who confesses first.", streams: [{ name: "Crunchyroll", url: "https://www.crunchyroll.com" }] },
  { id: "mushishi", title: "Mushishi", jp: "蟲師", genres: ["Slice of Life", "Psychological"], year: 2005, episodes: 46, description: "A wandering scholar studies the quiet, uncanny life forms at the edge of the world.", streams: [{ name: "Crunchyroll", url: "https://www.crunchyroll.com" }] },
  { id: "jjk", title: "Jujutsu Kaisen", jp: "呪術廻戦", genres: ["Action"], year: 2020, episodes: 47, description: "A student swallows a cursed finger and enrols in a school for sorcerers.", streams: [{ name: "Crunchyroll", url: "https://www.crunchyroll.com" }, { name: "Netflix", url: "https://www.netflix.com" }] },
  { id: "ghost", title: "Ghost in the Shell: SAC", jp: "攻殻機動隊", genres: ["Sci-Fi", "Psychological"], year: 2002, episodes: 52, description: "Section 9 investigates cybercrime where the line between mind and machine is gone.", streams: [{ name: "Prime Video", url: "https://www.primevideo.com" }, { name: "Netflix", url: "https://www.netflix.com" }] },
  { id: "horimiya", title: "Horimiya", jp: "ホリミヤ", genres: ["Romance", "Slice of Life"], year: 2021, episodes: 13, description: "Two classmates discover the people they are outside of school.", streams: [{ name: "Crunchyroll", url: "https://www.crunchyroll.com" }] },
  { id: "vinland", title: "Vinland Saga", jp: "ヴィンランド・サガ", genres: ["Action", "Psychological"], year: 2019, episodes: 48, description: "A boy raised on revenge learns what it costs to put down the sword.", streams: [{ name: "Prime Video", url: "https://www.primevideo.com" }, { name: "Netflix", url: "https://www.netflix.com" }, { name: "Crunchyroll", url: "https://www.crunchyroll.com" }] },
];

export const PLATFORMS = [
  { name: "Crunchyroll", url: "https://www.crunchyroll.com", models: ["Subscription", "Free with Ads"], note: "Largest dedicated anime library, simulcasts within hours of Japan." },
  { name: "Netflix", url: "https://www.netflix.com", models: ["Subscription"], note: "Strong originals and curated classics, dubbed in many languages." },
  { name: "Hulu", url: "https://www.hulu.com", models: ["Subscription", "Free with Ads"], note: "Broad catalogue for US viewers, with an ad-supported tier." },
  { name: "Prime Video", url: "https://www.primevideo.com", models: ["Subscription"], note: "Selected exclusives and rental options alongside its library." },
];

export const COMMUNITIES = [
  { name: "r/anime", platform: "Reddit", members: "11M", url: "https://www.reddit.com/r/anime", desc: "Weekly episode discussions and the internet's biggest anime forum." },
  { name: "r/Animesuggest", platform: "Reddit", members: "1.1M", url: "https://www.reddit.com/r/Animesuggest", desc: "Ask for recommendations based on what you loved." },
  { name: "r/manga", platform: "Reddit", members: "4M", url: "https://www.reddit.com/r/manga", desc: "Chapter threads and source-material discussion." },
  { name: "Anime Discord", platform: "Discord", members: "400K", url: "https://discord.com/invite/anime", desc: "Real-time chat, watch parties, and events." },
  { name: "Crunchyroll Discord", platform: "Discord", members: "300K", url: "https://discord.com/invite/crunchyroll", desc: "Official community for simulcast season talk." },
];

export const CREATORS = [
  { name: "Gigguk", focus: "Commentary & humour", url: "https://www.youtube.com/@Gigguk" },
  { name: "The Canipa Effect", focus: "Anime production deep dives", url: "https://www.youtube.com/@TheCanipaEffect" },
  { name: "Mother's Basement", focus: "Analysis & opening breakdowns", url: "https://www.youtube.com/@MothersBasement" },
  { name: "Glass Reflection", focus: "Reviews & recommendations", url: "https://www.youtube.com/@GlassReflection" },
  { name: "Super Eyepatch Wolf", focus: "Long-form video essays", url: "https://www.youtube.com/@SuperEyepatchWolf" },
];

export const PRODUCTS = [
  { name: "Frieren Vol. 1 (Manga)", category: "Books", price: "$11.99", url: "https://www.amazon.com/s?k=frieren+manga&tag=YOUR-TAG-20" },
  { name: "Steins;Gate Blu-ray Collection", category: "Blu-ray", price: "$49.99", url: "https://www.amazon.com/s?k=steins+gate+blu-ray&tag=YOUR-TAG-20" },
  { name: "The Art of Studio Ghibli", category: "Artbook", price: "$34.00", url: "https://www.amazon.com/s?k=studio+ghibli+art+book&tag=YOUR-TAG-20" },
  { name: "Noise-cancelling Headphones", category: "Gear", price: "$199.00", url: "https://www.amazon.com/s?k=noise+cancelling+headphones&tag=YOUR-TAG-20" },
  { name: "Crunchyroll Gift Card", category: "Subscription", price: "From $25", url: "https://www.amazon.com/s?k=crunchyroll+gift+card&tag=YOUR-TAG-20" },
  { name: "Attack on Titan Figure", category: "Figures", price: "$64.99", url: "https://www.amazon.com/s?k=attack+on+titan+figure&tag=YOUR-TAG-20" },
];

export const GUIDES = [
  { title: "Where to start with anime in 2026", read: "8 min", excerpt: "Ten entry points, chosen by temperament rather than popularity." },
  { title: "Sub vs dub: a calm guide", read: "5 min", excerpt: "What each gets you, and why neither is wrong." },
  { title: "Understanding seasonal simulcasts", read: "6 min", excerpt: "How the four anime seasons work and how to follow them legally." },
  { title: "Reading manga after the anime", read: "7 min", excerpt: "Finding the right chapter to continue from, series by series." },
];
