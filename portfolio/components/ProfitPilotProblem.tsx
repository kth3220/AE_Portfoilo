"use client";

export default function ProfitPilotProblem() {
  const items = [
    {
      title: "정보 밀도가 높은 화면 구성",
      fix: "핵심 지표를 요약 카드와 차트로 분리해 초보 사용자도 흐름을 이해하기 쉽게 정리했습니다.",
    },
    {
      title: "실시간 데이터 누적 렌더링 부담",
      fix: "화면에 표시하는 데이터 개수 상한을 두어 장시간 사용 시에도 반응성을 유지했습니다.",
    },
    {
      title: "테마 전환 시 초기 화면 깜빡임",
      fix: "저장된 테마를 초기 로드 단계에서 먼저 적용해 첫 화면 경험을 안정화했습니다.",
    },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-emerald-600">ProfitPilot</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
          문제 해결
        </h2>
        <p className="mt-3 text-gray-600">
          실시간 데이터 화면에서 사용 흐름이 끊기지 않도록 정리한 개선
          사항입니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl border border-gray-200 bg-white hover:border-emerald-200 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                <span className="font-semibold text-emerald-600">해결 </span>
                {item.fix}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
