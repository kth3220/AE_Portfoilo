import "./globals.css";

export const metadata = {
  title: "Taehee Kim | Web Planning Portfolio",
  description:
    "Portfolio focused on web planning, service flow design, and end-to-end execution across planning, UI, development, and deployment.",
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
