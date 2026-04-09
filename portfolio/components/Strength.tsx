"use client";

export default function Strength() {
  const strengths = [
    {
      title: "사이트 운영",
      description:
        "포트폴리오와 블로그를 직접 운영하며 정보 구조를 정리하고, 콘텐츠 배치와 링크 동선을 관리했습니다.",
      icon: "🗂️",
      evidence:
        "운영 채널을 직접 관리하며 어떤 정보가 먼저 보여야 하는지, 어떤 순서로 이동해야 자연스러운지 계속 점검했습니다.",
    },
    {
      title: "협업 / PM",
      description:
        "ProfitPilot에서는 Notion으로 작업 흐름과 회의 내용을 정리했고, MarketUpdate에서는 Google 스프레드시트로 API 항목을 정리했습니다.",
      icon: "🤝",
      evidence:
        "Excel, PowerPoint를 포함한 문서화 도구를 활용해 수정 사항과 진행 상태를 기준화했습니다.",
    },
    {
      title: "요구사항 정의",
      description:
        "사용자 시나리오 정리, 기능 흐름 설계, 화면 구조 정의, 예외 케이스 구체화를 프로젝트마다 직접 수행했습니다.",
      icon: "📐",
      evidence:
        "기능 구현 전에 화면 목적과 데이터 흐름을 먼저 정리해 재작업을 줄이는 방식으로 일해 왔습니다.",
    },
    {
      title: "개발 이해",
      description:
        "HTML/CSS, JavaScript, React, Next.js, Python, FastAPI, REST API, MySQL 구조를 이해하고 있습니다.",
      icon: "🧠",
      evidence:
        "개발자와 화면과 데이터 흐름 기준으로 소통할 수 있어 요구사항 조율과 이슈 설명에 강점이 있습니다.",
    },
    {
      title: "도구 활용",
      description:
        "Figma, Git, GitHub, Notion, Google 스프레드시트, Excel, PowerPoint, AWS EC2, Vercel을 실제 프로젝트에 사용했습니다.",
      icon: "🛠️",
      evidence:
        "기획 산출물 정리, 협업 커뮤니케이션, 배포와 운영 점검까지 도구를 목적에 맞게 연결해 사용했습니다.",
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm font-semibold text-blue-600">Capability</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-950">
            웹 기획 / AE 연관 역량
          </h2>
          <p className="mt-3 text-gray-600">
            이력서와 프로젝트 경험 기준으로 직무와 직접 연결되는 항목만 정리했습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-5">
          {strengths.map((strength, index) => {
            const gradients = [
              "from-blue-500 to-cyan-500",
              "from-slate-700 to-slate-900",
              "from-cyan-500 to-sky-500",
              "from-emerald-500 to-teal-500",
              "from-amber-500 to-orange-500",
            ];

            return (
              <div
                key={strength.title}
                className="group relative overflow-hidden rounded-[28px] border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${gradients[index]}`}
                />

                <div className="mb-6 text-4xl transition-transform duration-300 group-hover:scale-110">
                  {strength.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-950">
                  {strength.title}
                </h3>
                <p className="text-sm leading-7 text-gray-600">
                  {strength.description}
                </p>
                <p className="mt-4 border-t border-gray-100 pt-4 text-sm leading-7 text-gray-700">
                  {strength.evidence}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
