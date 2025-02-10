export default function RememberPassword() {
  return (
    <label className="mt-8 flex cursor-pointer gap-3 self-start text-sm leading-none text-black">
      <input
        type="checkbox"
        className="aspect-square w-5 shrink-0 object-contain"
      />
      <span>Lembrar Senha</span>
    </label>
  )
}
