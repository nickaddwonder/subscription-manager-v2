import FirestoreId from "@customTypes/firestore/FirestoreId";
import TMDBMovie from "@customTypes/tmdb/Movie";

type Movie = FirestoreId & TMDBMovie;

export default Movie;
