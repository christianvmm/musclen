import { PrimaryButton } from '@/components/primary-button'
import { SectionSubtitle } from '@/components/section-subtitle'
import { SectionTitle } from '@/components/section-title'
import Image from 'next/image'

const plans = [
   {
      title: 'Standard',
      subtitle: 'Pro',
      description:
         'Enjoy our state-of-the-art gym equipment, spacious workout areas.',
      price: '$ 900.00 USD',
      items: [
         'Personalized Training',
         'Group Fitness Access',
         'Nutrition Guidance',
         'Exclusive Events',
         'Open Gym Hours',
      ],
   },

   {
      title: 'Premium',
      subtitle: 'Elite',
      description:
         'Enjoy personalized training session, classes, and access to all premium amenities.',
      price: '$ 1,200.00 USD',
      items: [
         'Personalized Training',
         'Group Fitness Access',
         'Health Tracking',
         'Exclusive Events',
         'Nutritional Counseling',
         'Advanced Fitness Assessments',
         'Free Merchandise',
      ],
   },
]

export function MembershipSection() {
   return (
      <section id='programs' className='container max-w-screen-xl m-auto px-4'>
         <div className='mb-6'>
            <SectionSubtitle>Packages</SectionSubtitle>
            <SectionTitle>Pricing Plans</SectionTitle>
         </div>

         <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-4'>
            <li className='hidden md:flex md:col-span-2 md:min-h-[600px] md:max-h-[600px]  flex-col gap-4 lg:col-span-1 lg:min-h-max lg:max-h-max'>
               <div className='rounded-md w-full overflow-hidden h-full'>
                  <Image
                     width={884}
                     height={1196}
                     src='/membership/1.jpg'
                     alt='Imagen de...'
                     className='object-cover w-full h-full md:object-top lg:object-center'
                  />
               </div>
            </li>

            {plans.map((plan, i) => {
               return (
                  <li
                     className='border border-[#ffffff1a] w-full h-full rounded-md flex p-8 justify-between flex-col  gap-10'
                     key={i}
                  >
                     <div>
                        <div className='pb-8 border-b border-[#ffffff1a]'>
                           {/* heading */}
                           <div className='flex justify-between items-end mb-4 flex-wrap'>
                              <div>
                                 <h6 className='text-secondary font-medium mb-2'>
                                    {plan.subtitle}
                                 </h6>

                                 <h2 className='leading-none font-extrabold uppercase text-accent text-3xl'>
                                    {plan.title}
                                 </h2>
                              </div>

                              <span className='text-xl font-semibold leading-normal text-muted-foreground'>
                                 {plan.price}
                              </span>
                           </div>

                           <p className='text-muted-foreground'>
                              {plan.description}
                           </p>
                        </div>

                        {/* list */}
                        <ul className='mt-8 flex flex-col gap-3'>
                           {plan.items.map((item, j) => {
                              return (
                                 <li
                                    key={j}
                                    className='pl-9 text-muted-foreground'
                                    style={{
                                       backgroundImage: 'url(/check.svg)',
                                       backgroundRepeat: 'no-repeat',
                                       backgroundPosition: '0%',
                                    }}
                                 >
                                    {item}
                                 </li>
                              )
                           })}
                        </ul>
                     </div>

                     <PrimaryButton>Get Started</PrimaryButton>
                  </li>
               )
            })}
         </ul>
      </section>
   )
}
