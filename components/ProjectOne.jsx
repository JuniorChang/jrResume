import Image from 'next/image'
import React from 'react'


const ProjectOne = () => {
    return (
        <div>
            <div className="
            rounded-xl 
            w-[80%] 
            h-[auto] 
            mx-auto  
            mt-10 
            bg-gradient-to-r p-[6px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
            >

                <div className='grid grid-cols-2 gap-0'>
                    {/* PRoject One  Start*/}
                    <div className="
                        flex 
                        flex-col 
                        h-full bg-black text-white rounded-tl-lg rounded-bl-lg p-4"
                    >

                        <h1 className='text-4xl text-center text-white'>Project Showcase 1</h1>

                        <div className=''>
                            <p className='text-2xl mt-10 ml-5 '> Title: Soju Sushi</p>

                        </div>
                        <p className='text-2xl ml-5 '> Category: E-Commerce</p>
                        <p className='ml-5'> Type: Full Stack</p>
                        <p className='ml-5 mt-5'> Technologies Used:</p>
                        <ul className=' list-disc marker:text-blue-500 ml-8 mt-2'>
                            <li className=''>MongoDb/Mongoose</li>
                            <li>NodeJs</li>
                            <li>ExpressJs</li>
                            <li>ReactJs, Redux</li>
                            <li>jsonwebtoken</li>
                            <li>axios</li>
                            <li>Paypal</li>
                            <li>Heroku</li>
                        </ul>
                        <p className='ml-5'>Description: Full Stack E-commerce website that allows user to add, edit, delete products. Basically CRUD functions. </p>
                        <a href="http://jrsushishop.herokuapp.com/" target="_blank" className='ml-5 mt-10 pb-10'>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded '>CLick to see Live Version</button>
                        </a>
                    </div>
                    {/* Project One End */}

                    {/* Project Two Start */}
                    <div className="
                        flex 
                        flex-col 
                        h-full bg-black text-white rounded-tr-lg rounded-bl-lg p-4"
                    >

                        <Image
                            src="/assets/sushi.png"
                            alt="project1"
                            width={500}
                            height={500}
                            objectFit="contain"
                            className="rounded-lg"
                        />
                    </div>
                    {/* Project Two End */}

                </div>



            </div>



        </div>
    )
}

export default ProjectOne