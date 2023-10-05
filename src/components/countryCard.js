function CountryCard(props) {
  return (
    <div className="sm:w-1/3 w-full p-2">
      <div className="h-full rounded-xl bg-[#161f32] relative">
        <article className="h-full p-6 flex flex-col relative z-10">
          <p className="font-semibold">{props.data.nome}</p>
          <p>{props.data.description}</p>
          <p className="mt-auto">Custo médio de</p>
          <p className="font-semibold text-[#FFD600] text-lg">R${props.data.price * 5.16}</p>
          <div className="w-full p-2 rounded-md bg-brand text-center mt-2 hover:bg-[#161f32] transition-all active:scale-90 hover:border-brand cursor-pointer border-transparent border">
            <p className="font-semibold">Ver mais</p>
          </div>
        </article>
        <img className="absolute top-0 rounded-xl w-full h-full z-0 opacity-30" src={props.data.imagem}></img>
      </div>
    </div>
  );
}

export default CountryCard;
