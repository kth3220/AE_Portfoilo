"use client";

import InteractiveProjectImage from "@/components/InteractiveProjectImage";

export default function MarketUpdateOverview() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/30 to-blue-100/30 rounded-2xl blur-2xl" />
              <div className="relative rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-lg">
                <InteractiveProjectImage
                  src="/market-main-long.png"
                  alt="MarketUpdate 상품 리스트 화면"
                  className="h-[320px] md:h-[380px]"
                  fit="contain"
                  detailHref="/projects/market"
                />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold text-cyan-600">
                MarketUpdate
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                프로젝트 개요
              </h2>
              <p className="text-xl text-gray-700 font-semibold mb-4">
                중고 거래 플랫폼 학습 프로젝트
              </p>
              <p className="text-gray-600 leading-relaxed">
                실제 사용자가 많은 중고 거래 서비스의 흐름과 디테일을 공부하기
                위해, 상품 등록부터 채팅, 공지사항, 관리자 계정, 위치 정보까지
                함께 다룬 프로젝트입니다.
              </p>
            </div>

            <div className="space-y-2 text-gray-700">
              <p className="font-semibold">프로젝트 형태</p>
              <p>팀 프로젝트 (5인) · 2024.08 ~ 2024.12</p>
              <p>기획 2인 협업 / 디자인 단독 / 프론트엔드 담당</p>
              <p className="font-semibold mt-3">담당 역할</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Figma 기반 전 화면 구조 설계</li>
                <li>• 상품 목록, 상세, 채팅, 공지사항, 마이페이지 화면 구현</li>
                <li>• 관리자 전용 계정과 운영 기능 흐름 반영</li>
                <li>• API 변수명과 데이터 항목 기준 정리</li>
              </ul>
            </div>

            <div className="text-sm text-gray-600">
              사용 기술: React / Node.js / Redux Toolkit / Spring Boot /
              WebSocket(STOMP)
            </div>

            <div className="p-4 rounded-lg bg-cyan-50 border-l-4 border-cyan-600 text-sm text-cyan-900">
              임팩트: 상품 탐색 → 상세 → 채팅 흐름을 정리하고 Excel 기준표로
              API 항목 협업 혼선을 줄였습니다.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
