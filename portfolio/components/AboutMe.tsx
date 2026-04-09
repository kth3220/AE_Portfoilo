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
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p className="text-base text-gray-600">
                사용자 흐름과 요구사항을 구조화해 서비스로 연결하는 데 관심이 있는 김태희입니다.
              </p>
              <p className="text-base text-gray-600">
                개인/팀 프로젝트에서 기획, 화면 설계, 구현, 배포까지 직접 맡으며 서비스가 실제로 운영되는 전체 흐름을 경험했습니다.
              </p>
              <p className="text-base text-gray-600">
                문제를 보면 기능 하나만 고치는 것이 아니라 화면 이동, 상태 변화, 데이터 연결, 예외 케이스를 함께 확인하는 편입니다.
              </p>
              <p className="text-base text-gray-600">
                기획 의도를 개발 언어로, 개발 이슈를 사용자 관점으로 다시 풀어 설명하는 커뮤니케이션에 강점이 있습니다.
              </p>
              <p className="text-base text-gray-600">
                AI 추천 서비스, 거래 플랫폼, 대시보드 프로젝트를 통해 요구사항 정리와 실행력을 함께 갖춘 실무 감각을 키웠습니다.
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
