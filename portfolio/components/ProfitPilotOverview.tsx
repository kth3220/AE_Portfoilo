"use client";

import InteractiveProjectImage from "@/components/InteractiveProjectImage";

export default function ProfitPilotOverview() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 to-emerald-100/30 rounded-2xl blur-2xl" />
              <div className="relative rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-lg">
                <InteractiveProjectImage
                  src="/profit-main.png"
                  alt="ProfitPilot 주식 매매 화면"
                  className="h-[320px] md:h-[380px]"
                  fit="contain"
                  detailHref="/projects/profit"
                />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold text-emerald-600">
                ProfitPilot
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                프로젝트 개요
              </h2>
              <p className="text-xl text-gray-700 font-semibold mb-4">
                AI 투자 시뮬레이션 웹 서비스
              </p>
              <p className="text-gray-600 leading-relaxed">
                실제 투자 전에 흐름을 연습해보고 싶은 주식 초보 사용자를 위해,
                실시간 시세와 거래 내역, 수익률 변화를 한 화면에서 확인할 수
                있도록 구성한 학습형 서비스입니다.
              </p>
            </div>

            <div className="space-y-2 text-gray-700">
              <p className="font-semibold">담당 역할</p>
              <p>팀 프로젝트 (4인) · 2024.09 ~ 2024.12</p>
              <p className="text-sm text-gray-600">
                팀장으로서 Notion 회의록과 기획 정리를 맡고 UI/UX 기획 및 화면
                설계(Figma)를 주도했습니다.
              </p>
              <p className="text-sm text-gray-600">
                홈, 마켓, 포트폴리오, 리더보드, AI 챗봇 화면을 구현했습니다.
              </p>
              <p className="text-sm text-gray-600">
                실시간 데이터 연동과 상태 동기화를 다뤘습니다.
              </p>
              <p className="text-sm text-gray-600">
                다크/라이트 테마 전환과 Toast 기반 피드백 UX를 구성했습니다.
              </p>
              <p className="text-sm text-gray-600">
                공통 스타일 구조를 정리하고 인터랙션 일관성을 맞췄습니다.
              </p>
            </div>

            <div className="text-sm text-gray-600">
              사용 기술: JavaScript (ES Modules) / Flask / Chart.js / HTML/CSS
            </div>

            <div className="p-4 rounded-lg bg-emerald-50 border-l-4 border-emerald-600 text-sm text-emerald-900">
              임팩트: 주식 초보자가 거래 흐름과 자산 변화를 한눈에 이해할 수
              있도록 실시간 데이터와 피드백 UI를 정리했습니다.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
