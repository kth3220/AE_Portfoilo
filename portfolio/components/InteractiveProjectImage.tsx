"use client";

import Link from "next/link";
import { useState } from "react";
import ImageFrame from "@/components/ImageFrame";

type Props = {
  src: string;
  alt: string;
  className?: string;
  fit?: "cover" | "contain";
  detailHref?: string;
  detailLabel?: string;
};

export default function InteractiveProjectImage({
  src,
  alt,
  className = "h-48",
  fit = "contain",
  detailHref,
  detailLabel = "상세 프로젝트 보기",
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative">
        {detailHref ? (
          <Link
            href={detailHref}
            className="group relative block rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <ImageFrame src={src} alt={alt} className={className} fit={fit} />
            <div className="pointer-events-none absolute inset-x-3 bottom-3 flex items-center justify-between rounded-full bg-black/65 px-3 py-2 text-xs font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span>{detailLabel}</span>
              <span>→</span>
            </div>
          </Link>
        ) : (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="block w-full text-left focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
          >
            <ImageFrame src={src} alt={alt} className={className} fit={fit} />
          </button>
        )}

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="absolute right-3 top-3 z-10 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-gray-900 shadow-sm transition hover:bg-white"
        >
          크게 보기
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="w-full max-w-5xl rounded-2xl bg-white p-6">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-semibold text-gray-700">{alt}</p>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-sm text-gray-500 hover:text-gray-900"
              >
                닫기
              </button>
            </div>
            <div className="relative flex h-[60vh] items-center justify-center overflow-hidden rounded-lg bg-gray-100">
              <img
                src={src}
                alt={alt}
                className="absolute inset-0 h-full w-full bg-white object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
