import { OutlineButton } from '@/components/outline-button'
import { SectionSubtitle } from '@/components/section-subtitle'
import { SectionTitle } from '@/components/section-title'
import Image from 'next/image'

export function StorySection() {
   return (
      <section id='story' className='container max-w-screen-xl m-auto'>
         <div className='flex flex-col lg:flex-row gap-10 lg:gap-14 justify-between items-center relative'>
            {/* left */}
            <div className='px-4 flex-1 order-last md:order-first'>
               <div className='flex-1 rounded-md overflow-hidden'>
                  <Image
                     width={1236}
                     height={1160}
                     src='/story/1.jpg'
                     alt='Imagen de..'
                     className='rounded-md'
                  />
               </div>
            </div>

            {/* right */}
            <div className='flex-1 px-4'>
               <div className='mb-6'>
                  <SectionSubtitle>Our Story</SectionSubtitle>
                  <SectionTitle>Our Fitness Evolution</SectionTitle>
               </div>

               <p className='mb-3 text-muted-foreground'>
                  At Musclen, our journey began with a simple vision to create a
                  space where people of all fitness levels could come together
                  to transform their lives through exercise and community
                  support. We are inspired by our members dedication, progress,
                  and achievements.
               </p>

               <p className='text-muted-foreground'>
                  Founded in 2009, we have grown from a small local gym into a
                  thriving fitness hub, dedicated to helping our members achieve
                  their personal health and wellness goals, ensuring that there
                  is something for everyone.
               </p>

               <div className='mt-10'>
                  <h5 className='text-accent  text-lg  font-medium leading-normal'>
                     Founder of Musclen
                  </h5>

                  <span className='text-sm text-muted-foreground'>
                     Marvin McKinney
                  </span>
               </div>

               <div className='mt-7 md:mt-14'>
                  <OutlineButton>About us</OutlineButton>
               </div>

               <div className='bg-secondary text-accent rounded-md p-5 md:p-6 absolute w-full bottom-0 right-4 max-w-[30%]  md:right-4 md:bottom-4 md:max-w-[23%] lg:right-4 lg:bottom-4 lg:max-w-[14%]'>
                  <span className='text-5xl font-bold leading-none'>24+</span>

                  <p className='text-sm '>Worldwide Fitness Center</p>
               </div>
            </div>
         </div>
      </section>
   )
}
