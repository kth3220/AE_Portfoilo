"use client";

export default function DevelopmentPhilosophy() {
  const essays = [
    {
      number: "01",
      title: "직무 선택과 성장 과정",
      body:
        "소프트웨어공학을 전공하며 웹서비스를 직접 만들고 운영하는 과정에서, 서비스는 구현보다 요구사항과 흐름이 명확할 때 안정적으로 운영된다는 점을 체감했습니다. 프로젝트마다 사용자 시나리오를 정리하고 화면 구조를 설계하며, 모호한 요구를 실행 가능한 항목으로 풀어내는 역할을 맡아 왔습니다.",
    },
    {
      number: "02",
      title: "핵심 역량과 작업 방식",
      body:
        "복잡한 요구를 기능 흐름, 화면 구성, 실행 항목으로 구체화하는 능력이 강점입니다. Figma로 와이어프레임과 화면 구조를 정리하고, Notion·Google 스프레드시트·Excel로 회의 내용과 수정 사항, 진행 현황을 문서화하며 협업 기준을 맞춰 왔습니다.",
    },
    {
      number: "03",
      title: "대표 프로젝트 경험",
      body:
        "Aura.ai에서는 서비스 기획부터 UX/UI 설계, 프론트엔드 구현, API 연동, 배포까지 전 과정을 직접 수행했습니다. ProfitPilot에서는 UI/UX 기획과 Figma 기반 화면 설계를 주도했고, MarketUpdate에서는 주요 화면의 기능 범위와 사용자 흐름을 정리하며 구현까지 연결했습니다.",
    },
    {
      number: "04",
      title: "문제 해결 경험",
      body:
        "Aura.ai에서는 세션 저장 로직의 실행 시점을 다시 정리해 새로고침 이후에도 채팅 세션이 유지되도록 개선했습니다. 또한 AI 응답 형식이 일정하지 않을 때는 공통 JSON 구조와 노출 규칙을 다시 정의해 추천 카드 렌더링 기준을 일관되게 맞췄습니다.",
    },
    {
      number: "05",
      title: "지원 동기 및 포부",
      body:
        "여러 담당자 사이에서 기준을 정리하고 프로젝트가 안정적으로 흘러가도록 돕는 AE 역할에 큰 매력을 느끼고 있습니다. 입사 후에는 글로벌 사이트 운영과 구축 프로세스를 빠르게 이해하고, 요구사항 정리와 커뮤니케이션을 통해 팀이 같은 방향으로 움직일 수 있도록 기여하고 싶습니다.",
    },
  ];

  return (
    <section id="essay" className="py-24 bg-gradient-to-br from-white via-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <p className="text-sm font-semibold text-blue-600">Essay Summary</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-950">
            자기소개 요약
          </h2>
          <p className="max-w-3xl text-gray-600">
            제출용 자기소개서의 핵심 문장을 섹션별로 정리했습니다. 지원 동기, 작업
            방식, 프로젝트 경험, 문제 해결 포인트를 한눈에 확인할 수 있습니다.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {essays.map((essay) => (
            <article
              key={essay.number}
              className="rounded-[28px] border border-gray-200 bg-white p-7 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-sm font-bold text-white">
                  {essay.number}
                </span>
                <h3 className="text-xl font-bold text-gray-950">{essay.title}</h3>
              </div>
              <p className="mt-5 text-sm leading-8 text-gray-700">{essay.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-blue-100 bg-blue-50 px-6 py-5 text-sm leading-7 text-blue-950">
          핵심 방향은 명확합니다. 요구사항을 구조화하고, 여러 직군이 같은 기준으로
          움직일 수 있게 문서화하며, 운영 이후 수정 가능성까지 고려하는 AE로
          성장하고자 합니다.
        </div>
      </div>
    </section>
  );
}
