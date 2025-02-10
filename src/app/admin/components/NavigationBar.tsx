/* eslint-disable @next/next/no-img-element */

export default function NavigationBar() {
  return (
    <nav className="z-10 w-full bg-white bg-opacity-90 pt-7 backdrop-blur-md">
      <div className="flex w-full items-center justify-between gap-10 py-2">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0bd241c9289f3b71006e5bf236a0d3dd2f5311857519f5c4f99bae9d7a275077?placeholderIfAbsent=true"
          className="my-auto aspect-square w-10 shrink-0 self-stretch rounded-full object-contain shadow-lg"
          alt="User avatar"
        />
        <button className="my-auto flex h-11 w-11 items-center gap-2.5 self-stretch rounded-[40px] bg-white p-2.5 shadow-lg">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/23c13e0506e736819eb24491f0119b24199a23e20bdd12593353529b6061e093?placeholderIfAbsent=true"
            className="aspect-square w-6 object-contain"
            alt="Menu icon"
          />
        </button>
      </div>
    </nav>
  )
}
