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
      cause:
        "초기 렌더링 단계에서 window/localStorage 접근이 섞이며 세션 복원 타이밍이 흔들렸습니다.",
      solution:
        "브라우저 전용 API 접근을 클라이언트로 한정해 세션 복원 로직의 실행 시점을 분리했습니다.",
      impact: "새로고침 이후 세션 복원 흐름을 안정화했습니다.",
    },
    {
      problem: "AI 응답 포맷의 비정형성",
      cause:
        "모델 응답의 키와 배열 구조가 일정하지 않아 추천 UI 처리 분기가 늘어났습니다.",
      solution:
        "응답을 정규화하는 파서 레이어를 두어 프론트엔드와 Zustand 스토어가 소비할 수 있는 공통 구조로 변환했습니다.",
      impact: "추천 UI와 상태 관리의 일관성을 확보하고 예외 상황을 줄였습니다.",
    },
    {
      problem: "상태 관리 분리로 인한 UI 흐름 복잡도 증가",
      cause:
        "추천 결과와 챗봇 상태가 분리되어 UI 업데이트 흐름이 복잡했습니다.",
      solution:
        "Zustand를 기능별 스토어(채팅/요약/컨텍스트/인증)로 나누고 책임 경계를 정리했습니다.",
      impact: "추천 결과와 대화 상태의 업데이트 경로를 명확히 했습니다.",
    },
    {
      problem: "배포 장애 대응 (EC2 공인 IP 변경)",
      cause:
        "EC2 인스턴스 재시작 이후 공인 IP가 변경되며 서비스 연결이 끊어졌습니다.",
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
