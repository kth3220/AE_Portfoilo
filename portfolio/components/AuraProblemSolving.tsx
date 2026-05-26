"use client";

export default function AuraProblemSolving() {
  const problems = [
    {
      problem: "GPT 응답 지연",
      cause: "API 응답 시간이 길어 UI 반응 속도가 느려졌습니다.",
      solution:
        "비동기 요청 구조를 개선하고 로딩 상태 UI를 추가하여 사용자 경험을 개선했습니다.",
      impact: "체감 대기 시간을 줄여 사용자 경험을 개선했습니다.",
    },
    {
      problem: "브라우저 전용 API 접근으로 인한 세션 복원 불안정",
      cause: "SSR 환경에서는 window 같은 브라우저 객체에 바로 접근할 수 없습니다.",
      solution:
        "클라이언트 전용 분기 처리로 세션 복원과 렌더링이 안전하게 동작하도록 개선했습니다.",
      impact: "SSR 환경에서도 세션 복원 흐름이 안정적으로 동작하도록 만들었습니다.",
    },
    {
      problem: "AI 응답 포맷의 비정형성",
      cause: "AI 응답 데이터 구조가 일정하지 않았습니다.",
      solution:
        "응답 데이터를 파싱해 프론트엔드에서 사용할 수 있는 일관된 데이터 구조로 변환했습니다.",
      impact: "UI 예외 상황을 줄이고 추천 카드 렌더링 안정성을 높였습니다.",
    },
    {
      problem: "상태 관리 분리로 인한 UI 흐름 복잡도 증가",
      cause: "추천 결과와 챗봇 상태가 분리되어 UI 업데이트 흐름이 복잡했습니다.",
      solution:
        "Zustand를 기능별 스토어(채팅/요약/컨텍스트/인증)로 분리해 상태 흐름을 명확히 정리했습니다.",
      impact: "추천 카드 렌더링 흐름을 안정적으로 관리할 수 있었습니다.",
    },
    {
      problem: "배포 장애 대응 (EC2 공인 IP 변경)",
      cause: "EC2 인스턴스 재시작 이후 공인 IP가 변경되며 서비스 연결이 끊어졌습니다.",
      solution:
        "EC2 재시작 시 공인 IP가 바뀌는 구조를 확인하고 Elastic IP를 연결해 고정 IP로 운영했습니다.",
      impact:
        "배포 후에도 안정적으로 서비스 연결을 유지하며 운영 이슈 대응 경험을 쌓았습니다.",
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-blue-600">Aura.ai</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          문제 해결
        </h2>
        <p className="mt-3 text-gray-600">
          문제-원인-해결-결과 흐름으로 정리했습니다.
        </p>

        <div className="space-y-6">
          {problems.map((item) => (
            <div
              key={item.problem}
              className="p-6 rounded-2xl border border-gray-200 bg-white hover:border-blue-200 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.problem}
              </h3>
              <p className="text-gray-600 text-sm">
                <span className="font-semibold text-gray-900">원인 </span>
                {item.cause}
              </p>
              <p className="text-gray-600 text-sm mt-2">
                <span className="font-semibold text-blue-600">해결 </span>
                {item.solution}
              </p>
              <p className="text-gray-600 text-sm mt-2">
                <span className="font-semibold text-blue-600">결과 </span>
                {item.impact}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
