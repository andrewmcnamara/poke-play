import { type Pokemon, type Stat } from "../../page";

export default async function PokeHome({
  params,
}: {
  params: { name: string };
}) {
  const pokemon: Pokemon = await (
    await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
  ).json();

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="bg-gray-750 max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-64 h-64"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{pokemon.name}</div>
          <p className=" text-white text-base">
            <ul>
              {pokemon.stats.map((stat) => (
                <li key={stat.stat.name}>
                  {stat.stat.name} {stat.base_stat}
                </li>
              ))}
            </ul>
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {pokemon.abilities.map((ability) => (
            <span
              key={ability.ability.name}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {ability.ability.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
