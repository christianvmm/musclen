import { SectionSubtitle } from '@/components/section-subtitle'
import { SectionTitle } from '@/components/section-title'
import { Carousel } from '@/features/home/components/carousel'
import Image from 'next/image'

const testimonials = [
   {
      name: 'Wade Warren, Athlet',
      text: 'Joining Musclen has been one of the best decisions I’ve made for my health. The staff is incredibly supportive, and the variety of equipment and classes keeps me motivated. Highly recommend!',
   },
   {
      name: 'Ronald Richards, Wrestler',
      text: 'I love the community atmosphere at Musclen. The trainers are knowledgeable and always available to help. The group fitness classes are challenging. I’ve seen great improvements in my fitness levels.',
   },
   {
      name: 'Eleanor Pena, Triathlete',
      text: `As someone new to working out, I was a bit intimidated at first, but the supportive environment at Musclen made me feel right at home. The beginner fitness program was just what I needed to get started.`,
   },
]

export function TestimonialsSection() {
   return (
      <section id='testimonials'>
         <div className='mb-6 container max-w-screen-xl m-auto px-4'>
            <SectionSubtitle>Testimonials</SectionSubtitle>
            <SectionTitle>Client Reviews</SectionTitle>
         </div>

         <div className='relative'>
            <div className='w-full flex flex-col gap-10 lg:gap-0 lg:flex-row items-end container max-w-screen-xl m-auto'>
               <div className='max-w-full lg:max-w-[50%] w-full pl-4 overflow-x-hidden'>
                  <div className='flex gap-10 items-center'>
                     <Image
                        width={360}
                        height={360}
                        src='/testimonials/1.jpg'
                        alt='Imagen de...'
                        className='w-[180px] h-[180px] object-cover rounded-full'
                     />
                     <Image
                        width={240}
                        height={240}
                        src='/testimonials/2.jpg'
                        alt='Imagen de...'
                        className='w-[120px] h-[120px] object-cover rounded-full'
                     />
                  </div>

                  <div className='flex gap-10 items-start pl-[90px]'>
                     <Image
                        width={480}
                        height={480}
                        src='/testimonials/3.jpg'
                        alt='Imagen de...'
                        className='w-[240px] h-[240px] object-cover rounded-full'
                     />

                     <Image
                        width={320}
                        height={320}
                        src='/testimonials/4.jpg'
                        alt='Imagen de...'
                        className='w-[160px] h-[160px] object-cover rounded-full -mt-[35px]'
                     />
                  </div>
               </div>

               <Carousel testimonials={testimonials} />
            </div>
         </div>
      </section>
   )
}
