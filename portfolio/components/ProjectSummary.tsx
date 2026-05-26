"use client";

import Link from "next/link";
import ImageFrame from "@/components/ImageFrame";

export default function ProjectSummary() {
  const projects = [
    {
      title: "Aura.ai",
      icon: "🤖",
      featured: true,
      slug: "aura",
      badge: "개인",
      meta: "개인 프로젝트 · 2025.12 ~ 2026.02",
      image: "aura-main.png",
      role: "기획 · 화면 설계 · 프론트엔드 · 백엔드 · 배포",
      stack: "Next.js · Node.js · TypeScript · FastAPI · OpenAI API",
      impact:
        "날씨·위치·스타일 조건을 반영한 AI 추천 흐름과\n대화 저장 구조를 직접 설계하고 구현했습니다.",
    },
    {
      title: "MarketUpdate",
      icon: "🛒",
      slug: "market",
      badge: "팀 5인",
      meta: "팀 프로젝트 (5인) · 2024.08 ~ 2024.12",
      image: "market-main-long.png",
      role: "기획 참여 · Figma 설계 · 프론트엔드 · API 항목 정리",
      stack: "React · Node.js · Spring Boot · WebSocket",
      impact:
        "상품 탐색 → 상세 → 채팅 흐름을 정리하고\nExcel 기준표로 API 항목 협업 혼선을 줄였습니다.",
    },
    {
      title: "ProfitPilot",
      icon: "📈",
      slug: "profit",
      badge: "팀 4인",
      meta: "팀 프로젝트 (4인) · 2024.09 ~ 2024.12",
      image: "profit-main.png",
      role: "팀장 · 기획 문서화 · Figma 설계 · 실시간 UI 구현",
      stack: "JavaScript · Flask · Chart.js · Jinja",
      impact:
        "주식 초보자를 위한 학습형 투자 흐름을 설계하고\n실시간 데이터와 피드백 UI를 화면에 정리했습니다.",
    },
    {
      title: "Vanilla JS SPA",
      icon: "⚙️",
      slug: "spa",
      badge: "개인",
      meta: "개인 프로젝트 · 2025.10 ~ 2026.01",
      image: "vanilla-main.png",
      role: "구조 설계 · 상태/렌더링 구현",
      stack: "JavaScript · Router · Store",
      impact:
        "라우팅·상태·렌더링 원리를 직접 구현하며\n웹 애플리케이션 구조와 성능 관점을 학습했습니다.",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-sm font-semibold text-blue-600">Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            대표 프로젝트 스냅샷
          </h2>
          <p className="mt-3 text-gray-600">
            핵심 역할과 임팩트를 한 줄로 요약했습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={`/projects/${project.slug}`}
              className={`group relative p-6 rounded-2xl border bg-white transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${
                project.featured
                  ? "border-blue-200 shadow-lg ring-2 ring-blue-100"
                  : "border-gray-200"
              }`}
            >
              {project.featured && (
                <>
                  <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute top-4 right-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1 text-xs font-semibold text-white shadow-md">
                    Featured
                  </span>
                </>
              )}
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl">{project.icon}</div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200">
                    {project.badge}
                  </span>
                </div>
              </div>

              <ImageFrame
                src={`/${project.image}`}
                alt={project.title}
                className="h-40 transition-transform duration-300 group-hover:scale-[1.02]"
                fit="contain"
                showLoading={false}
              />

              <p className="mt-4 font-semibold text-gray-900">
                {project.title}
              </p>
              <p className="mt-1 text-xs text-gray-500">{project.meta}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="text-xs text-gray-600 bg-gray-100 border border-gray-200 inline-flex px-2 py-1 rounded-full">
                  {project.role}
                </span>
                <span className="text-xs text-blue-700 bg-blue-50 border border-blue-100 inline-flex px-2 py-1 rounded-full transition-all duration-300 group-hover:bg-blue-100 group-hover:border-blue-200 group-hover:scale-[1.02]">
                  {project.stack}
                </span>
              </div>
              <p className="mt-3 text-xs text-gray-500 leading-relaxed whitespace-pre-line flex items-start gap-2">
                <span className="text-blue-500">✔</span>
                <span>{project.impact}</span>
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12 space-y-4 text-gray-700">
          <p>
            서비스 아이디어 정의, 화면 설계, 데이터 구조 정리, 구현, 운영 이슈
            대응까지 이어지는 과정을 프로젝트별로 정리했습니다.
          </p>
          <p>
            개발뿐 아니라 문서화, 협업 기준 정리, 문제 해결 방식이 함께
            보이도록 구성했습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
