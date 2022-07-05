import React, { useState } from 'react'
import Image from 'next/image'
import { SliderData } from './SliderData'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'

const Slider = ({ slides }) => {

    const [current, setCurrent] = useState(0);
    console.log(SliderData.length)
    const length = SliderData.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(SliderData) || SliderData.length === 0) {
        return null
    }



    return (
        <div id='gallery' className='max-w-[1240px] mx-auto'>
            <h1 className='text-2xl font-bold text-center p-4'>Gallery</h1>
            <div className='relative flex justify-center p-4'>
                {SliderData.map((slide, index) => {
                    return (
                        <div
                            key={index}
                            className={
                                index === current
                                    ? 'opacity-[1] ease-in duration-1000'
                                    : 'opacity-0'}
                        >

                            <FaArrowCircleLeft onClick={prevSlide} className='absolute top-[50%] left-[30px] text-white/70 cursor-pointer-none z-[2]' size={50} />
                            {index === current && (
                                <>
                                    <p className='bg-black text-white py-3 text-center' > {slide.description} </p>
                                    <Image
                                        src={slide.image}
                                        alt='/'
                                        width='1440'
                                        height='600'
                                        objectFit='fit'
                                        className=''
                                    />

                                </>

                            )}
                            <FaArrowCircleRight onClick={nextSlide} className='absolute top-[50%] right-[30px] text-white/70 cursor-pointer-none z-[2]' size={50} />
                        </div>
                    );

                })}
            </div>
        </div>
    )
}

export default Slider