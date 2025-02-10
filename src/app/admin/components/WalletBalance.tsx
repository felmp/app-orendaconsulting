/* eslint-disable @next/next/no-img-element */

interface WalletBalanceProps {
  address: string
  balance: string
  monthlyEarnings: string
  monthlyPercentage: string
  totalEarnings: string
}

export default function WalletBalance({
  address,
  balance,
  monthlyEarnings,
  monthlyPercentage,
  totalEarnings,
}: WalletBalanceProps) {
  return (
    <section className="z-0 w-full max-w-full bg-white py-2.5">
      <div className="w-full">
        <header className="flex w-full items-center gap-1.5">
          <h2 className="my-auto self-stretch text-xs leading-loose tracking-wide text-neutral-700">
            Meu Investimento
          </h2>
          <span className="my-auto gap-2.5 self-stretch whitespace-nowrap rounded-[120px] bg-gray-100 px-2 py-0.5 text-sm leading-none tracking-wide text-zinc-400">
            {address}
          </span>
        </header>
        <p className="mt-2 w-full self-stretch whitespace-nowrap text-3xl font-bold leading-none tracking-wide text-zinc-800">
          {balance}
        </p>
      </div>

      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/450726b32fd28d01ba6632622cc4e6d4106eb7408e1eae6e8f34ecf3067c7118?placeholderIfAbsent=true"
        className="mt-2.5 w-full object-contain"
        alt="Investment chart"
      />

      <div className="mt-2.5 w-full">
        <div className="flex w-full items-center gap-1.5 text-xs leading-loose tracking-wide text-neutral-700">
          <span className="my-auto w-full self-stretch">Rendimento no mês</span>
          <span className="my-auto w-full self-stretch text-right">
            Rentabilidade no mês
          </span>
        </div>
        <div className="mt-2 flex w-full items-center justify-between gap-10 whitespace-nowrap">
          <p className="my-auto self-stretch text-2xl font-bold leading-10 tracking-wide text-green-500">
            {monthlyEarnings}
          </p>
          <span className="my-auto self-stretch rounded-[120px] bg-green-500 px-2 py-1 text-base font-semibold leading-none tracking-wide text-white">
            {monthlyPercentage}
          </span>
        </div>
      </div>

      <p className="mt-2.5 w-full text-xs leading-loose tracking-wide text-neutral-700">
        Rendimento Total: <strong>{totalEarnings}</strong>
      </p>
    </section>
  )
}
