import React from "react";
import Link from "next/link";

export default function about() {
  return (
    <div>
      <h1>Next14 PWA</h1>
      <p>Created by Chris Lauer</p>
      <Link href="/">Home</Link> <br />
      <Link href="/contact">Contact</Link>
    </div>
  );
}
