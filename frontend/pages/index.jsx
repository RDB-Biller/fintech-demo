import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Fintech Demo</h1>
      <Link href="/transfer">Make Transfer</Link>
    </div>
  );
}
