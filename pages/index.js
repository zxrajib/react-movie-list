import axios from 'axios';
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/hero'
import PopularMovie from '../components/popularMovie';
import { server } from '../config';

export default function Home({movies}) {
  console.log('movies',movies);
  return (
    <>
  <Hero /> 
  <PopularMovie  movies={movies.results} />
    </>
  )
}

export async function getStaticProps(){
const res = await axios(`${server}/popular?api_key=${process.env.API_key}&language=en-US`)


  const movies = res.data;
  return {
    props:{movies}
  }
}



// https://api.themoviedb.org/3/movie/latest?api_key=<<api_key>>&language=en-US