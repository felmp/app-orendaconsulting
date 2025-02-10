/* eslint-disable @next/next/no-img-element */
export default function WelcomeSection() {
  return (
    <section className="flex flex-col items-start">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1974e5dce668a055c91630f02c38c64f10d27a4bd0ff1301f0f051534f02a7d3?placeholderIfAbsent=true&apiKey=5151a3d1520f47e6b245336a78ef3d5e"
        className="aspect-[3.33] w-[260px] max-w-[260px] self-center object-contain max-sm:mt-24"
        alt="Welcome logo"
      />
      <div className="mt-10 flex gap-2 self-start text-2xl font-bold leading-tight tracking-tight text-black">
        <h1 className="grow">Seja bem vindo(a)!</h1>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c01f44be587306059a662354baebff0c6943ebe7af56d5a834e54be712ebfbae?placeholderIfAbsent=true&apiKey=5151a3d1520f47e6b245336a78ef3d5e"
          className="aspect-square w-[30px] shrink-0 self-start object-contain"
          alt="Welcome icon"
        />
      </div>
    </section>
  )
}