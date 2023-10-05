import React from "react";
import { useParams } from "react-router-dom";
import CountryCard from "../../components/countryCard";

export default function Country() {
  const params = useParams();
  const { countryIndex } = params;

  const countries = [
    {
      nome: "França",
      index: 0,
      description: "A França é conhecida por sua cultura, gastronomia e paisagens deslumbrantes.",
      price: 3000,
      imagem: "https://s4.static.brasilescola.uol.com.br/be/2021/07/torre-eiffel.jpg",
      atracoes: [
        {
          nome: "Torre Eiffel",
          description: "Ícone de Paris e da França.",
          visitPrice: 25,
          imagem: "https://elquarto.com/blog/wp-content/uploads/2022/06/Cidades-da-Franca.jpg",
        },
        {
          nome: "Museu do Louvre",
          description: "Casa da Mona Lisa e inúmeras obras de arte.",
          visitPrice: 20,
          imagem: "https://imgmd.net/images/v1/guia/1703516/museu-do-louvre-em-paris.jpg",
        },
        {
          nome: "Palácio de Versalhes",
          description: "Residência real extravagante com belos jardins.",
          visitPrice: 15,
          imagem:
            "https://res.cloudinary.com/hello-tickets/image/upload/c_limit,f_auto,q_auto,w_1300/v1645981604/tkfwsxjykiqfrbfw2nj5.jpg",
        },
      ],
    },
    {
      nome: "Estados Unidos",
      index: 1,
      description:
        "Os EUA oferecem uma variedade de destinos, desde cidades movimentadas até parques nacionais deslumbrantes.",
      price: 2500,
      imagem: "https://blog.123milhas.com/wp-content/uploads/2022/03/BANNER-CIDADES-CONHECER-EUA-123MILHAS.jpg",
      atracoes: [
        {
          nome: "Grand Canyon",
          description: "Desfiladeiro espetacular no Arizona.",
          visitPrice: 30,
          imagem: "https://www.americanrivers.org/wp-content/uploads/2022/12/AmyMartin_GC_from_above.jpg",
        },
        {
          nome: "Nova York",
          description: "A cidade que nunca dorme, repleta de atrações.",
          visitPrice: 40,
          imagem: "https://dicasnovayork.com.br/wp-content/uploads/2022/06/melhor_heder.jpg.webp",
        },
        {
          nome: "Parque Nacional de Yellowstone",
          description: "Geisers, fontes termais e vida selvagem única.",
          visitPrice: 20,
          imagem:
            "https://www.visiteosusa.com.br/sites/default/files/styles/hero_l/public/images/hero_media_image/2016-10/Yellowstone.jpg?itok=OpHn5jav",
        },
      ],
    },
    {
      nome: "Espanha",
      index: 2,
      description: "A Espanha é famosa por sua cultura vibrante, praias deslumbrantes e arquitetura histórica.",
      price: 2000,
      imagem: "https://sweetway.com.br/wp-content/uploads/2019/05/dez-motivos-conhecer-espanha.jpg",
      atracoes: [
        {
          nome: "Sagrada Família",
          description: "Famosa igreja em Barcelona, projetada por Gaudí.",
          visitPrice: 20,
          imagem: "https://www.infoescola.com/wp-content/uploads/2020/06/sagrada-familia-580081957.jpg",
        },
        {
          nome: "Alhambra",
          description: "Complexo palaciano histórico em Granada.",
          visitPrice: 15,
          imagem: "https://cdn.getyourguide.com/img/location/60096d8b4abac.jpeg/99.jpg",
        },
        {
          nome: "Costa del Sol",
          description: "Litoral ensolarado com praias maravilhosas.",
          visitPrice: 10,
          imagem: "https://www.nothingfamiliar.com/wp-content/uploads/2022/01/Costa-del-Sol-1440x960.jpg",
        },
      ],
    },
    {
      nome: "Itália",
      index: 3,
      description: "A Itália é famosa por sua arte renascentista, culinária deliciosa e cidades históricas encantadoras.",
      price: 2500,
      imagem: "https://humanidades.com/wp-content/uploads/2018/09/italia-venecia-e1579918757767.jpg",
      atracoes: [
        {
          nome: "Coliseu de Roma",
          description: "Antigo anfiteatro romano icônico.",
          visitPrice: 15,
          imagem:
            "https://super.abril.com.br/wp-content/uploads/2018/07/566f1d4c82bee174ca031716thinkstockphotos-468978752.jpeg",
        },
        {
          nome: "Veneza",
          description: "Cidade dos canais com arquitetura única.",
          visitPrice: 30,
          imagem: "https://h8f7z4t2.stackpathcdn.com/wp-content/uploads/2015/10/grand-canal-veneza-e1596744121749.jpg",
        },
        {
          nome: "Florença",
          description: "Berço do Renascimento com incríveis museus e galerias de arte.",
          visitPrice: 20,
          imagem:
            "https://images.squarespace-cdn.com/content/v1/52c0b141e4b0b87925bacd01/1527197417968-TH4P418QFN1DM827CMN8/fazer+floren%C3%A7a+roteiro",
        },
      ],
    },
    {
      nome: "China",
      index: 4,
      description: "A China combina uma rica história cultural com paisagens deslumbrantes e cidades modernas.",
      price: 3000,
      imagem:
        "https://images.squarespace-cdn.com/content/v1/5a9e72bc4eddecded2210e98/1578734814842-MNNF8UJ5H2E14JXXRTTV/Fazer-nego%CC%81cio-na-China-pode-ser-muito-lucrativo---se-voce%CC%82-seguir-as-regras.jpg",
      atracoes: [
        {
          nome: "A Grande Muralha da China",
          description: "Maravilha arquitetônica milenar.",
          visitPrice: 30,
          imagem: "https://static.todamateria.com.br/upload/gr/ea/greatwallofchinag2aca9a33a1920-cke.jpg",
        },
        {
          nome: "Pequim",
          description: "Capital com importantes pontos turísticos.",
          visitPrice: 40,
          imagem: "https://elquarto.com/blog/wp-content/uploads/2021/12/Pequim-China.jpg",
        },
        {
          nome: "Xi'an",
          description: "Cidade antiga com o exército de terracota.",
          visitPrice: 25,
          imagem: "https://cdn.britannica.com/19/94119-050-DC0E0606/Lanterns-flags-Xian-city-wall-China-Shaanxi.jpg",
        },
      ],
    },
    {
      nome: "México",
      index: 5,
      description: "O México oferece praias paradisíacas, ruínas antigas e uma rica herança cultural.",
      price: 1500,
      imagem: "https://www.melhoresdestinos.com.br/wp-content/uploads/2021/05/cidade-do-mexico-capa-820x430.jpg",
      atracoes: [
        {
          nome: "Chichen Itza",
          description: "Cidade maia antiga com pirâmide impressionante.",
          visitPrice: 20,
          imagem: "https://www.chichenitza.com/public/assets/img/ruins/chichen-itza-ruins.jpg",
        },
        {
          nome: "Cidade do México",
          description: "Capital vibrante com muita cultura.",
          visitPrice: 30,
          imagem: "https://www.vounajanela.com/wp-content/uploads/2017/11/mexico-1050x599.jpg",
        },
        {
          nome: "Cancún",
          description: "Destino de praia popular e vida noturna animada.",
          visitPrice: 25,
          imagem:
            "https://a.cdn-hotels.com/gdcs/production188/d923/47643da8-6e46-4c83-8379-95b43b9e2684.jpg?impolicy=fcrop&w=800&h=533&q=medium",
        },
      ],
    },
    {
      nome: "Reino Unido",
      index: 6,
      description: "O Reino Unido oferece história rica, paisagens impressionantes e cidades cosmopolitas.",
      price: 2500,
      imagem: "https://cdn.wizard.com.br/wp-content/uploads/2017/05/28161739/reino-unido-gra-bretanha.jpg",
      atracoes: [
        {
          nome: "Londres",
          description: "Capital com muitos marcos famosos.",
          visitPrice: 35,
          imagem: "https://upload.wikimedia.org/wikipedia/commons/6/67/London_Skyline_%28125508655%29.jpeg",
        },
        {
          nome: "Edimburgo",
          description: "Cidade escocesa com castelos e história intrigante.",
          visitPrice: 25,
          imagem: "https://turismo.eurodicas.com.br/wp-content/uploads/2019/10/edimburgo.jpg",
        },
        {
          nome: "Stonehenge",
          description: "Misterioso círculo de pedras pré-históricas.",
          visitPrice: 20,
          imagem:
            "https://s2-g1.glbimg.com/tTEa1Gf4LU8rEsTiKO1398_DR9A=/0x918:3165x2878/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/Y/4/wkA3q8SemBAsO0OS6wLg/2020-07-29t180807z-891779709-rc263i9iiv61-rtrmadp-3-science-stonehenge.jpg",
        },
      ],
    },
    {
      nome: "Alemanha",
      index: 7,
      description: "A Alemanha é conhecida por sua eficiência, cervejas e belos castelos.",
      price: 2500,
      imagem:
        "https://i0.wp.com/www.eurodicas.com.br/wp-content/uploads/2017/11/tudo-sobre-a-alemanha-1.jpg?fit=1360%2C907&ssl=1",
      atracoes: [
        {
          nome: "Castelo de Neuschwanstein",
          description: "Castelo de conto de fadas na Baviera.",
          visitPrice: 20,
          imagem:
            "https://rotasdeviagem.com.br/wp-content/uploads/2020/09/historia-e-curiosidades-castelo-de-neuschwanstein.jpg",
        },
        {
          nome: "Berlim",
          description: "Capital com história e cultura moderna.",
          visitPrice: 30,
          imagem: "https://www.passagenspromo.com.br/blog/wp-content/uploads/2019/08/o-que-fazer-em-berlim-740x415.jpeg",
        },
        {
          nome: "Munique",
          description: "Cidade bávara famosa pela Oktoberfest.",
          visitPrice: 25,
          imagem: "https://rotadeferias.com.br/wp-content/uploads/2022/10/Depositphotos_197063222_L.jpg",
        },
      ],
    },
    {
      nome: "Tailândia",
      index: 8,
      description: "A Tailândia oferece praias tropicais, templos budistas e uma cena gastronômica incrível.",
      price: 2000,
      imagem:
        "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/07/passagens-aereas-tailandia-capa2019-05-820x430.jpg",
      atracoes: [
        {
          nome: "Bangkok",
          description: "Capital movimentada com templos impressionantes.",
          visitPrice: 20,
          imagem: "https://a.cdn-hotels.com/gdcs/production172/d459/3af9262b-3d8b-40c6-b61d-e37ae1aa90aa.jpg",
        },
        {
          nome: "Chiang Mai",
          description: "Cidade no norte com cultura e montanhas deslumbrantes.",
          visitPrice: 15,
          imagem: "https://a.cdn-hotels.com/gdcs/production9/d679/184d7edf-5c3a-470c-8529-b0085d6d5b0e.jpg",
        },
        {
          nome: "Phuket",
          description: "Ilha paradisíaca com praias deslumbrantes.",
          visitPrice: 25,
          imagem: "https://www.letsphuket.com/wp-content/uploads/phuket1.jpg",
        },
      ],
    },
    {
      nome: "Japão",
      index: 9,
      description: "O Japão combina tradição e modernidade de maneira única, com templos antigos e cidades futurísticas.",
      price: 3000,
      imagem: "https://s2.static.brasilescola.uol.com.br/be/2021/10/vista-toquio.jpg",
      atracoes: [
        {
          nome: "Tóquio",
          description: "Capital eletrizante com tecnologia de ponta.",
          visitPrice: 40,
          imagem:
            "https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/df20a2d7bd7540700e9094cdf52cf209.jpg",
        },
        {
          nome: "Quioto",
          description: "Cidade histórica com templos e tradições preservadas.",
          visitPrice: 25,
          imagem: "https://melevamundo.com.br/novo/wp-content/uploads/2022/02/cerejeiras-min-1024x683.jpg",
        },
        {
          nome: "Monte Fuji",
          description: "Montanha icônica para caminhadas e vistas panorâmicas.",
          visitPrice: 20,
          imagem: "https://res.cloudinary.com/jnto/image/upload/w_750,h_503,fl_lossy,f_auto/v1531981666/fujiguide/SG010_6",
        },
      ],
    },
    {
      nome: "Austrália",
      index: 10,
      description: "A Austrália oferece uma diversidade incrível, desde praias incríveis até o deserto vasto.",
      price: 3500,
      imagem: "https://www.remessaonline.com.br/blog/wp-content/uploads/2022/06/maiores-cidades-da-australia-1200x675.jpg",
      atracoes: [
        {
          nome: "Sydney",
          description: "Cidade costeira com a icônica Ópera de Sydney.",
          visitPrice: 35,
          imagem:
            "https://content.r9cdn.net/rimg/dimg/12/98/b1e36771-city-2258-163f4d7f814.jpg?crop=true&width=1020&height=498",
        },
        {
          nome: "Grande Barreira de Coral",
          description: "Recife de corais espetacular para mergulho.",
          visitPrice: 50,
          imagem: "https://i0.statig.com.br/bancodeimagens/39/88/xh/3988xhbke9qwgi98r5ema9lbe.jpg",
        },
        {
          nome: "Uluru (Ayers Rock)",
          description: "Monólito vermelho no deserto australiano.",
          visitPrice: 25,
          imagem:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Uluru_%28Helicopter_view%29-crop.jpg/800px-Uluru_%28Helicopter_view%29-crop.jpg",
        },
      ],
    },
    {
      nome: "Grécia",
      index: 11,
      description: "A Grécia é famosa por suas ilhas pitorescas, história antiga e culinária deliciosa.",
      price: 2500,
      imagem:
        "https://i0.wp.com/www.eurodicas.com.br/wp-content/uploads/2018/06/tudo-sobre-a-grecia-1.jpg?fit=1360%2C907&ssl=1",
      atracoes: [
        {
          nome: "Atenas",
          description: "Capital com a Acrópole e ruínas antigas.",
          visitPrice: 20,
          imagem: "https://www.infoescola.com/wp-content/uploads/2018/09/atenas-719305414.jpg",
        },
        {
          nome: "Santorini",
          description: "Ilha cênica com vistas espetaculares do mar Egeu.",
          visitPrice: 30,
          imagem: "https://www.melhoresdestinos.com.br/wp-content/uploads/2021/04/santorini-grecia-capa-820x430.jpg",
        },
        {
          nome: "Mikonos",
          description: "Ilha conhecida por suas praias e vida noturna animada.",
          visitPrice: 25,
          imagem: "https://www.abraceomundo.com/wp-content/uploads/2019/04/mykonos-grecia-696x464.jpg",
        },
      ],
    },
  ];

  const currentCountrie = countries.filter((countrie) => countrie.index == countryIndex);

  return (
    <main className="font-montserrat bg-[#111827] text-white flex flex-col items-center min-h-screen overflow-x-hidden">
      <section className="p-4 px-6 flex max-w-[90rem] items-center w-full sticky top-0 bg-[#111827]">
        <a href="./">
          <div className="flex gap-2 w-fit p-3 px-6 rounded-full border-brand border hover:bg-brand transition-all cursor-pointer active:scale-90">
            <span className="font-materialIcons">west</span>
            <p>Voltar</p>
          </div>
        </a>
      </section>
      <section className="flex w-full px-6 max-w-[90rem] flex-col">
        <div className="flex flex-col gap-2">
          <div className="flex items-baseline sm:gap-2 sm:flex-row flex-col">
            <p className="font-bold text-4xl">{currentCountrie[0].nome}</p>
            <p className="font-semibold text-xl text-[#FFD600]">R${currentCountrie[0].price * 5.16}</p>
          </div>
          <p>{currentCountrie[0].description}</p>
        </div>
        <div className="max-w-[90rem]">
          <p className="mt-5 font-semibold">Lugares para visitar</p>
          <div className="flex flex-wrap">
            {currentCountrie[0].atracoes.map((atracao) => (
              <CountryCard key={atracao.nome} data={atracao}></CountryCard>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
