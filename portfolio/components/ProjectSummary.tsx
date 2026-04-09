"use client";

import Link from "next/link";

export default function ProjectSummary() {
  const projects = [
    {
      title: "Aura.ai",
      type: "개인 프로젝트",
      featured: true,
      slug: "aura",
      period: "2025.12 ~ 2026.02",
      summary: "AI 추천 서비스",
      role: "1인 프로젝트 / 서비스 기획 / UX/UI 디자인 / 요구사항 구체화",
      points: [
        "날씨, 위치, 스타일 선택값을 저장하고 이를 바탕으로 추천이 이어지는 사용자 흐름과 핵심 기능을 정의했습니다.",
        "대화가 길어질 경우 AI가 내용을 요약하고, 채팅 및 세션 데이터가 저장되도록 구조를 설계했습니다.",
        "서비스 기획, Figma 기반 UX/UI 디자인, 프론트엔드, FastAPI API, 배포까지 전 과정을 수행했습니다.",
      ],
    },
    {
      title: "MarketUpdate",
      type: "팀 프로젝트(5인)",
      slug: "market",
      period: "2024.08 ~ 2024.12",
      summary: "중고거래 웹서비스",
      role: "기획 참여 / 웹디자인 단독 / 화면 구현 협업",
      points: [
        "상품 목록, 상세, 채팅, 마이페이지, FAQ, Notice 등 주요 화면의 사용자 흐름과 기능 범위를 정리했습니다.",
        "웹디자인을 단독으로 맡아 Figma로 전 화면 UX/UI를 설계하고 화면 목적과 정보 구조를 구체화했습니다.",
        "Google 스프레드시트로 API 항목을 정리하고, 연동 범위와 화면 목적을 조율해 구현까지 연결했습니다.",
      ],
    },
    {
      title: "ProfitPilot",
      type: "팀 프로젝트(4인)",
      slug: "profit",
      period: "2024.09 ~ 2024.12",
      summary: "투자 시뮬레이션 웹서비스",
      role: "UI/UX 기획 / Figma 디자인 / 화면 구현",
      points: [
        "서비스 초기 아이디어를 제안하고 투자 시뮬레이션과 AI 챗봇이 결합된 웹서비스 방향을 기획했습니다.",
        "홈, 마켓, 포트폴리오, 리더보드, AI 챗봇 화면의 정보 우선순위와 사용자 흐름을 정리했습니다.",
        "Notion으로 작업 흐름과 회의 내용을 문서화하고, 실시간 데이터 연동과 피드백 구조까지 반영했습니다.",
      ],
    },
    {
      title: "Vanilla JS SPA",
      type: "개인 프로젝트",
      slug: "spa",
      period: "학습 프로젝트",
      summary: "프레임워크 없이 구현한 SPA",
      role: "구조 설계 / 화면 흐름 구현",
      points: [
        "라우팅, 상태 관리, 렌더링 흐름을 직접 구현하며 웹서비스 동작 구조를 학습했습니다.",
        "화면 전환과 상태 변경의 관계를 구조적으로 이해하는 데 집중했습니다.",
        "웹 기획 관점에서 화면 흐름과 예외 케이스를 더 구체적으로 바라보는 기반이 되었습니다.",
      ],
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-sm font-semibold text-blue-600">Project Experience</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-950">
            프로젝트 경험
          </h2>
          <p className="mt-3 text-gray-600">
            프로젝트별 역할, 관점, 기획 및 수행 내용을 이력서 형식에 맞춰 정리했습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={`/projects/${project.slug}`}
              className={`group relative rounded-[28px] border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                project.featured
                  ? "border-blue-200 shadow-lg ring-2 ring-blue-100"
                  : "border-gray-200"
              }`}
            >
              {project.featured && (
                <span className="absolute right-5 top-5 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow-md">
                  대표
                </span>
              )}
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-blue-700">{project.type}</p>
                  <p className="mt-2 text-2xl font-bold text-gray-950">{project.title}</p>
                  <p className="mt-1 text-sm text-gray-500">{project.period}</p>
                </div>
                <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-700">
                  {project.summary}
                </span>
              </div>

              <div className="mt-6 rounded-2xl border border-gray-100 bg-gray-50 px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-400">
                  역할 / 관점
                </p>
                <p className="mt-2 text-sm font-medium leading-6 text-gray-900">
                  {project.role}
                </p>
              </div>

              <div className="mt-5 space-y-3">
                {project.points.map((point) => (
                  <p
                    key={point}
                    className="flex gap-3 text-sm leading-7 text-gray-700"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                    <span>{point}</span>
                  </p>
                ))}
              </div>

              <p className="mt-6 text-sm font-semibold text-blue-700">
                상세 페이지에서 프로젝트별 구조와 문제 해결 내용을 더 볼 수 있습니다.
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12 space-y-4 text-gray-700">
          <p>
            1인 프로젝트에서는 서비스 기획, UX/UI 설계, 프론트엔드, API, 배포까지 전
            과정을 수행했고, 팀 프로젝트에서는 화면 설계와 협업 문서화를 함께 맡았습니다.
          </p>
          <p>
            각 프로젝트를 통해 요구사항 정의, 화면 구조 설계, 협업 커뮤니케이션, 운영
            관점의 점검 경험을 쌓았습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
