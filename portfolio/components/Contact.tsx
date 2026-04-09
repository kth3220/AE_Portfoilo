"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 items-center md:grid-cols-2">
          <div className="space-y-6">
            <div className="text-4xl md:text-5xl font-bold">Contact</div>
            <p className="leading-relaxed text-gray-300">
              서비스 흐름과 운영 관점을 함께 이해하는 글로벌 사이트 운영 및 웹
              기획(AE) 지원 포트폴리오입니다.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p>연락처: 010-5745-3220</p>
              <p>Email: dddd3220@naver.com</p>
              <p>희망연봉: 3,400만 원 (협의 가능)</p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="space-y-4">
              <div>
                <p className="text-2xl font-semibold">김태희</p>
                <p className="text-lg text-gray-300">
                  글로벌 사이트 운영 및 웹 기획(AE) 지원자
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3">
                <a
                  href="tel:01057453220"
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <span>Phone</span>
                  <span className="text-blue-200">010-5745-3220</span>
                </a>
                <a
                  href="https://github.com/kth3220"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <span>GitHub</span>
                  <span className="text-blue-300">github.com/kth3220</span>
                </a>
                <a
                  href="mailto:dddd3220@naver.com"
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <span>Email</span>
                  <span className="text-blue-200">dddd3220@naver.com</span>
                </a>
                <a
                  href="https://frontend-diary-log.tistory.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <span>Blog</span>
                  <span className="text-blue-200">
                    frontend-diary-log.tistory.com
                  </span>
                </a>
                <a
                  href="https://ae-portfoilo.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <span>Portfolio</span>
                  <span className="text-blue-200">ae-portfoilo.vercel.app</span>
                </a>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="mailto:dddd3220@naver.com"
                  className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-700"
                >
                  이메일 보내기
                </a>
                <a
                  href="https://github.com/kth3220"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/20 px-4 py-2 text-xs font-semibold text-white transition hover:border-blue-400 hover:text-blue-200"
                >
                  GitHub 보기
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
