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
      image: "aura-main.png",
      role: "서비스 기획 · 사용자 흐름 설계 · 구현 · 배포",
      stack: "Next.js · Node.js · TypeScript · FastAPI · OpenAI API",
      impact:
        "AI 응답과 추천 결과 흐름을 정리해\n챗봇 경험과 상태 관리의 일관성을 높였습니다.",
    },
    {
      title: "MarketUpdate",
      icon: "🛒",
      slug: "market",
      badge: "팀",
      image: "market-main-long.png",
      role: "화면 설계 · UI 구현 · 협업",
      stack: "React · Node.js · Spring Boot · WebSocket",
      impact:
        "상품 탐색부터 채팅까지의 흐름을 정리해\n주요 화면 가독성과 전환 경험을 개선했습니다.",
    },
    {
      title: "ProfitPilot",
      icon: "📈",
      slug: "profit",
      badge: "팀",
      image: "profit-main.png",
      role: "UI/UX 기획 · 대시보드 설계",
      stack: "JavaScript · Flask · Chart.js · Jinja",
      impact:
        "실시간 투자 데이터를 요약 구조로 재배치해\n핵심 정보 확인 흐름을 명확하게 만들었습니다.",
    },
    {
      title: "Vanilla JS SPA",
      icon: "⚙️",
      slug: "spa",
      badge: "개인",
      image: "vanilla-main.png",
      role: "구조 설계 · 화면 흐름 구현",
      stack: "JavaScript · Router · Store",
      impact:
        "라우팅 / 상태 / 렌더링 관계를 직접 설계하며\n웹 서비스 동작 구조를 깊게 이해했습니다.",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-sm font-semibold text-blue-600">Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            프로젝트 스냅샷
          </h2>
          <p className="mt-3 text-gray-600">
            역할, 흐름 설계 포인트, 결과를 짧게 정리했습니다.
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
                    대표
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
            기획 의도를 화면 구조와 기능 흐름으로 구체화하고, 실제 구현 과정에서 발생하는 제약까지 함께 다뤘습니다.
          </p>
          <p>
            각 프로젝트는 단순 개발 결과물이 아니라 요구사항 정리, 화면 설계, 데이터 연결, QA 관점을 함께 담은 작업입니다.
          </p>
        </div>
      </div>
    </section>
  );
}
