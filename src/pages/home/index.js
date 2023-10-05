import "../../App.css";
import logo from "../../images/logo.png";
import githubLogo from "../../images/githubLogo.png";

function Home() {
  return (
    <main className="font-montserrat bg-[#111827] text-white flex flex-col items-center min-h-screen sm:gap-0 gap-6 overflow-x-hidden">
      <section className="p-4 px-6 flex justify-center max-w-[90rem] sm:justify-between items-center w-full sticky top-0 bg-[#111827] z-10">
        <img src={logo}></img>
        <div className="hidden sm:flex gap-4">
          <a href="https://github.com/guzin-dev/viajometro" target="_blank">
            <div className="h-12 w-12 p-3 rounded-full border-brand border hover:bg-brand transition-all cursor-pointer active:scale-90">
              <img src={githubLogo}></img>
            </div>
          </a>
          <a href="/countrys">
            <div className="h-12 px-7 p-3 rounded-full border-brand border hover:bg-brand transition-all cursor-pointer active:scale-90">
              <p className="font-semibold">Acessar agora</p>
            </div>
          </a>
        </div>
      </section>
      <section className="flex max-w-[90rem] px-12 justify-between w-full items-center sm:flex-row flex-col">
        <div className="relative sm:hidden flex">
          <span className="font-materialIcons text-[10rem] text-brand">flightsmode</span>
          <div className="absolute blurred h-40 w-40 top-20 right-1"></div>
        </div>
        <div className="flex flex-col w-full sm:w-[60%] gap-2 items-center sm:items-start">
          <p className="text-4xl sm:text-6xl tracking-tighter max-w-2xl text-center sm:text-left">
            Descubra <b className="text-brand">destinos</b> e <b className="text-brand">experiências inesquecíveis</b>
          </p>
          <p className="font-semibold text-lg leading-6 tracking-tighter max-w-2xl text-center sm:text-left">
            Descubra o que cada destino tem de melhor para oferecer com nosso guia abrangente
          </p>
          <a href="/countrys">
            <div className="h-12 px-7 w-fit p-3 rounded-full bg-brand mt-2 hover:bg-[#161f32] transition-all active:scale-90 border border-transparent hover:border-brand cursor-pointer">
              <p className="font-semibold">Acessar agora</p>
            </div>
          </a>
        </div>
        <div className="w-[40%] scale-x-[-1] items-center justify-center hidden sm:flex pointer-events-none">
          <span className="font-materialIcons text-[20rem] text-brand">flightsmode</span>
          <div className="absolute blurred h-40 w-40"></div>
        </div>
      </section>
      <section className="flex w-full px-12 justify-center">
        <div className="max-w-[90rem]">
          <div className="flex flex-wrap">
            <div className="sm:w-1/3 w-full p-2">
              <div className="h-full rounded-xl bg-[#161f32]">
                <article className="h-full p-6 flex flex-col">
                  <p className="font-semibold">🧭 Explore destinos</p>
                  <p>
                    Embarque em uma jornada única de descoberta com nosso site, onde você terá a oportunidade de explorar
                    destinos.
                  </p>
                </article>
              </div>
            </div>
            <div className="sm:w-1/3 w-full p-2">
              <div className="h-full rounded-xl bg-[#161f32]">
                <article className="h-full p-6 flex flex-col">
                  <p className="font-semibold">⛅ Planeje sua aventura dos sonhos</p>
                  <p>Com nosso site, a viagem dos seus sonhos se torna uma realidade acessível.</p>
                </article>
              </div>
            </div>
            <div className="sm:w-1/3 w-full p-2">
              <div className="h-full rounded-xl bg-[#161f32]">
                <article className="h-full p-6 flex flex-col">
                  <p className="font-semibold">🌏 Explore o Mundo à Sua Maneira</p>
                  <p>
                    Você molda sua viagem de acordo com suas preferências, tornando-a verdadeiramente inesquecível e única.
                  </p>
                </article>
              </div>
            </div>
            <div className="sm:w-1/3 w-full p-2">
              <div className="h-full rounded-xl bg-[#161f32]">
                <article className="h-full p-6 flex flex-col">
                  <p className="font-semibold">✈ Seu guia completo para destinos</p>
                  <p>
                    Com uma vasta gama de informações detalhadas, você terá todas as ferramentas necessárias para explorar,
                    desfrutar e criar memórias.
                  </p>
                </article>
              </div>
            </div>
            <div className="sm:w-1/3 w-full p-2">
              <div className="h-full rounded-xl bg-[#161f32]">
                <article className="h-full p-6 flex flex-col">
                  <p className="font-semibold">😲 Busca de destinos simplificada</p>
                  <p>
                    Simplificamos a descoberta de destinos para você. Você pode localizar facilmente pontos turísticos,
                    restaurantes, lojas e etc.
                  </p>
                </article>
              </div>
            </div>
            <div className="sm:w-1/3 w-full p-2">
              <div className="h-full rounded-xl bg-[#161f32]">
                <article className="h-full p-6 flex flex-col">
                  <p className="font-semibold">🎢 Sua viagem começa aqui</p>
                  <p>Nós não apenas fornecemos as ferramentas necessárias para planejar sua viagem.</p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex w-full px-12 max-w-[90rem] flex-col items-center py-12">
        <a href="/countrys">
          <div className="h-12 px-7 w-fit p-3 rounded-full bg-brand hover:bg-[#161f32] transition-all active:scale-90 border border-transparent hover:border-brand cursor-pointer">
            <p className="font-semibold">Acessar agora</p>
          </div>
        </a>
      </section>
      <section className="flex p-12 w-screen border-t-2 border-t-gray-800 flex-col items-center">
        <img src={logo}></img>
      </section>
    </main>
  );
}

export default Home;
