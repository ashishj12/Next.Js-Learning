import Link from "next/link";

export default function NewsArtical() {
  return;
  <>
    <h1>News artical id</h1>
    <p>Reading in language</p>

    <div>
      <Link href="articles/id?lang=en">English</Link>
      <Link href="articles/id?lang=hi">Hindi</Link>
    </div>
  </>;
}
