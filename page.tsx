export default function VipPage() {
  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        VIP会员中心
      </h1>

      <div className="bg-white rounded-xl shadow p-6 mb-6">

        <h2 className="text-xl font-bold mb-4">
          会员资料
        </h2>

        <div className="grid grid-cols-3 gap-4">

          <input
            placeholder="VIP编号"
            className="border rounded-lg p-3"
          />

          <input
            placeholder="顾客昵称"
            className="border rounded-lg p-3"
          />

          <input
            placeholder="VIP等级"
            className="border rounded-lg p-3"
          />

          <input
            placeholder="当前积分"
            className="border rounded-lg p-3"
          />

          <input
            placeholder="累计充值金额"
            className="border rounded-lg p-3"
          />

          <input
            placeholder="VIP状态（自动）"
            className="border rounded-lg p-3 bg-gray-100"
            readOnly
          />

          <div>
            <label className="block mb-2 font-medium">
              VIP开始日期
            </label>

            <input
              type="date"
              className="border rounded-lg p-3 w-full"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              VIP结束日期
            </label>

            <input
              type="date"
              className="border rounded-lg p-3 w-full"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              剩余天数（自动）
            </label>

            <input
              placeholder="75天"
              className="border rounded-lg p-3 w-full bg-gray-100"
              readOnly
            />
          </div>

        </div>

        <button className="bg-black text-white px-6 py-3 rounded-lg mt-6">
          保存VIP资料
        </button>

      </div>

      <div className="bg-white rounded-xl shadow p-6">

        <h2 className="text-xl font-bold mb-4">
          VIP记录
        </h2>

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="p-3 text-left">
                日期
              </th>

              <th className="p-3 text-left">
                类型
              </th>

              <th className="p-3 text-left">
                订单编号
              </th>

              <th className="p-3 text-left">
                金额
              </th>

              <th className="p-3 text-left">
                积分变动
              </th>

              <th className="p-3 text-left">
                剩余积分
              </th>

            </tr>

          </thead>

          <tbody>

            <tr className="border-t">

              <td className="p-3">
                2026-06-17
              </td>

              <td className="p-3">
                充值
              </td>

              <td className="p-3">
                -
              </td>

              <td className="p-3">
                RM100
              </td>

              <td className="p-3">
                +100
              </td>

              <td className="p-3">
                300
              </td>

            </tr>

            <tr className="border-t">

              <td className="p-3">
                2026-06-18
              </td>

              <td className="p-3">
                使用积分
              </td>

              <td className="p-3">
                ORD001
              </td>

              <td className="p-3">
                RM0
              </td>

              <td className="p-3">
                -20
              </td>

              <td className="p-3">
                280
              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}