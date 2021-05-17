import Link from "next/link";
import * as React from "react";
import LanguagePicker from "./LanguagePicker";

export default function Layout({ children }) {
  return (
    <>
      <LanguagePicker />
      <Link href="/about">About</Link>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
}
