import "./globals.css";

export const metadata = {
  title: "김태희 | 글로벌 사이트 운영 및 웹 기획(AE) 지원자",
  description:
    "글로벌 사이트 운영 및 웹 기획(AE) 지원 포트폴리오. 요구사항 정의, 화면 구조 설계, 협업 문서화, 서비스 운영 관점의 프로젝트 경험을 정리했습니다.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
