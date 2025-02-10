import Image from "next/image"
import imgMoney from '../../../../public/icon-money.svg'

interface TransactionItemProps {
  amount: string
  description: string
  date: string
  percentage: string
}

export default function TransactionItem({
  amount,
  description,
  percentage,
}: TransactionItemProps) {
  return (
    <article className="z-0 flex w-full items-center gap-4 py-3">
      <div className="flex items-center">
        <Image loading="lazy" src={imgMoney} alt="Transaction icon" />
      </div>
      <div className="my-auto min-w-60 flex-1 shrink basis-0 self-stretch">
        <div className="flex h-[19px] w-full items-start justify-between gap-10 text-sm font-semibold leading-6 tracking-wide text-zinc-800">
          <h3>Rendimento Aplicação</h3>
          <span>{amount}</span>
        </div>
        <div className="flex w-full items-start justify-between gap-10 tracking-wide">
          <p className="text-xs leading-5 text-zinc-400">{description}</p>
          <span className="text-xs leading-loose text-green-500">
            {percentage}
          </span>
        </div>
      </div>
    </article>
  )
}