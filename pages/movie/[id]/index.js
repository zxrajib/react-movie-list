import axios from "axios";
import Image from "next/image";
import Meta from "../../../components/meta";
import { server } from "../../../config";


const Movie = ({movie}) => {
console.log(movie);  
  return (
    <div className="container max-w-4xl mx-auto pt-6">
      {/* <Meta title={movie.title} /> */}
      <div >
      <Image className="rounded-t-md" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} width={1000} height={500}  />
      <h1 className="font-bold text-xl my-2">{movie.title}</h1>
      <p className="text-gray-700 text-base mt-4">{movie.overview}</p>
      <p className="mt-5 text-gray-700 text-sm">Genre:
        <span className="font-bold"> {movie.genres.map(genre=>genre.name).join(',')} </span>
      </p>
      <p>Release Date: <span className="font-bold">{movie.release_date}</span></p>
      </div>
    </div>
  );
}

export async function getStaticProps(context){
  // console.log(context);
  const {id} = context.params;
  const res = await axios(`${server}/${id}?api_key=${process.env.API_key}&language=en-US&page=1`)
   
    const movie = res.data; 
    return {
      props:{movie}
    }
  }

export async function getStaticPaths(){
  const res = await axios(`${server}/popular?api_key=${process.env.API_key}&language=en-US&page=1`)
    const movies = res.data.results;
    // console.log('moviesmovies',movies);
    const ids = movies.map(movie=>movie.id)
    const paths = ids.map(id=>({
      params:{id:id.toString()}
    }))
    return {
      paths,
      fallback:false
    }
  }
  
export default Movie;
