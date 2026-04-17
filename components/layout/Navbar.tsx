"use client";

import { useState } from "react";
import { Brain, Menu, X } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Para Psicólogos", href: "#para-psicologos" },
  { label: "Privacidade", href: "#privacidade" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F4F9F9]/90 backdrop-blur-md border-b border-teal-100/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16" aria-label="Navegação principal">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008B8B] rounded-lg"
            aria-label="Mente Aberta - Página inicial"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#008B8B] text-white transition-transform group-hover:scale-105 shadow-sm">
              <Brain size={20} strokeWidth={2} />
            </span>
            <span className="font-serif text-xl font-bold text-slate-900 tracking-tight">
              Mente Aberta
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-[#008B8B] hover:bg-[#E0F5F5] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008B8B]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            <Link href={`${process.env.NEXT_PUBLIC_FED_CORE_URL ?? "https://app.menteaberta.site"}/login`}>
              <Button variant="ghost" size="sm">
                Entrar
              </Button>
            </Link>
            <Link href={`${process.env.NEXT_PUBLIC_FED_CORE_URL ?? "https://app.menteaberta.site"}/cadastro`}>
              <Button variant="primary" size="sm" rounded>
                Criar Conta
              </Button>
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            id="mobile-menu-toggle"
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-[#008B8B] hover:bg-[#E0F5F5] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008B8B]"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-[#F4F9F9] border-t border-teal-100/60 shadow-lg animate-in slide-in-from-top-2 duration-200"
        >
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 rounded-xl text-sm font-medium text-slate-700 hover:text-[#008B8B] hover:bg-[#E0F5F5] transition-all"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-2 border-t border-teal-100">
              <Link href={`${process.env.NEXT_PUBLIC_FED_CORE_URL ?? "https://app.menteaberta.site"}/login`} className="w-full">
                <Button variant="ghost" size="sm" className="w-full justify-center">
                  Entrar
                </Button>
              </Link>
              <Link href={`${process.env.NEXT_PUBLIC_FED_CORE_URL ?? "https://app.menteaberta.site"}/cadastro`} className="w-full">
                <Button variant="primary" size="sm" rounded className="w-full justify-center">
                  Criar Conta
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
