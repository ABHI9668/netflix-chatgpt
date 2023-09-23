import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'
import openai from '../utils/openai'

const GptSearchBar = () => {
    const langSelector = useSelector((store) => store.config.lang)
    const inputData = useRef()

    const handleGPTsearchClick = async () => {
        console.log(inputData.current.value);
        // console.log(inputData.current.value);
        // make an API call to GPT open ai to get movies result.
        const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " + inputData.current.value + ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
        const searchData = await openai.chat.completions.create({
            messages: [{ role: 'user', content:gptQuery}],
            model: 'gpt-3.5-turbo',
        });
        console.log(searchData.choices);
    }


    
    return (
        <div className='pt-[40%]  md:p-[10%] flex justify-center'>
            <form className='w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg' onSubmit={(e) => e.preventDefault()}>
                
                <input type="text" ref={inputData} className='p-4 m-4 col-span-9 rounded-lg ' placeholder={lang[langSelector].gptSearchPlaceholder} />
                <button className='py-2 rounded-lg px-4 bg-red-700 text-white col-span-3  m-4'
                    onClick={handleGPTsearchClick}
                >{lang[langSelector].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar
