"use client";

export default function Strength() {
  const strengths: {
    title: string;
    description: string;
    icon: string;
    extra?: string;
  }[] = [
    {
      title: "Requirement Definition",
      description:
        "사용자 시나리오, 기능 범위, 예외 케이스를 먼저 정리해 요구사항을 실행 가능한 단위로 구체화했습니다.",
      icon: "📌",
    },
    {
      title: "Communication & PM",
      description:
        "기획, 디자인, 개발을 모두 경험해 각 관점의 언어를 연결할 수 있습니다. 수정 포인트와 일정, 이슈를 작업 단위로 정리했습니다.",
      icon: "🗺️",
    },
    {
      title: "Planning Deliverables",
      description:
        "Figma, Notion, Google Sheets, Excel, PowerPoint를 활용해 화면 구조, API 항목, 회의 내용, 진행 현황을 문서화했습니다.",
      icon: "🤝",
    },
    {
      title: "Operation & QA",
      description:
        "직접 구현과 배포를 경험해 운영 중 발생할 수 있는 예외와 수정 포인트를 함께 봅니다. 점검과 후속 대응까지 고려해 구조를 다듬었습니다.",
      icon: "🔎",
    },
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm font-semibold text-blue-600">Strength</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            핵심 역량 & 작업 방식
          </h2>
          <p className="mt-3 text-gray-600">
            요구사항 정의, 기획 산출물 작성, 협업 커뮤니케이션, 운영 관점에서 강점을 정리했습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strengths.map((strength, index) => {
            const gradients = [
              "from-blue-500 to-cyan-500",
              "from-purple-500 to-pink-500",
              "from-orange-500 to-red-500",
              "from-emerald-500 to-teal-500",
            ];
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {strength.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {strength.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm break-keep">
                  {strength.description}
                </p>
                {strength.extra && (
                  <p className="text-gray-600 leading-relaxed text-sm mt-3 break-keep">
                    {strength.extra}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
