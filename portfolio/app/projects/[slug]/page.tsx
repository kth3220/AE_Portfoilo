"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import ProjectImageGallery from "@/components/ProjectImageGallery";
import ProjectToc from "@/components/ProjectToc";

const projectOrder = ["aura", "market", "profit", "spa"] as const;

const tocSections = [
  { id: "overview", label: "프로젝트 개요" },
  { id: "tech", label: "기술 스택" },
  { id: "features", label: "주요 기능" },
  { id: "architecture", label: "아키텍처" },
  { id: "problems", label: "문제 해결" },
  { id: "learnings", label: "배운 점" },
];

const projectData: Record<
  string,
  {
    title: string;
    subtitle: string;
    overview: string[];
    tech: { label: string; items: string[] }[];
    features: string[];
    architecture: string[];
    problems: { problem: string; solution: string; result: string }[];
    learnings: string[];
    links?: { label: string; href: string }[];
    images?: { label: string; filename: string }[];
    summary: { label: string; value: string }[];
    tags: string[];
  }
> = {
  aura: {
    title: "Aura.ai",
    subtitle: "AI 기반 패션 코디 추천 챗봇",
    overview: [
      "아침마다 옷을 고르는 데 걸리는 시간을 줄이고, 날씨와 위치, 스타일 조건까지 함께 반영한 추천을 받고 싶다는 개인적인 필요에서 출발한 서비스입니다.",
      "기획, 화면 설계, 프론트엔드, 백엔드 API, 배포까지 전 과정을 혼자 진행하며 AI 추천 흐름과 대화 저장 구조를 직접 구현했습니다.",
    ],
    tech: [
      {
        label: "Frontend",
        items: ["Next.js", "Node.js", "TypeScript", "Tailwind CSS"],
      },
      { label: "State", items: ["Zustand"] },
      { label: "Backend", items: ["FastAPI"] },
      { label: "AI", items: ["OpenAI API"] },
    ],
    features: [
      "챗봇 기반 코디 추천",
      "스타일 선택 모달",
      "위치·날씨 정보 반영",
      "추천 결과 카드 UI",
      "대화 저장 및 조회",
    ],
    architecture: [
      "User → Next.js Frontend",
      "Frontend → FastAPI Server",
      "FastAPI → OpenAI API",
      "Response Data → Zustand Store",
      "Store → UI Rendering",
    ],
    problems: [
      {
        problem: "GPT 응답 지연",
        solution: "비동기 요청 구조를 개선하고 로딩 상태 UI를 추가했습니다.",
        result: "체감 대기 시간을 줄여 사용자 경험을 개선했습니다.",
      },
      {
        problem: "브라우저 전용 API 접근으로 인한 세션 복원 불안정",
        solution:
          "클라이언트 전용 분기 처리로 세션 복원과 렌더링이 안전하게 동작하도록 개선했습니다.",
        result: "SSR 환경에서도 세션 복원 흐름이 안정적으로 동작하도록 만들었습니다.",
      },
      {
        problem: "AI 응답 포맷의 비정형성",
        solution:
          "응답 데이터를 파싱해 프론트엔드에서 사용할 수 있는 일관된 데이터 구조로 변환했습니다.",
        result: "UI 예외 상황을 줄이고 추천 카드 렌더링 안정성을 높였습니다.",
      },
      {
        problem: "상태 관리 분리로 인한 UI 흐름 복잡도 증가",
        solution:
          "Zustand를 기능별 스토어로 분리해 채팅, 요약, 컨텍스트, 인증 흐름을 명확히 정리했습니다.",
        result: "추천 카드와 대화 상태를 안정적으로 연결할 수 있었습니다.",
      },
      {
        problem: "배포 장애 대응 (EC2 공인 IP 변경)",
        solution:
          "EC2 재시작 시 공인 IP가 바뀌는 구조를 확인하고 Elastic IP를 연결해 고정 IP로 운영했습니다.",
        result:
          "배포 후에도 안정적으로 서비스 연결을 유지하며 운영 이슈 대응 경험을 쌓았습니다.",
      },
    ],
    learnings: [
      "개인 프로젝트에서 아이디어 정의부터 화면 설계, 상태 관리, 백엔드 API, 배포까지 전체 흐름을 직접 경험했습니다.",
      "Zustand, TypeScript, Tailwind CSS를 실제 서비스 구조 안에서 더 깊게 다루며 AI 응답과 UI 상태를 연결하는 방식을 정리했습니다.",
      "이전 프로젝트에서 접했던 Flask와 AI 기능을 확장해, 실제 사용자 흐름을 가진 서비스 형태로 구현하는 경험을 쌓았습니다.",
    ],
    links: [
      { label: "Live Demo", href: "https://aura-ai-three-kappa.vercel.app/" },
      { label: "GitHub", href: "https://github.com/kth3220/aura-ai" },
    ],
    images: [
      { label: "메인 화면", filename: "aura-main.png" },
      { label: "반응형 메인", filename: "aura-main-long.png" },
      { label: "스타일 선택 모달", filename: "aura-modal-style.png" },
      { label: "채팅 결과", filename: "aura-chat-result.png" },
      { label: "다크 모드", filename: "aura-chat-dark.png" },
      { label: "마이페이지", filename: "aura-mypage.png" },
    ],
    summary: [
      { label: "형태", value: "개인 프로젝트" },
      { label: "기간", value: "2025.12 ~ 2026.02" },
      {
        label: "역할",
        value: "기획 · 화면 설계 · 프론트엔드 · 백엔드 API · 배포",
      },
      { label: "핵심", value: "AI 추천 흐름과 대화 저장 구조 설계" },
    ],
    tags: ["Next.js", "Node.js", "FastAPI", "OpenAI API", "Zustand"],
  },
  market: {
    title: "MarketUpdate",
    subtitle: "실시간 채팅 기반 중고 거래 플랫폼",
    overview: [
      "실제 사용자가 많은 중고 거래 서비스의 기능과 디테일을 공부하기 위해 만든 학습형 팀 프로젝트입니다.",
      "5인 팀 프로젝트로 진행했고 기획은 2명이 함께 맡았으며, 저는 Figma 전 화면 설계와 프론트엔드 구현, API 항목 정리를 중심으로 참여했습니다.",
    ],
    tech: [
      {
        label: "Frontend",
        items: ["React", "Node.js", "Redux Toolkit", "React Router", "Axios"],
      },
      {
        label: "Backend",
        items: ["Spring Boot", "WebSocket(STOMP)", "MySQL", "Redis"],
      },
    ],
    features: [
      "상품 등록 및 상세 조회",
      "사용자 간 실시간 채팅",
      "관심상품 목록",
      "마이페이지 작성글 목록",
      "관리자 전용 공지사항",
      "위치 정보 반영",
    ],
    architecture: [
      "Client → Spring Boot REST API",
      "WebSocket(STOMP) → 실시간 채팅 UI 업데이트",
    ],
    problems: [
      {
        problem: "마이페이지 작성글 목록이 비어 보이던 문제",
        solution:
          "/mypage/my-product 응답 구조에 맞춰 바인딩 로직을 수정했습니다.",
        result: "작성글 목록이 정상 렌더링되어 탐색 흐름이 개선되었습니다.",
      },
      {
        problem: "기능이 많아지며 API 변수명과 데이터 항목이 헷갈리던 문제",
        solution:
          "Excel로 API 항목과 변수명을 정리해 팀이 같은 기준으로 확인할 수 있도록 맞췄습니다.",
        result:
          "프론트엔드와 백엔드가 같은 기준으로 작업할 수 있어 협업 혼선을 줄였습니다.",
      },
    ],
    learnings: [
      "Figma를 가장 디테일하게 사용한 프로젝트로, 단순 화면 제작을 넘어 서비스 흐름과 운영 기능까지 함께 설계해봤습니다.",
      "상품 탐색, 상세, 채팅, 공지사항, 관리자 계정처럼 실제 서비스 운영에 필요한 요소를 하나의 흐름 안에서 정리하는 경험을 쌓았습니다.",
      "기능이 많아질수록 문서화와 기준 정리가 중요하다는 점을 체감했고, Excel로 API 기준표를 맞추며 협업 방식을 보완했습니다.",
    ],
    images: [
      { label: "메인 화면", filename: "market-main-long.png" },
      { label: "게시글 작성", filename: "market-post-create.png" },
      { label: "게시글 상세", filename: "market-post-detail.png" },
      { label: "채팅", filename: "market-chat.png" },
      { label: "공지사항", filename: "market-notice.png" },
      { label: "마이페이지(프로필)", filename: "market-mypage-profile.png" },
      { label: "마이페이지(목록)", filename: "market-mypage-list.png" },
    ],
    summary: [
      { label: "형태", value: "팀 프로젝트 (5인)" },
      { label: "기간", value: "2024.08 ~ 2024.12" },
      {
        label: "역할",
        value: "기획 참여 · Figma 전 화면 설계 · 프론트엔드 · API 항목 정리",
      },
      { label: "핵심", value: "거래 흐름 설계와 협업 기준 정리" },
    ],
    tags: ["React", "Node.js", "Spring Boot", "WebSocket", "Chat"],
  },
  profit: {
    title: "ProfitPilot",
    subtitle: "AI 투자 시뮬레이션 웹 서비스",
    overview: [
      "실제 투자 전에 흐름을 연습해보고 싶은 주식 초보 사용자를 위해 만든 학습형 투자 시뮬레이션 서비스입니다.",
      "4인 팀 프로젝트에서 팀장으로서 Notion 회의록과 기획 정리를 맡고, UI/UX 설계(Figma), 실시간 데이터 UI 구현, 테마 전환과 피드백 UX 구성을 주도했습니다.",
    ],
    tech: [
      {
        label: "Frontend",
        items: ["JavaScript(ES Modules)", "HTML/CSS", "Chart.js"],
      },
      { label: "Template", items: ["Jinja"] },
      { label: "Backend", items: ["Flask"] },
    ],
    features: [
      "주식 매매",
      "거래 내역",
      "수익률 분석",
      "실시간 시세 반영",
      "AI 챗봇",
      "다크/라이트 테마 전환",
    ],
    architecture: [
      "실시간 데이터 수신 → 화면 상태 동기화",
      "차트/요약 카드 렌더링",
      "거래 정보 → 포트폴리오 반영",
    ],
    problems: [
      {
        problem: "정보 밀도가 높은 화면 구성",
        solution: "핵심 지표를 요약 카드와 차트로 분리해 화면을 정리했습니다.",
        result: "주식 초보 사용자도 주요 정보를 한눈에 이해하기 쉬워졌습니다.",
      },
      {
        problem: "실시간 데이터 누적 렌더링 부담",
        solution: "화면에 표시하는 데이터 개수 상한을 두었습니다.",
        result: "장시간 사용 시에도 반응성을 유지할 수 있었습니다.",
      },
      {
        problem: "테마 전환 시 초기 화면 깜빡임",
        solution:
          "저장된 테마를 초기 로드 단계에서 먼저 적용하도록 구성했습니다.",
        result: "첫 화면 경험을 더 안정적으로 제공할 수 있었습니다.",
      },
    ],
    learnings: [
      "처음으로 Python/Flask 기반 서비스 프로젝트를 진행하며 수업 수준을 넘어 실제 서비스 구조를 다루는 경험을 했습니다.",
      "팀장으로서 Notion 회의록, 기획 문서, 스토리보드 정리를 맡으며 문서화와 커뮤니케이션 기준의 중요성을 배웠습니다.",
      "개발환경 구성과 패키지 설치 과정의 시행착오를 겪으며 환경 세팅과 실시간 데이터 UI 운영 경험을 함께 쌓았습니다.",
    ],
    images: [
      { label: "메인 화면", filename: "profit-main.png" },
      { label: "다크 모드", filename: "profit-main-dark.png" },
      { label: "포트폴리오", filename: "profit-portfolio.png" },
      { label: "거래 화면", filename: "profit-trading.png" },
      { label: "거래 내역", filename: "profit-trades.png" },
      { label: "리더보드", filename: "profit-leaderboard.png" },
      { label: "AI 챗봇", filename: "profit-chatbot.png" },
    ],
    summary: [
      { label: "형태", value: "팀 프로젝트 (4인)" },
      { label: "기간", value: "2024.09 ~ 2024.12" },
      {
        label: "역할",
        value: "팀장 · 기획 문서화 · Figma 설계 · 실시간 데이터 UI 구현",
      },
      { label: "핵심", value: "주식 초보자를 위한 학습형 투자 흐름 설계" },
    ],
    tags: ["JavaScript", "Flask", "Chart.js", "Jinja"],
  },
  spa: {
    title: "Vanilla JS SPA",
    subtitle: "프레임워크 없이 구현한 SPA",
    overview: [
      "프레임워크 없이 SPA의 핵심 구조를 직접 구현하며 MPA와 SPA의 차이, 빠른 화면 전환, 재사용 가능한 코드 구조를 공부한 개인 프로젝트입니다.",
      "라우팅, 상태 관리, 렌더링 흐름을 직접 나누어 구현하면서 웹 애플리케이션 구조와 성능 관점을 이해하는 데 초점을 맞췄습니다.",
    ],
    tech: [
      { label: "Core", items: ["JavaScript", "History API"] },
      { label: "Pattern", items: ["Store", "Observer"] },
    ],
    features: [
      "라우팅",
      "상태 관리",
      "VDOM 렌더링",
      "로그인/로그아웃",
      "게시글 CRUD & 검색",
    ],
    architecture: [
      "History API 기반 라우터",
      "Global Store + Observer",
      "상태 변경 → UI 렌더링",
      "커스텀 JSX → VDOM → diff 업데이트",
    ],
    problems: [
      {
        problem: "새로고침 없이 화면 전환이 필요",
        solution: "History API 기반 라우터를 직접 구현했습니다.",
        result: "SPA 전환 흐름을 안정적으로 구성할 수 있었습니다.",
      },
      {
        problem: "로그인 상태에 따른 접근 제어 필요",
        solution: "AuthGuard와 ForbiddenError 처리를 적용했습니다.",
        result: "비로그인 접근을 제어하는 흐름을 정리했습니다.",
      },
      {
        problem: "상태 변경 시 수동 업데이트 부담",
        solution: "Store와 Observer 기반 자동 렌더링 구조를 구성했습니다.",
        result: "화면 갱신 흐름을 단순화하고 코드 재사용성을 높였습니다.",
      },
      {
        problem: "이벤트 중복 등록 가능성",
        solution: "이벤트 위임 방식으로 처리 비용을 줄였습니다.",
        result: "핸들러 관리 부담을 줄이고 구조를 단순화했습니다.",
      },
      {
        problem: "변경된 부분만 업데이트할 필요",
        solution:
          "VDOM diff 업데이트(renderElement/updateElement) 구조를 적용했습니다.",
        result: "부분 렌더링으로 불필요한 동작을 줄였습니다.",
      },
    ],
    learnings: [
      "라우팅, 상태 관리, 렌더링이 어떻게 연결되는지 직접 구현하며 SPA 동작 원리를 구조적으로 이해했습니다.",
      "같은 화면이라도 더 빠르게 렌더링되고 불필요한 동작을 줄이는 설계가 중요하다는 점을 배웠습니다.",
      "프레임워크 사용 이전에 웹 애플리케이션의 기본 동작 원리를 파악하는 데 도움이 된 프로젝트였습니다.",
    ],
    images: [
      { label: "메인 화면", filename: "vanilla-main.png" },
      { label: "검색/삭제", filename: "vanilla-edit.png" },
      { label: "로그인 화면", filename: "vanilla-login.png" },
    ],
    summary: [
      { label: "형태", value: "개인 프로젝트" },
      { label: "기간", value: "2025.10 ~ 2026.01" },
      { label: "역할", value: "구조 설계 · 상태/렌더링 구현" },
      { label: "핵심", value: "SPA 동작 원리와 성능 관점 학습" },
    ],
    tags: ["JavaScript", "Router", "Store"],
  },
};

