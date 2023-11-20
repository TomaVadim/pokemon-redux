import { useDispatch } from "@/stores/redux/hooks/use-dispatch/use-dispatch";
import { useSelector } from "@/stores/redux/hooks/use-selector/use-selector";
import { fetchPokemons } from "@/stores/redux/middlewares/pokemons-middlewares/pokemons-middleware";
import { useEffect } from "react";

export const Pokemons = (): JSX.Element => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons.data);

  console.log(pokemons);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  return (
    <>
      {pokemons.map((pokemon) => (
        <div>
          <h3>{pokemon.pokemonName}</h3>
          <img src={pokemon.pokemonImage} alt="" />
        </div>
      ))}
    </>
  );
};
