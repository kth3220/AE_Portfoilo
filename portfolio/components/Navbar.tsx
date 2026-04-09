"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "지원 정보", id: "about" },
    { name: "직무 역량", id: "skills" },
    { name: "프로젝트", id: "projects" },
    { name: "자기소개", id: "essay" },
    { name: "연락처", id: "contact" },
    { name: "상세 보기", href: "/projects" },
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/85 shadow-sm backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <span className="text-lg font-bold tracking-tight text-gray-950">
              KTH
            </span>
          </div>

          <div className="hidden items-center gap-10 md:flex">
            {navItems.map((item) =>
              item.href ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group relative text-sm font-semibold text-gray-600 transition-colors duration-200 hover:text-blue-600"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-full" />
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id!)}
                  className="group relative text-sm font-semibold text-gray-600 transition-colors duration-200 hover:text-blue-600"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-full" />
                </button>
              )
            )}
            <a
              href="https://github.com/kth3220"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-gray-950 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-gray-800 hover:shadow-lg"
            >
              GitHub
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="p-2 md:hidden">
            <svg
              className="h-6 w-6 text-gray-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="space-y-3 border-t border-gray-200 py-4 md:hidden">
            {navItems.map((item) =>
              item.href ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block w-full rounded px-4 py-2.5 text-left text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id!)}
                  className="block w-full rounded px-4 py-2.5 text-left text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
                >
                  {item.name}
                </button>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
