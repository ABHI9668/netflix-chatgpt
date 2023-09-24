import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {




    return (
        <div className='px-6 '>
            <h1 className='md:text-3xl font-semibold p-5 text-2xl text-white'>{title}</h1>
            <div className=' md:flex p-5 overflow-x-scroll ' >

                <div className='flex'>
                    {movies?.map((movie) => (<MovieCard key={movie.id} posterPath={movie.poster_path} />))}


                </div>
            </div>



        </div>
    )
}

export default MovieList


