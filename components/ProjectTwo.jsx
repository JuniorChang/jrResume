import React from 'react'
import Image from 'next/image'

const ProjectTwo = () => {
    return (
        <div>
            <div className="
            rounded-xl 
            w-[80%] 
            h-[auto] 
            mx-auto  
            mt-10 
            bg-gradient-to-r p-[6px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]
            mb-20"

            >

                <div className='grid grid-cols-2 gap-0'>
                    {/* One */}
                    <div className="
                flex 
                flex-col 
                h-full bg-black text-white rounded-tl-lg rounded-bl-lg p-4"
                    >

                        <h1 className='text-4xl text-center text-white'>Project Showcase 2</h1>

                        <div className=''>
                            <p className='text-2xl mt-10 ml-5 '> Title:Movie Finder</p>


                        </div>
                        <p className='text-2xl ml-5 '> Category: Simple Website </p>
                        <p className='ml-5'> Type: Front end, restful api</p>
                        <p className='ml-5 mt-5'> Technologies Used:</p>
                        <ul className=' list-disc marker:text-blue-500 ml-8 mt-2'>
                            <li className=''>api</li>
                            <li>Html5</li>
                            <li>CSS3</li>
                            <li>Netlify</li>
                        </ul>
                        <p className='ml-5'>Description: Simple website to showcase calling of Api. Bootstrap and CSS </p>
                        <a href="https://62beb66dcf5ec333cb6802be--gilded-pegasus-cad2fb.netlify.app/" target="_blank" rel="noreferrer" className='ml-5 mt-10 pb-10'>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded '>CLick to see Live Version</button>
                        </a>
                    </div>
                    {/* One */}

                    {/* two */}
                    <div className="
                flex 
                flex-col 
                h-full bg-black text-white rounded-tr-lg rounded-bl-lg p-4"
                    >

                        <Image
                            src="/assets/movieshowcase.png"
                            alt="project1"
                            width={500}
                            height={500}
                            objectFit="contain"
                            className="rounded-lg"
                        />
                    </div>
                    {/* two */}

                </div>



            </div>



        </div>
    )
}

export default ProjectTwo