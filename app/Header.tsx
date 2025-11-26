// src/components/Header.tsx
"use client";

import Link from "next/link";
import { Cormorant } from "next/font/google";

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const navItems = [
  { label: "Inicio", href: "https://lovely-sunflower-sf8k0t.mystrikingly.com/", active: true },
  { label: "Sobre Nosotros", href: "https://lovely-sunflower-sf8k0t.mystrikingly.com/1" },
  { label: "Servicios", href: "https://lovely-sunflower-sf8k0t.mystrikingly.com/2" },
  { label: "Blog", href: "https://lovely-sunflower-sf8k0t.mystrikingly.com/3" },
  { label: "Contacto", href: "https://lovely-sunflower-sf8k0t.mystrikingly.com/4" },
];

export function Header() {
  // bg-colorBgHeader dark:bg-colorBgHeader
  return (
    <header className="
    flex justify-between items-center w-full h-20 px-5 py-2 text-colorAccent1 dark:text-colorAccent2
    border-solid border-colorAccent1 dark:border-colorAccent2 border-b-1 border-zinc-200 bg-[#f7f4ee]">
      <div className="w-full flex h-16 items-center justify-between sm:h-20">
        {/* Logo / nombre */}
        <div className="text-lg text-[#143c3a] sm:text-xl">
          <h1 className={`${cormorant.variable} font-semibold`}>Aqualab</h1>
        </div>

        {/* Nav central */}
        <nav className="hidden gap-10 text-md font-bold text-[#144443] sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target="_blank"
              className={`hover:underline ${item.active ? "underline" : ""
                }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Iconos redes */}
        <div className="flex items-center gap-4 text-[#144443]">
          {/* Facebook */}
          <a href="#" aria-label="Facebook" className="hover:opacity-70">
            <span className="text-lg font-semibold">f</span>
          </a>

          {/* Instagram (cuadrito redondeado con círculo) */}
          <a
            href="#"
            aria-label="Instagram"
            className="flex h-6 w-6 items-center justify-center rounded-md border border-[#144443] hover:opacity-70"
          >
            <span className="block h-3 w-3 rounded-full border border-[#144443]" />
          </a>
        </div>
      </div>
    </header>
  );
}
