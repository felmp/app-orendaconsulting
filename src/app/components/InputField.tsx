export default function InputField({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
}: {
  label: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
}) {
  return (
    (
      <div className="mt-8 w-full">
        <label className="text-sm text-black">{label}</label>
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="mt-1.5 w-full gap-2.5 self-stretch rounded-xl border border-solid border-zinc-300 bg-white px-4 py-5 text-base text-black text-opacity-50"
        />
      </div>
    )
  )
}