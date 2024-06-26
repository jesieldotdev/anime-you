import axios from 'axios';

const apiKey = import.meta.env.VITE_TMDB_API_KEY


// Supondo que você tenha uma função para buscar detalhes de um anime
export async function getAnimeDetails(animeId: number): Promise<void> {
 try {
    const response = await axios.get<unknown>(`https://api.themoviedb.org/3/anime/${animeId}?api_key=${apiKey}`);
    console.log(response.data);
 } catch (error) {
    console.error('Erro ao buscar detalhes do anime:', error);
 }
}

// Exemplo 