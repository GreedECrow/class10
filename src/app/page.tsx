import kv from "@vercel/kv";

export default async function Home() {
  const res = await fetch("https://api.github.com/repos/GreedECrow/class10", {
    next: { revalidate: 15 },
  });
  const data = await res.json();

  const pageViews = await kv.incr("views");

  return;
  <main>
    <p>0</p>
    <span>⭐{data.stargazers_count}</span>
  </main>;
}
