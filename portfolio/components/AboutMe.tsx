"use client";

export default function AboutMe() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold text-blue-600">About</p>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                소개
              </h2>
            </div>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed break-keep">
              <p className="text-base text-gray-600">
                소프트웨어공학을 전공하며 웹서비스를 직접 만들고 운영하는 과정에서, 서비스는 구현보다 요구사항과 흐름이 명확할 때 더 안정적으로 운영된다는 점을 배웠습니다.
              </p>
              <p className="text-base text-gray-600">
                개인 프로젝트와 팀 프로젝트에서 서비스 구조, 화면 목적, 기능 범위, 예외 케이스를 정리하고 이를 실제 구현과 배포까지 연결하는 경험을 쌓았습니다.
              </p>
              <p className="text-base text-gray-600">
                Figma로 화면 구조를 설계하고 Notion, Google Sheets, Excel로 작업 내용과 API 항목을 문서화하며 여러 사람이 같은 기준으로 움직일 수 있도록 정리했습니다.
              </p>
              <p className="text-base text-gray-600">
                기획 의도를 개발 언어로, 개발 이슈를 사용자 관점으로 다시 풀어 설명하는 커뮤니케이션과 꼼꼼한 정리에 강점이 있습니다.
              </p>
            </div>
          </div>

          <div className="hidden lg:flex lg:justify-center">
            <div className="h-56 w-40 rounded-2xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center p-2">
              <img
                src="/profile-photo.jpg"
                alt="김태희 프로필 사진"
                className="h-full w-full object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
