import "./globals.css";

export const metadata = {
  title: "Pickleball Lào Cai V2",
  description: "Nền tảng quản lý CLB, VĐV và giải đấu Pickleball",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
