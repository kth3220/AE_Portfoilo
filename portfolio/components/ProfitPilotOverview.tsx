"use client";

export default function ProfitPilotOverview() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-100/30 to-emerald-100/30 blur-2xl" />
              <div className="relative flex items-center justify-center rounded-2xl border-2 border-gray-200 bg-white p-12 shadow-lg">
                <img
                  src="/profit-main.png"
                  alt="주식 매매 화면"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold text-emerald-600">ProfitPilot</p>
              <h2 className="mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                프로젝트 개요
              </h2>
              <p className="mb-4 text-xl font-semibold text-gray-700">
                AI 투자 시뮬레이션 웹 서비스
              </p>
              <p className="leading-relaxed text-gray-600">
                AI 챗봇과 대화하며 가상 주식을 매매하고, 실시간 시세 / 거래 내역 /
                수익률을 확인할 수 있는 서비스입니다.
              </p>
            </div>

            <div className="space-y-2 text-gray-700">
              <p className="font-semibold">프로젝트 정보</p>
              <p className="text-sm text-gray-600">
                팀 프로젝트(4인) / UI·UX 기획 / Figma 디자인 / 화면 구현
              </p>
              <p className="mt-3 font-semibold">기획 및 수행 내용</p>
              <p className="text-sm text-gray-600">
                서비스 초기 아이디어를 제안하고 투자 시뮬레이션과 AI 챗봇이 결합된
                웹서비스 방향을 기획했습니다.
              </p>
              <p className="text-sm text-gray-600">
                4인 팀 프로젝트에서 UI/UX 기획과 Figma 기반 화면 설계를 주도하고 핵심
                화면 구현을 담당했습니다.
              </p>
              <p className="text-sm text-gray-600">
                홈, 마켓, 포트폴리오, 리더보드, AI 챗봇 화면의 정보 우선순위와 사용자
                흐름을 정리했습니다.
              </p>
              <p className="text-sm text-gray-600">
                Notion으로 작업 흐름과 회의 내용을 문서화하고, 실시간 데이터 연동과
                피드백 구조를 반영했습니다.
              </p>
            </div>

            <div className="text-sm text-gray-600">
              사용 기술: JavaScript (ES Modules) / Flask / Chart.js / HTML/CSS
            </div>

            <div className="rounded-lg border-l-4 border-emerald-600 bg-emerald-50 p-4 text-sm text-emerald-900">
              임팩트: 정보 우선순위와 사용자 흐름을 다시 정리해 투자 학습용
              웹서비스의 화면 일관성과 사용성을 높였습니다.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
