import Link from "next/link";

export default function ModulePlaceholder({ icon, title, description }) {
  return (
    <main className="shell">
      <section className="hero">
        <div className="brandBall">{icon}</div>
        <div>
          <p className="eyebrow">PICKLEBALL LÀO CAI V2</p>
          <h1>{title}</h1>
          <p className="muted">{description}</p>
        </div>
      </section>
      <section className="panel">
        Module này đã có vị trí riêng trong V2. Logic FIX7 sẽ được chuyển sang
        sau khi nền tảng và kết nối dữ liệu được kiểm tra an toàn.
      </section>
      <p><Link href="/">← Quay lại trang chủ</Link></p>
    </main>
  );
}
