/* eslint-disable @typescript-eslint/no-explicit-any */
export default function LoginButton({ onClick }: any) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-14 flex w-full items-start whitespace-nowrap text-center text-base font-semibold leading-none tracking-wide text-white shadow-lg"
    >
      <span className="flex min-h-11 w-full min-w-60 flex-1 shrink items-center justify-center self-stretch rounded-[120px] bg-zinc-800">
        Entrar
      </span>
    </button>
  )
}
