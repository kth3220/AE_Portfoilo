"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-white via-blue-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2 space-y-8 animate-fadeInUp">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                김태희
              </h1>
              <p className="text-2xl md:text-3xl text-gray-600 font-light">
                Web Planning & Operations
              </p>
            </div>

            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p className="text-xl font-light">
                <span className="font-semibold text-gray-900">
                  기획과 구현을 함께 이해하며
                </span>
                <br />
                서비스 흐름을 설계하는 웹 실무형 인재입니다.
              </p>
              <p className="text-lg text-gray-600">
                요구사항을 화면 구조와 기능 단위로 정리하고,
                <br />
                사용자 경험이 끊기지 않도록 흐름을 다듬는 데 강점이 있습니다.
              </p>
              <p className="text-lg text-gray-600">
                프로젝트에서 기획, 디자인, 프론트엔드, API 연동, 배포까지 경험하며
                <br />
                협업 커뮤니케이션과 실행이 연결되는 방식을 배웠습니다.
              </p>
              <p className="text-lg text-gray-600">
                개발을 이해하는 기획자로서 요구사항 정의와 운영 개선 포인트를
                <br />
                더 구체적인 화면과 기능 언어로 연결할 수 있습니다.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
              >
                프로젝트 상세 보기
              </Link>
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-900 text-sm font-semibold hover:border-blue-600 hover:text-blue-700 transition-colors"
              >
                프로젝트 요약
              </a>
            </div>

            <div className="space-y-4 pt-4">
              <div>
                <p className="text-sm font-semibold text-gray-500">GitHub</p>
                <a
                  href="https://github.com/kth3220"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-blue-600 hover:underline"
                >
                  github.com/kth3220
                </a>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-500">Email</p>
                <a
                  href="mailto:dddd3220@naver.com"
                  className="text-lg font-semibold text-gray-900 hover:underline"
                >
                  dddd3220@naver.com
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-2xl blur-2xl" />
              <div className="relative bg-white rounded-2xl border-2 border-gray-200 p-6 shadow-2xl">
                <img
                  src="/aura-main.png"
                  alt="Aura.ai 챗봇 메인 UI"
                  className="rounded-xl w-full h-auto object-cover"
                />
                <p className="mt-4 text-center text-sm text-gray-500">
                  Aura.ai 챗봇 메인 UI
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
