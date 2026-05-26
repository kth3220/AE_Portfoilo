"use client";

export default function DevelopmentPhilosophy() {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <p className="text-sm font-semibold text-blue-600">Philosophy</p>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
            일하는 방식
          </h2>
          <div className="text-xl text-gray-700 leading-relaxed space-y-4">
            <p>
              먼저 서비스가 해결하려는 문제와 사용자 흐름을 정리하고, 그다음
              화면 구조와 데이터 흐름으로 구체화하는 방식으로 작업합니다.
            </p>
            <p>
              필요한 경우 Figma, Notion, Excel로 기준을 문서화해 구현 과정에서
              빠지는 정보가 없도록 맞추는 것을 중요하게 생각합니다.
            </p>
            <p>
              직접 구현해보며 구조가 실제로 어떻게 동작하는지 확인하고, 운영 중
              발생할 수 있는 문제까지 함께 보는 태도를 유지하고 싶습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
