'use client'
import { useState } from 'react'

export function Carousel({
   testimonials,
}: {
   testimonials: { name: string; text: string }[]
}) {
   const [currentIndex, setCurrentIndex] = useState(0)

   function goToPrevious() {
      setCurrentIndex((prevIndex) =>
         prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      )
   }

   // Function to go to the next testimonial
   function goToNext() {
      setCurrentIndex((prevIndex) =>
         prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
   }

   return (
      <div
         className='pl-4 lg:pl-0 static lg:absolute max-w-full lg:max-w-[50%] flex items-start justify-end w-full h-auto overflow-hidden text-center clear-both flex-col'
         style={{
            inset: '0% 0% 0% auto',
         }}
      >
         <div
            className='w-full max-w-[420px] h-auto overflow-visible z-10 whitespace-nowrap block relative left-0 right-0'
            style={{
               transform: `translateX(-${currentIndex * 100}%)`, // Change position based on the current index
               transition: 'transform 0.5s ease', // Smooth transition
            }}
         >
            {testimonials.map((testimonial, i) => (
               <div
                  className='mr-5 align-top whitespace-normal text-left w-full h-full inline-block relative'
                  key={i}
               >
                  <div className='flex p-7 w-full flex-col items-start justify-start rounded-md border border-[#ffffff1a] bg-background-hero gap-6'>
                     <div className='text-accent border border-[#ffffff1a] rounded-[50px] py-[6px] px-[18px]'>
                        {testimonial.name}
                     </div>

                     <p className='text-muted-foreground leading-relaxed'>
                        &quot;{testimonial.text}&quot;
                     </p>
                  </div>
               </div>
            ))}
         </div>

         <div className='flex pt-3 lg:pt-10 gap-2'>
            <button
               className='border border-[#ffffff1a] rounded-full flex justify-center items-center w-[45px] h-[45px] transition-colors hover:bg-secondary'
               onClick={goToPrevious}
            >
               <img alt='Previous' src='left-arrow.svg' />
            </button>

            <button
               className='border border-[#ffffff1a] rounded-full flex justify-center items-center w-[45px] h-[45px] transition-colors hover:bg-secondary'
               onClick={goToNext}
            >
               <img alt='Next' src='right-arrow.svg' />
            </button>
         </div>
      </div>
   )
}
