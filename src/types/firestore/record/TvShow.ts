import FirestoreId from "@customTypes/firestore/FirestoreId";
import TMDBTvShow from "@customTypes/tmdb/TvShow";

type TvShow = FirestoreId & TMDBTvShow;

export default TvShow;
