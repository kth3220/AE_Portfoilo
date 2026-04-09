"use client";

import Link from "next/link";

export default function Hero() {
  const badges = [
    "사이트 운영",
    "요구사항 정의",
    "화면 구조 설계",
    "협업 문서화",
  ];

  const quickInfo = [
    { label: "지원 분야", value: "글로벌 사이트 운영 및 웹 기획(AE)" },
    { label: "경력", value: "신입" },
    { label: "희망연봉", value: "3,400만 원 (협의 가능)" },
    { label: "학력", value: "서일대학교 소프트웨어공학과 학사" },
  ];

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-[-80px] top-16 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute bottom-0 left-[-80px] h-72 w-72 rounded-full bg-cyan-100/60 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-8 animate-fadeInUp">
            <div className="space-y-4">
              <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                글로벌 사이트 운영 및 웹 기획(AE) 지원
              </span>
              <h1 className="text-5xl font-bold tracking-tight text-gray-950 md:text-7xl">
                김태희
              </h1>
              <p className="text-xl text-gray-600 md:text-2xl">
                서비스 구조를 이해하고 흐름을 정리하는 웹 기획 지원자
              </p>
            </div>

            <div className="space-y-5 text-lg leading-relaxed text-gray-700">
              <p>
                소프트웨어공학 전공과 웹 프로젝트 경험을 바탕으로, 모호한 요구를 화면
                구조와 기능 흐름으로 구체화해 온 김태희입니다.
              </p>
              <p>
                포트폴리오와 블로그를 직접 운영하며 정보 구조, 콘텐츠 배치, 링크 동선도
                함께 관리해 왔고, 사용자 흐름이 자연스럽게 이어지는 구조를 만드는 데
                관심이 있습니다.
              </p>
              <p>
                HTML/CSS, JavaScript, React, Next.js, FastAPI 구조를 이해하고 있어
                기획 의도를 개발 언어로 연결하고, 개발 이슈를 사용자 관점으로 다시
                정리하는 커뮤니케이션에 강점이 있습니다.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-gray-200 bg-white px-3 py-1 text-sm font-medium text-gray-700 shadow-sm"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#about"
                className="rounded-xl bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
              >
                지원 정보 보기
              </a>
              <Link
                href="/projects"
                className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
              >
                프로젝트 상세 보기
              </Link>
              <a
                href="#essay"
                className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:border-blue-600 hover:text-blue-700"
              >
                자기소개 요약
              </a>
            </div>
          </div>

          <div className="animate-scaleIn">
            <div className="overflow-hidden rounded-[28px] border border-gray-200 bg-white/90 shadow-2xl shadow-slate-200/70 backdrop-blur">
              <div className="border-b border-gray-100 bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-5 text-white">
                <p className="text-sm font-semibold text-blue-200">지원 요약</p>
                <h2 className="mt-2 text-2xl font-bold">
                  글로벌 사이트 운영 및 웹 기획(AE) 지원자
                </h2>
              </div>
              <div className="grid gap-6 p-6">
                <div className="flex items-center gap-4">
                  <div className="h-24 w-20 shrink-0 overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 p-1.5">
                    <img
                      src="/profile-photo.jpg"
                      alt="김태희 프로필 사진"
                      className="h-full w-full rounded-xl object-cover"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-lg font-semibold text-gray-950">김태희</p>
                    <p className="text-sm text-gray-500">2002.04.07</p>
                    <p className="text-sm text-gray-700">
                      사이트 운영, 협업 커뮤니케이션, 요구사항 정의, 화면 구조 설계
                    </p>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {quickInfo.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-400">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm font-medium leading-relaxed text-gray-900">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="grid gap-3">
                  <div className="rounded-2xl border border-gray-200 px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-400">
                      연락처
                    </p>
                    <div className="mt-2 flex flex-wrap gap-4 text-sm font-medium text-gray-900">
                      <a href="tel:01057453220" className="hover:text-blue-700">
                        010-5745-3220
                      </a>
                      <a
                        href="mailto:dddd3220@naver.com"
                        className="hover:text-blue-700"
                      >
                        dddd3220@naver.com
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://ae-portfoilo.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                    >
                      Portfolio
                    </a>
                    <a
                      href="https://frontend-diary-log.tistory.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-900 hover:border-blue-600 hover:text-blue-700"
                    >
                      Blog
                    </a>
                    <a
                      href="https://github.com/kth3220"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-900 hover:border-blue-600 hover:text-blue-700"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 rounded-2xl border border-blue-100 bg-blue-50 px-5 py-4 text-sm leading-relaxed text-blue-950">
              포트폴리오와 블로그를 직접 운영하며 서비스 구조, 채널 링크, 정보 배치,
              운영 관점의 점검 경험을 함께 쌓아 왔습니다.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
