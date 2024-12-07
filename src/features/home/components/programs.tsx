import { SectionSubtitle } from '@/components/section-subtitle'
import { SectionTitle } from '@/components/section-title'
import Image from 'next/image'

const items = [
   {
      img: '/programs/1.jpg',
      label: 'Strength Training',
   },
   {
      img: '/programs/2.jpg',
      label: 'Cardio Conditioning',
   },
   {
      img: '/programs/3.jpg',
      label: 'Flexibility & Mobility',
   },
   {
      img: '/programs/4.jpg',
      label: 'Functional Fitness',
   },
]
export function ProgramsSection() {
   return (
      <section id='programs' className='container max-w-screen-xl m-auto px-4'>
         <div className='mb-6'>
            <SectionSubtitle>Balanced Fitness Approach</SectionSubtitle>
            <SectionTitle>Our Fitness Programs</SectionTitle>
         </div>

         <div>
            <ul className='gap-x-8 gap-y-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-auto'>
               {items.map((item, i) => {
                  return (
                     <li className='flex flex-col' key={i}>
                        <div className='rounded-md overflow-hidden'>
                           <Image
                              alt='123'
                              width={600}
                              height={760}
                              className='object-cover w-full min-h-[380px] max-h-[380px]'
                              src={item.img}
                           />
                        </div>

                        <div className='mt-3 flex justify-between items-center'>
                           <p className='text-lg md:text-xl leading-normal'>
                              {item.label}
                           </p>
                        </div>
                     </li>
                  )
               })}
            </ul>
         </div>
      </section>
   )
}
