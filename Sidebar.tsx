import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 bg-black text-white p-5 min-h-screen">
      <h1 className="text-2xl font-bold mb-8 text-yellow-400">
        GL Gaming Studio
      </h1>

      <ul className="space-y-2">

        <li>
          <Link href="/dashboard" className="block rounded-lg px-3 py-2 hover:bg-yellow-500 hover:text-black">
            🏠 仪表板
          </Link>
        </li>

        <li>
          <Link href="/staff-management" className="block rounded-lg px-3 py-2 hover:bg-yellow-500 hover:text-black">
            👥 帐号管理
          </Link>
        </li>

        <li>
          <Link href="/companions" className="block rounded-lg px-3 py-2 hover:bg-yellow-500 hover:text-black">
            🎮 陪陪管理
          </Link>
        </li>

        <li>
          <Link href="/vip" className="block rounded-lg px-3 py-2 hover:bg-yellow-500 hover:text-black">
            👑 VIP会员
          </Link>
        </li>


        <li>
          <Link href="/orders" className="block rounded-lg px-3 py-2 hover:bg-yellow-500 hover:text-black">
            📦 订单管理
          </Link>
        </li>

        <li>
          <Link href="/ratings" className="block rounded-lg px-3 py-2 hover:bg-yellow-500 hover:text-black">
            ⭐ 评分管理
          </Link>
        </li>

        <li>
          <Link href="/companion-stats" className="block rounded-lg px-3 py-2 hover:bg-yellow-500 hover:text-black">
            📊 陪陪统计
          </Link>
        </li>

        <li>
          <Link href="/finance" className="block rounded-lg px-3 py-2 hover:bg-yellow-500 hover:text-black">
            💰 财务中心
          </Link>
        </li>

        <li>
          <Link href="/side-income" className="block rounded-lg px-3 py-2 hover:bg-yellow-500 hover:text-black">
            💼 副业收入
          </Link>
        </li>

        <li>
          <Link href="/settlement" className="block rounded-lg px-3 py-2 hover:bg-yellow-500 hover:text-black">
            🧾 结算中心
          </Link>
        </li>

        <li>
          <Link href="/reports" className="block rounded-lg px-3 py-2 hover:bg-yellow-500 hover:text-black">
            📄 月度报告
          </Link>
        </li>

        <li>
          <Link href="/notifications" className="block rounded-lg px-3 py-2 hover:bg-yellow-500 hover:text-black">
            🔔 通知中心
          </Link>
        </li>

        <li>
          <Link href="/settings" className="block rounded-lg px-3 py-2 hover:bg-yellow-500 hover:text-black">
            ⚙️ 系统设置
          </Link>
        </li>

        <li>
          <Link href="/" className="block rounded-lg px-3 py-2 text-red-400 hover:bg-red-500 hover:text-white">
            🚪 退出登录
          </Link>
        </li>

      </ul>
    </div>
  );
}