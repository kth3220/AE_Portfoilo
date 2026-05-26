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
                서비스를 단순히 구현하는 데서 그치지 않고, 왜 필요한지와 어떤
                흐름으로 동작해야 하는지를 먼저 정리한 뒤 실제 화면과 기능으로
                연결하는 과정에 관심이 있습니다.
              </p>
              <p className="text-base text-gray-600">
                개인 프로젝트에서는 아이디어 정의부터 화면 설계, 프론트엔드,
                백엔드 API, 배포까지 전 과정을 직접 경험했습니다.
              </p>
              <p className="text-base text-gray-600">
                팀 프로젝트에서는 Figma, Notion, Excel을 활용해 화면 구조, 회의
                내용, API 항목, 예외 상황을 정리하고 작업 기준을 맞추는 역할을
                중요하게 생각했습니다.
              </p>
              <p className="text-base text-gray-600">
                AI 추천, 채팅, 관리자 기능, 실시간 데이터, 배포 이슈 대응을
                다루며 화면 설계와 구현, 문서화, 운영 관점을 함께 보는 경험을
                쌓아 왔습니다.
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
