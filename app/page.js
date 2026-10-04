import Link from "next/link";

const cards = [
  ["👥", "Thành viên", "/members", "Hồ sơ và danh sách VĐV"],
  ["📊", "BXH trình", "/ranking", "Xếp hạng trình VĐV"],
  ["⭐", "Chấm trình", "/rating", "Tự chấm và quy trình xét trình"],
  ["🏆", "Giải đấu", "/tournaments", "Đăng ký, lịch đấu và kết quả"],
];

export default function Home() {
  return (
    <main className="shell">
      <section className="hero">
        <div className="brandBall">●</div>
        <div>
          <p className="eyebrow">PICKLEBALL LÀO CAI</p>
          <h1>Nền tảng Pickleball V2</h1>
          <p className="muted">Đơn giản cho người chơi · mạnh cho CLB và BTC</p>
        </div>
      </section>

      <section className="quickGrid">
        {cards.map(([icon, title, href, desc]) => (
          <Link className="featureCard" href={href} key={href}>
            <span className="icon">{icon}</span>
            <strong>{title}</strong>
            <small>{desc}</small>
          </Link>
        ))}
      </section>

      <section className="panel">
        <div>
          <span className="statusDot" /> V2 đang được xây dựng song song
        </div>
        <p>
          FIX7 vẫn là hệ thống đang vận hành. Bản V2 hiện chưa ghi dữ liệu vào
          Supabase production.
        </p>
      </section>

      <nav className="bottomNav">
        <Link href="/">🏠<span>Trang chủ</span></Link>
        <Link href="/tournaments">🏆<span>Giải đấu</span></Link>
        <Link href="/ranking">📊<span>BXH</span></Link>
        <Link href="/members">👥<span>VĐV</span></Link>
      </nav>
    </main>
  );
}
