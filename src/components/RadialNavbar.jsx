"use client";
import Link from "next/link";
import { useState } from "react";
import { Home, User, Briefcase, Mail, Menu, X } from "lucide-react";
import clsx from "clsx";

const items = [
  { id: "home", label: "Home", href: "#home", icon: Home },
  { id: "about", label: "About", href: "#about", icon: User },
  { id: "services", label: "Services", href: "#about", icon: Briefcase },
  { id: "contact", label: "Contact", href: "#contact", icon: Mail },
];

export default function RadialNavbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed left-0 right-0 top-6 z-50 flex justify-center">
      <nav
        aria-label="Main"
        className={clsx(
          "relative w-full rounded-full bg-black/80 text-white shadow-lg",
          "ring-1 ring-white/10 backdrop-blur"
        )}
        style={{ maxWidth: "calc(100% - 100px)" }}
      >
        <div className="flex h-14 items-center justify-between px-3 md:hidden">
          <div className="text-sm font-medium tracking-wide">Menu</div>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="rounded-full p-2 hover:bg-white/10 active:scale-95"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <ul className="mx-4 hidden h-14 items-center justify-center gap-8 md:flex">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="flex items-center gap-2 rounded-full px-3 py-2 transition-colors hover:bg-white/10"
                >
                  <Icon size={18} />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {open && (
          <ul className="md:hidden absolute left-2 right-2 top-16 grid gap-2 rounded-2xl bg-black/90 p-2 ring-1 ring-white/10 shadow-xl">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <li key={`${item.id}-mobile`}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-white/10"
                    onClick={() => setOpen(false)}
                  >
                    <Icon size={18} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </nav>
    </div>
  );
}
