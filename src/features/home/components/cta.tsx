import { PrimaryButton } from '@/components/primary-button'
import Image from 'next/image'

export function CTASection() {
   return (
      <section
         id='cta'
         className='bg-background-hero border-b border-[#ffffff1a] py-20  relative overflow-hidden px-4'
      >
         <div className='w-full flex items-end container max-w-screen-xl m-auto'>
            <div className='max-w-full md:max-w-[60%] lg:max-w-[52%] w-full'>
               <h2 className='text-accent uppercase text-[1.75rem] lg:text-4xl font-extrabold mb-5 leading-snug'>
                  Embrace Fitness Excellence at Musclen - Enroll Now!
               </h2>

               <p className='text-muted-foreground'>
                  We are dedicated to helping you achieve your fitness goals
                  with personalized training programs, state-of-the-art
                  facilities, and a supportive community of like-minded
                  individuals.
               </p>

               <div className='mt-10 '>
                  <PrimaryButton>Explore Membership</PrimaryButton>
               </div>
            </div>

            <div>
               <Image
                  src='/cta/1.png'
                  alt='Imagen de...'
                  width={252}
                  height={350}
                  className='object-cover w-[252px] h-[350px] absolute hidden lg:block'
                  style={{
                     inset: 'auto 25% 0% auto',
                  }}
               />

               <Image
                  src='/cta/2.png'
                  width={220}
                  height={450}
                  alt='Imagen de...'
                  className='object-cover w-[220px] h-[450px] absolute hidden md:block'
                  style={{
                     inset: 'auto 6% 0% auto',
                  }}
               />
            </div>
         </div>
      </section>
   )
}
