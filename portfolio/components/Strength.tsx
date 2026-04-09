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
        "기능 구현 전에 목적, 사용자 행동, 예외 케이스를 먼저 정리했습니다. 화면 흐름과 데이터 흐름 기준으로 요구사항을 구조화했습니다.",
      icon: "📌",
    },
    {
      title: "Flow Planning",
      description:
        "Figma와 실제 구현 경험을 바탕으로 주요 화면의 우선순위와 연결 방식을 설계했습니다. 전환 흐름이 끊기지 않도록 구조를 다듬었습니다.",
      icon: "🗺️",
    },
    {
      title: "Communication",
      description:
        "기획, 디자인, 개발을 모두 경험해 각 관점의 언어를 연결할 수 있습니다. 수정 포인트와 이슈를 작업 단위로 명확하게 정리했습니다.",
      icon: "🤝",
    },
    {
      title: "Execution & QA",
      description:
        "직접 구현과 검증까지 해본 만큼 문제 재현 조건과 원인을 빠르게 좁히는 편입니다. 운영 중 발생할 수 있는 예외와 후속 대응까지 함께 고려했습니다.",
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
            요구사항 정의, 흐름 설계, 커뮤니케이션, 운영 관점에서 역량을 정리했습니다.
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
                <p className="text-gray-600 leading-relaxed text-sm">
                  {strength.description}
                </p>
                {strength.extra && (
                  <p className="text-gray-600 leading-relaxed text-sm mt-3">
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
