"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase/client";
import Link from "next/link";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleRegister(e) {
    e.preventDefault();

    setMessage("");
    setSuccess(false);

    if (!email.trim()) {
      setMessage("Vui lòng nhập email.");
      return;
    }

    if (password.length < 6) {
      setMessage("Mật khẩu phải có ít nhất 6 ký tự.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Hai mật khẩu chưa trùng nhau.");
      return;
    }

    try {
      setLoading(true);

      const { error } = await supabase.auth.signUp({
        email: email.trim().toLowerCase(),
        password,
      });

      if (error) {
        setMessage(error.message);
        return;
      }

      setSuccess(true);
      setMessage(
        "Đăng ký thành công. Hãy kiểm tra email để xác nhận tài khoản nếu hệ thống yêu cầu."
      );
    } catch (error) {
      console.error(error);
      setMessage("Có lỗi xảy ra. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="register-page">
      <section className="register-card">
        <div className="brand">
          <div className="ball">●</div>

          <div>
            <div className="brand-small">PICKLEBALL LÀO CAI</div>
            <h1>Đăng ký VĐV</h1>
          </div>
        </div>

        <p className="intro">
          Tạo tài khoản cá nhân để tham gia hệ thống Pickleball Lào Cai.
        </p>

        <form onSubmit={handleRegister}>
          <label>Email</label>

          <input
            type="email"
            placeholder="Nhập email của bạn"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />

          <label>Mật khẩu</label>

          <input
            type="password"
            placeholder="Tối thiểu 6 ký tự"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            required
          />

          <label>Nhập lại mật khẩu</label>

          <input
            type="password"
            placeholder="Nhập lại mật khẩu"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            autoComplete="new-password"
            required
          />

          {message && (
            <div className={success ? "message success" : "message error"}>
              {message}
            </div>
          )}

          <button type="submit" disabled={loading}>
            {loading ? "Đang đăng ký..." : "Đăng ký tài khoản"}
          </button>
        </form>

        <div className="login-link">
          Đã có tài khoản? <Link href="/login">Đăng nhập</Link>
        </div>

        <div className="notice">
          Sau khi đăng ký, VĐV sẽ hoàn thiện hồ sơ và xác minh thông tin trước
          khi sử dụng đầy đủ các chức năng.
        </div>
      </section>

      <style jsx>{`
        .register-page {
          min-height: 100vh;
          padding: 40px 16px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          background:
            radial-gradient(
              circle at top,
              rgba(34, 197, 94, 0.12),
              transparent 35%
            ),
            #f4f7f5;
          font-family: "Times New Roman", Times, serif;
          color: #10271d;
        }

        .register-card {
          width: 100%;
          max-width: 520px;
          margin-top: 35px;
          padding: 34px;
          background: white;
          border: 1px solid #dce7e0;
          border-radius: 24px;
          box-shadow: 0 16px 45px rgba(0, 60, 35, 0.1);
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .ball {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: #cfff28;
          color: #075c38;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 34px;
          font-family: Arial, sans-serif;
        }

        .brand-small {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #087746;
        }

        h1 {
          margin: 3px 0 0;
          font-size: 34px;
          line-height: 1.1;
        }

        .intro {
          margin: 25px 0;
          color: #52645c;
          font-size: 18px;
          line-height: 1.5;
        }

        label {
          display: block;
          margin: 17px 0 7px;
          font-size: 17px;
          font-weight: 700;
        }

        input {
          width: 100%;
          box-sizing: border-box;
          padding: 14px 15px;
          border: 1px solid #ccd8d1;
          border-radius: 11px;
          background: #fff;
          font-family: "Times New Roman", Times, serif;
          font-size: 17px;
          outline: none;
        }

        input:focus {
          border-color: #087746;
          box-shadow: 0 0 0 3px rgba(8, 119, 70, 0.1);
        }

        button {
          width: 100%;
          margin-top: 24px;
          padding: 15px;
          border: 0;
          border-radius: 12px;
          background: #087746;
          color: white;
          font-family: "Times New Roman", Times, serif;
          font-size: 19px;
          font-weight: 700;
          cursor: pointer;
        }

        button:hover {
          background: #056238;
        }

        button:disabled {
          opacity: 0.65;
          cursor: wait;
        }

        .message {
          margin-top: 18px;
          padding: 12px 14px;
          border-radius: 10px;
          font-size: 16px;
          line-height: 1.4;
        }

        .error {
          background: #fff1f1;
          color: #a31c1c;
          border: 1px solid #f0caca;
        }

        .success {
          background: #edf9f1;
          color: #126438;
          border: 1px solid #bfe5cc;
        }

        .login-link {
          margin-top: 22px;
          text-align: center;
          font-size: 17px;
        }

        .login-link a {
          color: #087746;
          font-weight: 700;
        }

        .notice {
          margin-top: 24px;
          padding: 14px;
          border-radius: 12px;
          background: #f3f7f4;
          color: #607068;
          line-height: 1.45;
          font-size: 15px;
        }

        @media (max-width: 600px) {
          .register-page {
            padding: 15px;
          }

          .register-card {
            margin-top: 10px;
            padding: 25px 20px;
            border-radius: 18px;
          }

          h1 {
            font-size: 29px;
          }
        }
      `}</style>
    </main>
  );
}
