"use client";

import InteractiveProjectImage from "@/components/InteractiveProjectImage";

export default function VanillaSPA() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/30 to-orange-100/30 rounded-2xl blur-2xl" />
              <div className="relative rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-lg">
                <InteractiveProjectImage
                  src="/vanilla-main.png"
                  alt="Vanilla SPA 메인 UI"
                  className="h-[320px] md:h-[380px]"
                  fit="contain"
                  detailHref="/projects/spa"
                />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold text-amber-600">Vanilla SPA</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                프로젝트 개요
              </h2>
              <p className="text-xl text-gray-700 font-semibold mb-4">
                Vanilla JavaScript 기반 SPA 구현 프로젝트
              </p>
              <p className="text-gray-600 mb-6">
                프레임워크 없이 SPA의 핵심 구조를 직접 구현하며, MPA와 SPA의
                차이와 더 빠른 화면 전환, 재사용 가능한 코드 구조를 공부한
                프로젝트입니다.
              </p>
            </div>

            <p className="text-gray-700">
              라우팅, 상태 관리, 렌더링 흐름을 직접 나누어 구현하면서 웹
              애플리케이션 구조와 성능 관점을 더 깊게 이해할 수 있었습니다.
            </p>
            <p className="text-sm text-gray-600">
              개인 프로젝트 · 2025.10 ~ 2026.01
            </p>
            <p className="text-sm text-gray-600">
              역할: 구조 설계 / 핵심 로직 구현
            </p>
            <p className="text-sm text-gray-600">
              사용 기술: JavaScript / History API / Custom JSX / VDOM Diff
            </p>

            <div className="p-4 rounded-lg bg-amber-50 border-l-4 border-amber-600 text-sm text-amber-900">
              임팩트: 같은 화면이라도 더 빠르게 렌더링되고 불필요한 동작을
              줄이는 구조를 직접 설계하며 성능 관점을 학습했습니다.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
