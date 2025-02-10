'use client'

import { useEffect, useState } from "react"
import NavigationBar from "./components/NavigationBar"
import TransactionItem from "./components/TransactionItem"
import WalletBalance from "./components/WalletBalance"
import { format, subMonths } from "date-fns"

/* eslint-disable @next/next/no-img-element */
const AdminConsulting = () => {
  const [lastTransactions, setLastTransactions] = useState<string[]>([])

  useEffect(() => {
    // Adiciona as transações iniciais
    const previousMonth = subMonths(new Date(), 1)
    const twoMonthsAgo = subMonths(new Date(), 2)

    const initialTransactions = [
      `R$3000.00 - ${format(previousMonth, 'MM/yyyy')}`,
      `R$3000.00 - ${format(twoMonthsAgo, 'MM/yyyy')}`
    ]

    setLastTransactions(initialTransactions)
  }, [])

  // Calcula o rendimento total como o dia atual multiplicado por 100
  const currentDay = new Date().getDate()
  const totalEarningsDisplay = (currentDay * 100).toFixed(2)

  return (
    <main className="mx-auto flex h-screen w-full flex-col overflow-hidden bg-white px-5 pb-2">
      <NavigationBar />

      <div className="relative -mt-1 flex w-full flex-col items-center justify-center">
        <div className="z-0 flex w-full flex-col items-start self-stretch">
          <div className="flex min-h-4 w-4" />
        </div>

        <WalletBalance
          address="0xc8...320f"
          balance="R$200.000,00"
          monthlyEarnings={`+R$ 100,00`}
          monthlyPercentage="+0.05%"
          totalEarnings={`R$${totalEarningsDisplay}`}
        />

        <div className="z-0 flex w-full flex-col items-start self-stretch">
          <div className="flex min-h-4 w-4" />
        </div>

        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/60b92bc5d1f5e8052b47b1bf145ac02d571fadaeed573165ab204083efa2ce41?placeholderIfAbsent=true"
          className="z-0 w-full max-w-full object-contain"
          alt="Chart"
        />

        <h2 className="w-full flex-1 shrink gap-2.5 py-3 text-base font-bold leading-7 tracking-wide text-zinc-800">
          Últimos Recebimentos
        </h2>

        {lastTransactions.map((transaction, index) => (
          <TransactionItem
            key={index}
            amount={transaction.split(' - ')[0]}
            description={`Orenda C.S.A - ${transaction.split(' - ')[1]}`}
            date={format(subMonths(new Date(), index + 1), 'dd/MM/yyyy')}
            percentage="+0.05%"
          />
        ))}

        <div className="z-0 flex min-h-[35px] w-full self-stretch" />

        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/620d7d2be3d2bf2a56bbb9f51c2e19c014e3627d6e6ee516d27c4de79cd6b77c?placeholderIfAbsent=true"
          className="absolute bottom-[219px] right-[23px] z-0 h-0 w-[328px] max-w-full self-start object-contain"
          alt="Background decoration"
        />
      </div>
    </main>
  )
}

export default AdminConsulting