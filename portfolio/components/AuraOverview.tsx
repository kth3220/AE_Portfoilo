"use client";

export default function AuraOverview() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
          <div className="order-2 space-y-8 lg:order-1">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                Featured Project
              </div>
              <p className="text-sm font-semibold text-blue-600">Aura.ai</p>
              <h2 className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                프로젝트 개요
              </h2>
              <p className="mb-4 text-xl font-semibold text-gray-700">
                AI 기반 패션 코디 추천 서비스
              </p>
              <p className="leading-relaxed text-gray-600">
                사용자의 입력과 날씨 / 위치 / 스타일 정보를 기반으로 코디를 추천하는
                웹 서비스입니다.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-blue-600">기획 및 수행 내용</h3>
              <p className="font-semibold text-gray-700">개인 프로젝트 (100%)</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✔</span> 서비스 기획, Figma 기반
                  UX/UI 디자인, 프론트엔드, FastAPI API, 배포까지 전 과정 수행
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✔</span> 날씨, 위치, 스타일
                  선택값을 저장하고 추천이 이어지는 사용자 흐름과 핵심 기능 정의
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✔</span> 대화 요약과 채팅 /
                  세션 저장 구조를 설계하며 서비스 전체 흐름 경험
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✔</span> 배포 이후에도 서비스 흐름과
                  기능 동작을 점검하며 운영 관점의 개선 포인트 확인
                </li>
              </ul>
            </div>

            <div className="text-sm text-gray-600">
              사용 기술: Next.js / Node.js / TypeScript / Zustand / FastAPI /
              OpenAI API
            </div>

            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-4 text-sm text-blue-900">
              임팩트: 추천 흐름, 대화 요약, 세션 저장 구조를 하나의 서비스 경험으로
              정리하며 기획부터 운영 관점까지 직접 연결했습니다.
            </div>
            <p className="text-sm text-gray-600">
              사용자 입력 → AI 추천 생성 → Zustand 상태 저장 → 추천 카드 UI 렌더링
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://aura-ai-three-kappa.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="animate-[pulse_2.5s_ease-in-out_infinite] rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 ring-2 ring-blue-200/60 transition-colors hover:bg-blue-700"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/kth3220/aura-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-900 transition-colors hover:border-blue-600 hover:text-blue-700"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="order-1 flex items-center justify-center lg:order-2">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-100/30 to-purple-100/30 blur-2xl" />
              <div className="relative flex items-center justify-center rounded-2xl border-2 border-gray-200 bg-white p-12 shadow-lg">
                <img
                  src="/aura-main.png"
                  alt="Aura.ai 챗봇 메인 UI"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
