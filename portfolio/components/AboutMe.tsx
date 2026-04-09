"use client";

export default function AboutMe() {
  const profileRows = [
    { label: "성명", value: "김태희" },
    { label: "생년월일", value: "2002.04.07" },
    { label: "지원분야", value: "글로벌 사이트 운영 및 웹 기획(AE)" },
    { label: "연락처", value: "010-5745-3220", href: "tel:01057453220" },
    {
      label: "Email",
      value: "dddd3220@naver.com",
      href: "mailto:dddd3220@naver.com",
    },
    { label: "희망연봉", value: "3,400만 원 (협의 가능)" },
    { label: "경력", value: "신입" },
    {
      label: "GitHub",
      value: "github.com/kth3220",
      href: "https://github.com/kth3220",
    },
    {
      label: "Blog",
      value: "frontend-diary-log.tistory.com",
      href: "https://frontend-diary-log.tistory.com",
    },
  ];

  const channels = [
    {
      title: "Portfolio",
      value: "ae-portfoilo.vercel.app",
      href: "https://ae-portfoilo.vercel.app",
      note: "지원 직무용 포트폴리오 채널",
    },
    {
      title: "Aura.ai",
      value: "aura-ai-three-kappa.vercel.app",
      href: "https://aura-ai-three-kappa.vercel.app",
      note: "1인 프로젝트 운영 링크",
    },
    {
      title: "Blog",
      value: "frontend-diary-log.tistory.com",
      href: "https://frontend-diary-log.tistory.com",
      note: "기록과 회고를 정리한 블로그",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="rounded-[28px] border border-gray-200 bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white shadow-xl">
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-blue-200">Profile</p>
                <h2 className="mt-2 text-4xl font-bold">지원자 정보</h2>
              </div>
              <p className="text-sm leading-7 text-slate-200">
                웹서비스를 직접 기획하고 구현하며, 운영 단계에서 필요한 정보 구조,
                링크 동선, 화면 목적, 수정 우선순위를 함께 고민해 왔습니다.
              </p>
              <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold text-white">강점</p>
                <p className="text-sm leading-7 text-slate-200">
                  사이트 운영, 협업 커뮤니케이션, 요구사항 정의, 화면 구조 설계
                </p>
              </div>
              <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold text-white">한 줄 요약</p>
                <p className="text-sm leading-7 text-slate-200">
                  서비스 흐름을 구조화하고, 여러 사람이 같은 기준으로 움직일 수 있게
                  만드는 웹 기획 지원자입니다.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold text-blue-600">Resume Snapshot</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-950">
                기본 정보와 채널
              </h2>
              <p className="mt-3 text-gray-600">
                이력서 기준 핵심 정보와 실제 운영 중인 채널을 함께 정리했습니다.
              </p>
            </div>

            <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
              <div className="overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-sm">
                <div className="border-b border-gray-100 px-6 py-4">
                  <h3 className="text-lg font-semibold text-gray-950">기본 정보</h3>
                </div>
                <div className="divide-y divide-gray-100">
                  {profileRows.map((row) => (
                    <div
                      key={row.label}
                      className="grid gap-1 px-6 py-4 sm:grid-cols-[120px_1fr] sm:gap-4"
                    >
                      <p className="text-sm font-semibold text-gray-500">{row.label}</p>
                      {row.href ? (
                        <a
                          href={row.href}
                          target={row.href.startsWith("http") ? "_blank" : undefined}
                          rel={
                            row.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-sm font-medium leading-6 text-gray-900 hover:text-blue-700"
                        >
                          {row.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium leading-6 text-gray-900">
                          {row.value}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-[28px] border border-gray-200 bg-gray-50 shadow-sm">
                <div className="border-b border-gray-200 px-6 py-4">
                  <h3 className="text-lg font-semibold text-gray-950">포트폴리오 / 링크</h3>
                </div>
                <div className="space-y-4 p-6">
                  {channels.map((channel) => (
                    <a
                      key={channel.title}
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-2xl border border-gray-200 bg-white px-5 py-4 transition hover:border-blue-200 hover:shadow-sm"
                    >
                      <p className="text-sm font-semibold text-blue-700">{channel.title}</p>
                      <p className="mt-1 text-base font-semibold text-gray-950">
                        {channel.value}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">{channel.note}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50 px-6 py-5 text-sm leading-7 text-blue-950">
              포트폴리오 사이트와 블로그를 직접 운영하며 정보 구조 정리, 콘텐츠 배치,
              링크 및 채널 관리 경험을 쌓았습니다. 단순히 화면을 만드는 것보다,
              어떤 정보가 먼저 보여야 하고 어떤 순서로 이동해야 자연스러운지 계속
              점검해 왔습니다.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
