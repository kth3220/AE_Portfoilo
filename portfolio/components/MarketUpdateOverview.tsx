"use client";

export default function MarketUpdateOverview() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-100/30 to-blue-100/30 blur-2xl" />
              <div className="relative flex items-center justify-center rounded-2xl border-2 border-gray-200 bg-white p-12 shadow-lg">
                <img
                  src="/market-main-long.png"
                  alt="상품 리스트 화면"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold text-cyan-600">MarketUpdate</p>
              <h2 className="mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                프로젝트 개요
              </h2>
              <p className="mb-4 text-xl font-semibold text-gray-700">
                중고 거래 플랫폼 웹 서비스
              </p>
              <p className="leading-relaxed text-gray-600">
                사용자가 상품을 등록하고 다른 사용자와 채팅을 통해 거래를 진행할 수
                있는 서비스입니다.
              </p>
            </div>

            <div className="space-y-2 text-gray-700">
              <p className="font-semibold">프로젝트 정보</p>
              <p>팀 프로젝트(5인)</p>
              <p>기획 참여 / 웹디자인 단독 / 화면 구현 협업</p>
              <p className="mt-3 font-semibold">기획 및 수행 내용</p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>
                  • 상품 목록, 상세, 채팅, 마이페이지, FAQ, Notice 등 주요 화면의
                  사용자 흐름과 기능 범위를 정리했습니다.
                </li>
                <li>
                  • 웹디자인을 단독으로 담당하며 Figma로 전 화면 UX/UI를 설계하고 화면
                  목적과 정보 구조를 구체화했습니다.
                </li>
                <li>
                  • 프론트엔드 2인 중 1인으로 참여하며 React 기반 화면 구현과 API
                  연동을 맡았습니다.
                </li>
                <li>
                  • Google 스프레드시트로 API 항목을 정리하고, 연동 범위와 화면 목적을
                  조율해 구현까지 연결했습니다.
                </li>
              </ul>
            </div>

            <div className="text-sm text-gray-600">
              사용 기술: React / Node.js / Redux Toolkit / Spring Boot /
              WebSocket(STOMP)
            </div>

            <div className="rounded-lg border-l-4 border-cyan-600 bg-cyan-50 p-4 text-sm text-cyan-900">
              임팩트: 화면 목적과 정보 구조를 명확하게 정리해 상품 탐색부터 채팅까지
              이어지는 흐름을 더 자연스럽게 만들었습니다.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
