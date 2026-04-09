"use client";

export default function TechStack() {
  const categories = [
    {
      name: "학력",
      items: ["2021.03 ~ 2026.02", "서일대학교 소프트웨어공학과 학사"],
    },
    {
      name: "자격증",
      items: ["정보처리기사 · 2025.09", "SQLD · 2024.09", "GTQ 1급 · 2023.02"],
    },
    {
      name: "문서 / 협업 도구",
      items: ["Notion", "Google 스프레드시트", "Excel", "PowerPoint"],
    },
    {
      name: "디자인 / 운영 도구",
      items: ["Figma", "Git / GitHub", "AWS EC2", "Vercel"],
    },
    {
      name: "개발 이해 범위",
      items: [
        "HTML/CSS",
        "JavaScript",
        "React / Next.js",
        "Python / FastAPI / REST API / MySQL",
      ],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm font-semibold text-blue-600">Resume Data</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-950">
            학력 · 자격 · 도구
          </h2>
          <p className="mt-3 text-gray-600">
            지원서에 들어가는 핵심 이력 정보를 바로 확인할 수 있게 묶었습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-5">
          {categories.map((category, categoryIndex) => {
            const categoryColors = [
              {
                bg: "from-blue-50 to-white",
                border: "border-blue-200",
                text: "text-blue-800",
                badge: "bg-blue-50 text-blue-800 border-blue-100",
              },
              {
                bg: "from-slate-50 to-white",
                border: "border-slate-200",
                text: "text-slate-800",
                badge: "bg-slate-50 text-slate-800 border-slate-200",
              },
              {
                bg: "from-cyan-50 to-white",
                border: "border-cyan-200",
                text: "text-cyan-800",
                badge: "bg-cyan-50 text-cyan-800 border-cyan-100",
              },
              {
                bg: "from-emerald-50 to-white",
                border: "border-emerald-200",
                text: "text-emerald-800",
                badge: "bg-emerald-50 text-emerald-800 border-emerald-100",
              },
              {
                bg: "from-amber-50 to-white",
                border: "border-amber-200",
                text: "text-amber-800",
                badge: "bg-amber-50 text-amber-800 border-amber-100",
              },
            ];
            const color = categoryColors[categoryIndex % 5];

            return (
              <div
                key={category.name}
                className={`rounded-[28px] border ${color.border} bg-gradient-to-br ${color.bg} p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                <h3 className={`mb-6 text-lg font-bold ${color.text}`}>
                  {category.name}
                </h3>
                <div className="space-y-3">
                  {category.items.map((item) => (
                    <div
                      key={item}
                      className={`flex cursor-default items-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold ${color.badge}`}
                    >
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
