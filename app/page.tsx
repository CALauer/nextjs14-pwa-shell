import Link from "next/link";
import Section from "./_components/Section";
import { PWAPrompt } from "./_components/PWAPrompt";

export default function Home() {
  return (
    <div className="page">
      <Section styleClass="dark">
        <h1>Next14 PWA</h1>
        <p>Created by Chris Lauer</p>
        <Link href="/about">About</Link>
        <PWAPrompt />
      </Section>
    </div>
  );
}
