"use client";

import InteractiveProjectImage from "@/components/InteractiveProjectImage";

export default function AuraOverview() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 border border-blue-100 mb-3">
                Featured Project
              </div>
              <p className="text-sm font-semibold text-blue-600">Aura.ai</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                프로젝트 개요
              </h2>
              <p className="text-xl text-gray-700 font-semibold mb-4">
                AI 기반 패션 코디 추천 챗봇 서비스
              </p>
              <p className="text-gray-600 leading-relaxed">
                아침마다 옷을 고르는 데 걸리는 시간을 줄이고, 날씨와 위치,
                스타일 조건까지 함께 반영한 추천을 받고 싶다는 개인적인 필요에서
                출발한 서비스입니다.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-blue-600">담당 범위</h3>
              <p className="text-gray-700 font-semibold">
                개인 프로젝트 · 2025.12 ~ 2026.02
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✔</span> 서비스 기획
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✔</span> UI 디자인
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✔</span> 프론트엔드 개발
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✔</span> 백엔드 API 구현
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✔</span> 배포 (Vercel / AWS EC2)
                </li>
              </ul>
            </div>

            <div className="text-sm text-gray-600">
              사용 기술: Next.js / Node.js / TypeScript / Zustand / FastAPI /
              OpenAI API
            </div>

            <div className="p-4 rounded-lg bg-blue-50 border-l-4 border-blue-600 text-sm text-blue-900">
              임팩트: 날씨·위치·스타일 정보를 반영한 AI 추천 흐름과 대화 저장
              구조를 직접 설계하고 구현했습니다.
            </div>
            <p className="text-sm text-gray-600">
              사용자 입력 → AI 추천 생성 → Zustand 상태 저장 → 추천 카드 UI
              렌더링
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://aura-ai-three-kappa.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20 ring-2 ring-blue-200/60 animate-[pulse_2.5s_ease-in-out_infinite]"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/kth3220/aura-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-900 text-sm font-semibold hover:border-blue-600 hover:text-blue-700 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-2xl blur-2xl" />
              <div className="relative rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-lg">
                <InteractiveProjectImage
                  src="/aura-main.png"
                  alt="Aura.ai 챗봇 메인 UI"
                  className="h-[320px] md:h-[380px]"
                  fit="contain"
                  detailHref="/projects/aura"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
