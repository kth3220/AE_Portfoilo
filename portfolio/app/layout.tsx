import "./globals.css";

export const metadata = {
  title: "김태희 | 웹 기획 · 사이트 운영 포트폴리오",
  description:
    "요구사항 정의, 화면 흐름 설계, 협업 커뮤니케이션, 운영 관점을 중심으로 정리한 웹 기획 및 사이트 운영 포트폴리오.",
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
