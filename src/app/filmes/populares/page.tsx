import Title from "@/app/components/Title";
import Grid from "@/app/components/Grid";
import { getPopularMovies } from "@/lib/api/tmdb";

export const revalidate = 60; // atualiza a cada 60s


const FilmesPopulares = async () =>{

    const filmes = await getPopularMovies();
    return(
        <>
        <Title title="Filmes Populares"/>
        <Grid filmes={filmes}/>
        </>
    )
}

export default FilmesPopulares;