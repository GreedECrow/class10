export default async function Home() {
  const res = await fetch("https://api.github.com/repos/GreedECrow/class10", {next: {revalidate: 15}});
  const data = await res.json();
console.log(data)

  return <main>{data.stargazers_count}</main>
}
