import React, { useState } from 'react';
import { ShieldCheck, Copy, Check } from 'lucide-react';
import { BirthdayCake } from './BirthdayCake';
import { DetoxState } from '../types/museum';

interface SecretBirthdayRoomProps {
  onCelebrationTrigger: () => void;
}

export const SecretBirthdayRoom: React.FC<SecretBirthdayRoomProps> = ({
  onCelebrationTrigger,
}) => {
  const [detox, setDetox] = useState<DetoxState>({ 1: false, 2: false, 3: false });
  const [copied, setCopied] = useState<boolean>(false);

  const toggleStep = (step: 1 | 2 | 3) => {
    setDetox((prev) => {
      const next = { ...prev, [step]: true };
      if (next[1] && next[2] && next[3]) {
        onCelebrationTrigger();
      }
      return next;
    });
  };

  const copyLetter = () => {
    const letterText = `Chúc mừng sinh nhật thằng em Mạnh!
Bước sang tuổi mới, anh chúc mày sống đúng với cái tên Mạnh của mình: đủ mạnh mẽ để tự tay gỡ mấy cái app cờ bạc, và đủ mạnh dạn quay đầu từ bỏ những ván cược vô bổ trên mạng. Anh em với nhau khuyên thật lòng, tuổi trẻ cày cuốc kiếm được đồng tiền mồ hôi nước mắt thì giữ lấy mà lo cho tương lai, chứ đừng nướng sạch vào những cú "tất tay" để làm giàu cho mấy thằng chủ sòng ảo.
Năm nay cũng bớt kiếm cớ "mỏi người" hay "trúng gió" để đi xông hơi, massage đèn mờ lại; mấy cái trò giải trí tốn kém ấy chỉ tổ làm rỗng túi và bào mòn sức khỏe của mày thôi.
Tuổi mới lớn thêm một tuổi rồi, anh mong em có một cái đầu thật lạnh để dứt khoát với những cám dỗ, đôi tay mạnh để tập trung làm ăn chân chính thay vì canh nặn bài thâu đêm, và xây dựng một lối sống lành mạnh, đàng hoàng để gia đình đỡ phải lo nghĩ.
Coi tuổi mới này là cột mốc để làm lại từ đầu nhé em trai, chúc Mạnh sinh nhật vui vẻ, sớm tỉnh ngộ và bản lĩnh hơn!`;

    navigator.clipboard.writeText(letterText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const detoxCount = Object.values(detox).filter(Boolean).length;

  return (
    <section id="future-room" className="relative z-10 py-20 px-4 sm:px-8 bg-gradient-to-b from-[#08080a] via-[#14100c] to-[#070709] border-t-2 border-amber-500/30 select-none">
      <div className="max-w-5xl mx-auto space-y-14">

        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs uppercase tracking-[0.25em] font-semibold">
            <span>🌟 CĂN PHÒNG TƯƠNG LAI • CỘT MỐC SINH NHẬT 27/10/2026</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
            PHÒNG TỈNH NGỘ & BẢN LĨNH TUỔI MỚI
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Sau tất cả những tiếng cười, những đêm bồng bột và kiếp nạn hài hước, đây là nơi thằng em <strong className="text-amber-200">Vương Quốc Mạnh</strong> tự tay thổi nến đón tuổi mới, dứt khoát làm lại từ đầu và đón nhận bức tâm thư từ người anh!
          </p>
        </div>

        {/* Grid: Detox & Cake */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Detox Checklist */}
          <div className="lg:col-span-5 bg-[#121218] border border-amber-500/30 rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-5 shadow-2xl relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
                <h3 className="font-serifLuxury text-xl font-bold text-amber-300 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-amber-400" />
                  <span>Nghi Thức Bản Lĩnh</span>
                </h3>
                <span
                  className={`px-2.5 py-1 rounded-full text-xs font-mono font-bold border transition ${
                    detoxCount === 3
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                      : 'bg-red-500/20 text-red-300 border-red-500/30'
                  }`}
                >
                  {detoxCount === 3 ? '✓ ĐỦ BẢN LĨNH!' : `${detoxCount} / 3 Hoàn tất`}
                </span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                Trước khi ước nguyện và thổi nến, hãy bấm dứt khoát 3 nút bên dưới để xác nhận bản lĩnh quay đầu ở tuổi mới:
              </p>

              <div className="space-y-3">
                {/* Step 1 */}
                <button
                  onClick={() => toggleStep(1)}
                  className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left transition group ${
                    detox[1]
                      ? 'bg-emerald-950/20 border-emerald-500/50'
                      : 'bg-zinc-900/90 hover:bg-zinc-800/90 border-red-500/40'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🎰</span>
                    <div>
                      <div className="text-sm font-bold text-zinc-200 group-hover:text-amber-200 transition">
                        Gỡ sạch App Cờ Bạc & Sòng Ảo
                      </div>
                      <div className="text-xs text-zinc-500">
                        Không nướng tiền mồ hôi nước mắt vào cú "tất tay"
                      </div>
                    </div>
                  </div>
                  <span
                    className={`px-2.5 py-1 rounded text-xs font-mono font-bold shrink-0 ${
                      detox[1]
                        ? 'bg-emerald-500/20 text-emerald-300'
                        : 'bg-red-500/20 text-red-300'
                    }`}
                  >
                    {detox[1] ? '✓ ĐÃ GỠ' : 'BẤM GỠ'}
                  </span>
                </button>

                {/* Step 2 */}
                <button
                  onClick={() => toggleStep(2)}
                  className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left transition group ${
                    detox[2]
                      ? 'bg-emerald-950/20 border-emerald-500/50'
                      : 'bg-zinc-900/90 hover:bg-zinc-800/90 border-red-500/40'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🚫</span>
                    <div>
                      <div className="text-sm font-bold text-zinc-200 group-hover:text-amber-200 transition">
                        Cai cớ "Mỏi Người / Trúng Gió"
                      </div>
                      <div className="text-xs text-zinc-500">
                        Tạm biệt xông hơi, massage đèn mờ rỗng túi
                      </div>
                    </div>
                  </div>
                  <span
                    className={`px-2.5 py-1 rounded text-xs font-mono font-bold shrink-0 ${
                      detox[2]
                        ? 'bg-emerald-500/20 text-emerald-300'
                        : 'bg-red-500/20 text-red-300'
                    }`}
                  >
                    {detox[2] ? '✓ DỨT KHOÁT' : 'DỨT KHOÁT'}
                  </span>
                </button>

                {/* Step 3 */}
                <button
                  onClick={() => toggleStep(3)}
                  className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left transition group ${
                    detox[3]
                      ? 'bg-emerald-950/20 border-emerald-500/50'
                      : 'bg-zinc-900/90 hover:bg-zinc-800/90 border-red-500/40'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">💪</span>
                    <div>
                      <div className="text-sm font-bold text-zinc-200 group-hover:text-amber-200 transition">
                        Đầu Thật Lạnh & Đôi Tay Làm Ăn
                      </div>
                      <div className="text-xs text-zinc-500">
                        Sống đàng hoàng để gia đình yên tâm
                      </div>
                    </div>
                  </div>
                  <span
                    className={`px-2.5 py-1 rounded text-xs font-mono font-bold shrink-0 ${
                      detox[3]
                        ? 'bg-emerald-500/20 text-emerald-300'
                        : 'bg-red-500/20 text-red-300'
                    }`}
                  >
                    {detox[3] ? '✓ CAM KẾT' : 'CAM KẾT'}
                  </span>
                </button>
              </div>
            </div>

            <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-[11px] text-amber-200/90 text-center">
              💡 Tuổi trẻ cày cuốc được thì giữ lấy mà lo cho tương lai!
            </div>
          </div>

          {/* Right Column: Birthday Cake */}
          <div className="lg:col-span-7">
            <BirthdayCake onBlowSuccess={onCelebrationTrigger} />
          </div>

        </div>

        {/* The Heartfelt Final Letter Plaque */}
        <div className="relative rounded-3xl p-1 bg-gradient-to-br from-amber-500/70 via-yellow-200/40 to-amber-700/70 shadow-[0_0_100px_rgba(212,175,55,0.25)]">
          <div className="bg-[#0e0d14] rounded-[22px] p-6 sm:p-12 relative overflow-hidden">
            {/* Watermark */}
            <div className="absolute -right-8 -bottom-10 text-[180px] opacity-5 pointer-events-none select-none font-cinzel text-amber-300">
              27.10
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-500/25 pb-6 mb-8">
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-amber-400 mb-1 font-semibold">
                  TÂM THƯ KẾT THÚC HÀNH TRÌNH BẢO TÀNG
                </div>
                <h3 className="font-serifLuxury text-2xl sm:text-3xl font-bold text-white">
                  Gửi Thằng Em Vương Quốc Mạnh (27/10/2026)
                </h3>
              </div>
              <button
                onClick={copyLetter}
                className="self-start sm:self-auto px-4 py-2.5 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-300 text-xs font-semibold transition flex items-center gap-1.5"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? '✓ Đã sao chép bức thư!' : '📋 Sao chép bức thư'}</span>
              </button>
            </div>

            <div className="space-y-6 text-zinc-200 text-base sm:text-lg leading-relaxed select-text font-normal">
              <p className="text-amber-300 font-semibold text-xl sm:text-2xl font-serifLuxury italic">
                "Chúc mừng sinh nhật thằng em Mạnh!"
              </p>
              <p>
                Bước sang tuổi mới, anh chúc mày sống đúng với cái tên <strong className="text-amber-300 font-bold">Mạnh</strong> của mình: đủ mạnh mẽ để tự tay gỡ mấy cái app cờ bạc, và đủ mạnh dạn quay đầu từ bỏ những ván cược vô bổ trên mạng. Anh em với nhau khuyên thật lòng, tuổi trẻ cày cuốc kiếm được đồng tiền mồ hôi nước mắt thì giữ lấy mà lo cho tương lai, chứ đừng nướng sạch vào những cú <span className="text-red-400 font-bold bg-red-950/40 px-1.5 py-0.5 rounded border border-red-500/30">"tất tay"</span> để làm giàu cho mấy thằng chủ sòng ảo.
              </p>
              <p>
                Năm nay cũng bớt kiếm cớ <span className="italic text-amber-200 font-semibold">"mỏi người"</span> hay <span className="italic text-amber-200 font-semibold">"trúng gió"</span> để đi xông hơi, massage đèn mờ lại; mấy cái trò giải trí tốn kém ấy chỉ tổ làm rỗng túi và bào mòn sức khỏe của mày thôi.
              </p>
              <p>
                Tuổi mới lớn thêm một tuổi rồi, anh mong em có một <strong className="text-amber-300">cái đầu thật lạnh</strong> để dứt khoát với những cám dỗ, <strong className="text-amber-300">đôi tay mạnh</strong> để tập trung làm ăn chân chính thay vì canh nặn bài thâu đêm, và xây dựng một lối sống lành mạnh, đàng hoàng để gia đình đỡ phải lo nghĩ.
              </p>
              <p className="text-amber-200 font-bold text-lg pt-4 border-t border-zinc-800">
                Coi tuổi mới này là cột mốc để làm lại từ đầu nhé em trai, chúc Mạnh sinh nhật vui vẻ, sớm tỉnh ngộ và bản lĩnh hơn!
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-amber-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="text-amber-400 text-lg">🖋️</span>
                <span><strong className="text-amber-300">Người gửi:</strong> Người anh em chí cốt từ giải IEM Kraków 2026 & Dream Team Discord</span>
              </div>
              <div className="font-mono text-amber-400/90 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20">
                LƯU TRỮ VĨNH VIỄN • NIÊN KHÓA 2026
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
