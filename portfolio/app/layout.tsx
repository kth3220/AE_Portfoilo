import "./globals.css";

export const metadata = {
  title: "김태희 | 서비스 기획 · 구현 포트폴리오",
  description:
    "서비스 기획, 화면 설계, 프론트엔드 구현, 데이터 흐름 정리, 배포 경험을 담은 김태희의 포트폴리오입니다.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