export default function ProjectDetailPage() {
  const params = useParams();
  const rawSlug = params?.slug;
  const slugValue = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug;
  const slug = String(slugValue ?? "")
    .trim()
    .toLowerCase()
    .split("?")[0]
    .split("#")[0];
  const project = projectData[slug];
  const currentIndex = projectOrder.indexOf(
    slug as (typeof projectOrder)[number]
  );
  const safeIndex = currentIndex >= 0 ? currentIndex : 0;
  const nextSlug = projectOrder[(safeIndex + 1) % projectOrder.length];
  const nextProject = projectData[nextSlug];

  if (!project) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center text-gray-600 space-y-4">
          <p>프로젝트를 찾을 수 없습니다.</p>
          <Link
            href="/projects"
            className="inline-flex px-4 py-2 rounded-lg border border-gray-300 text-sm font-semibold text-gray-900 hover:border-blue-600 hover:text-blue-700"
          >
            프로젝트 목록으로 이동
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="py-12 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="text-sm text-blue-600 hover:underline">
            홈으로
          </Link>
          <Link
            href="/projects"
            className="text-sm text-gray-600 hover:text-blue-600"
          >
            프로젝트 목록
          </Link>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            {project.title}
          </h1>
          <p className="text-gray-600 mt-2">{project.subtitle}</p>

          {project.links && (
            <div className="mt-6 flex flex-wrap gap-3">
              {project.links.map((link) => {
                const isPrimary = link.label.toLowerCase().includes("live");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      isPrimary
                        ? "px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700"
                        : "px-4 py-2 rounded-lg border border-gray-300 text-sm font-semibold hover:border-blue-600 hover:text-blue-700"
                    }
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          )}

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {project.summary.map((item) => (
              <div
                key={item.label}
                className="p-4 rounded-xl border border-gray-200 bg-gray-50"
              >
                <p className="text-xs text-gray-500">{item.label}</p>
                <p className="font-semibold text-gray-900 mt-1">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">주요 화면</h2>
          <div className="mt-6">
            <ProjectImageGallery images={project.images} />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10">
          <aside className="hidden lg:block sticky top-24 self-start">
            <ProjectToc sections={tocSections} />
          </aside>

          <div className="space-y-12">
            <div id="overview">
              <h2 className="text-2xl font-bold text-gray-900">
                프로젝트 개요
              </h2>
              <div className="mt-4 space-y-2 text-gray-700">
                {project.overview.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>

            <div id="tech">
              <h2 className="text-2xl font-bold text-gray-900">기술 스택</h2>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.tech.map((group) => (
                  <div
                    key={group.label}
                    className="p-4 rounded-xl border border-gray-200"
                  >
                    <p className="font-semibold text-gray-900">
                      {group.label}
                    </p>
                    <p className="text-gray-600 text-sm mt-2">
                      {group.items.join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div id="features">
              <h2 className="text-2xl font-bold text-gray-900">주요 기능</h2>
              <div className="mt-4 text-gray-700 space-y-2">
                {project.features.map((item) => (
                  <p key={item}>• {item}</p>
                ))}
              </div>
            </div>

            <div id="architecture">
              <h2 className="text-2xl font-bold text-gray-900">아키텍처</h2>
              <div className="mt-4 text-gray-700 space-y-2">
                {project.architecture.map((item) => (
                  <p key={item}>• {item}</p>
                ))}
              </div>

              {slug === "aura" && (
                <div className="mt-6 space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-blue-600 mb-3">
                      Architecture Diagram
                    </p>
                    <div className="rounded-2xl border border-blue-100 bg-white p-4 shadow-sm">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-blue-900">
                        <div className="rounded-xl border border-blue-200 bg-blue-50 px-3 py-2">
                          User
                        </div>
                        <div className="rounded-xl border border-blue-200 bg-blue-50 px-3 py-2">
                          Next.js Frontend
                        </div>
                        <div className="rounded-xl border border-blue-200 bg-blue-50 px-3 py-2">
                          FastAPI Server
                        </div>
                        <div className="rounded-xl border border-blue-200 bg-blue-50 px-3 py-2">
                          OpenAI API
                        </div>
                        <div className="rounded-xl border border-blue-200 bg-blue-50 px-3 py-2">
                          Response Data
                        </div>
                        <div className="rounded-xl border border-blue-200 bg-blue-50 px-3 py-2">
                          Zustand Store
                        </div>
                        <div className="rounded-xl border border-blue-200 bg-blue-50 px-3 py-2">
                          UI Rendering
                        </div>
                      </div>
                      <p className="mt-3 text-xs text-gray-500">
                        User → Next.js Frontend → FastAPI → OpenAI → Response →
                        Zustand Store → UI
                      </p>
                    </div>
                  </div>
                  <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
                    <p className="text-xs font-semibold text-blue-700 mb-3">
                      Flow
                    </p>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-blue-900 font-semibold">
                      <span className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white border border-blue-200">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-3.5 w-3.5 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        >
                          <circle cx="12" cy="8" r="3.2" />
                          <path d="M5 19c1.8-3.2 12.2-3.2 14 0" />
                        </svg>
                        User Input
                      </span>
                      <span className="text-blue-400">→</span>
                      <span className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white border border-blue-200">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-3.5 w-3.5 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        >
                          <circle cx="12" cy="12" r="8" />
                          <path d="M4 12h16M12 4c2.8 3 2.8 13 0 16M12 4c-2.8 3-2.8 13 0 16" />
                        </svg>
                        FastAPI Request
                      </span>
                      <span className="text-blue-400">→</span>
                      <span className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white border border-blue-200">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-3.5 w-3.5 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        >
                          <rect x="5" y="7" width="14" height="10" rx="2" />
                          <path d="M9 11h.01M15 11h.01M8 17v2M16 17v2M12 4v3" />
                        </svg>
                        AI Response
                      </span>
                      <span className="text-blue-400">→</span>
                      <span className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white border border-blue-200">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-3.5 w-3.5 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        >
                          <path d="M6 10c0-3.5 12-3.5 12 0s-12 3.5-12 0Z" />
                          <path d="M6 10v6c0 2 12 2 12 0v-6" />
                        </svg>
                        Zustand Store
                      </span>
                      <span className="text-blue-400">→</span>
                      <span className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white border border-blue-200">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-3.5 w-3.5 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        >
                          <path d="M4 7h16v10H4z" />
                          <path d="M7 10h6M7 13h10" />
                        </svg>
                        UI Update
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div id="problems">
              <h2 className="text-2xl font-bold text-gray-900">문제 해결</h2>
              <div className="mt-4 space-y-4">
                {project.problems.map((item) => (
                  <div
                    key={item.problem}
                    className={`p-6 rounded-2xl border border-gray-200 bg-white transition-all duration-300 ${
                      slug === "aura"
                        ? "hover:border-blue-200 hover:shadow-lg"
                        : "hover:border-gray-300 hover:shadow-lg"
                    }`}
                  >
                    <p className="font-semibold text-gray-900">
                      {item.problem}
                    </p>
                    <p className="text-gray-600 text-sm mt-2">
                      <span
                        className={`font-semibold ${
                          slug === "aura" ? "text-blue-600" : "text-gray-700"
                        }`}
                      >
                        해결{" "}
                      </span>
                      {item.solution}
                    </p>
                    <p className="text-gray-600 text-sm mt-1">
                      <span
                        className={`font-semibold ${
                          slug === "aura" ? "text-blue-600" : "text-gray-700"
                        }`}
                      >
                        결과{" "}
                      </span>
                      {item.result}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div id="learnings">
              <h2 className="text-2xl font-bold text-gray-900">배운 점</h2>
              <div className="mt-4 space-y-2 text-gray-700">
                {project.learnings.map((item) => (
                  <p key={item}>• {item}</p>
                ))}
              </div>
            </div>

            <div className="mt-6 p-6 rounded-2xl border border-gray-200 bg-white">
              <p className="text-sm text-gray-500">Next Project</p>
              <h3 className="text-lg font-bold text-gray-900 mt-2">
                {nextProject.title}
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                {nextProject.subtitle}
              </p>
              <Link
                href={`/projects/${nextSlug}`}
                className="inline-flex mt-4 px-4 py-2 rounded-lg border border-gray-300 text-gray-900 text-sm font-semibold hover:border-blue-600 hover:text-blue-700"
              >
                다음 프로젝트 보기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
