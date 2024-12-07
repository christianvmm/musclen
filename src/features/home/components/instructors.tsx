import { SectionSubtitle } from '@/components/section-subtitle'
import { SectionTitle } from '@/components/section-title'
import Image from 'next/image'

const items = [
   {
      img: '/instructors/1.jpg',
      text: 'Leslie Alexander',
      description: 'CrossFit',
   },
   {
      img: '/instructors/2.jpg',

      text: 'Cameron Williamson',
      description: 'CrossFit',
   },
   {
      img: '/instructors/3.jpg',
      text: 'Esther Howards',
      description: 'Body Building',
   },
]

export function InstructorsSection() {
   return (
      <section id='programs' className='container max-w-screen-xl m-auto px-4'>
         <div className='mb-6'>
            <SectionSubtitle>Trainers</SectionSubtitle>
            <SectionTitle>Our Instructors</SectionTitle>
         </div>

         <ul className='grid grid-cols-2 md:grid-cols-3 auto-rows-auto gap-5 md:gap-10'>
            {items.map((item, i) => {
               return (
                  <li key={i} className='flex flex-col gap-4'>
                     <div className='rounded-md w-full overflow-hidden'>
                        <Image
                           width={440}
                           height={280}
                           src={item.img}
                           alt='Imagen de...'
                           className='object-cover w-full min-h-[280px] max-h-[280px] md:min-h-[440px] md:max-h-[440px]'
                        />
                     </div>

                     <div>
                        <h5 className='mb-[2px] font-medium text-accent text-lg  leading-normal'>
                           {item.text}
                        </h5>

                        <p className='text-sm'>{item.description}</p>
                     </div>
                  </li>
               )
            })}
         </ul>
      </section>
   )
}
