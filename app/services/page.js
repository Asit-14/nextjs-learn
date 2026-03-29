import Link from "next/link";
export default function services() {
  return (
    <>
      <h1>all services </h1>

      <p>
        <Link href="services/webdev"> app development</Link>
      </p>
      <p>
        <Link href="/"> web development</Link>
      </p>

      <p>
        <Link href="services/seo"> seo services</Link>
      </p>
    </>
  );
}
