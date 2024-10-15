import { BsCart2 } from 'react-icons/bs'
import { TiMinus, TiPlus } from 'react-icons/ti'

import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'

import ProductImage1 from '@/app/images/image-product-1.jpg'
import ProductImage2 from '@/app/images/image-product-2.jpg'
import ProductImage3 from '@/app/images/image-product-3.jpg'
import ProductImage4 from '@/app/images/image-product-4.jpg'
import { setCurrency } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'

export default function Home() {
  return (
    <div className='min-h-screen w-full grid place-content-center'>
      <section className='max-w-screen-xl px-5 lg:px-10'>
        <article className='flex items-center justify-center gap-x-10 lg:gap-x-20 xl:gap-x-32 w-full'>
          <div className='order-2 flex-grow max-w-[445px]'>
            <header>
              <div>
                <h2 className='mb-7'>
                  <span className='text-xs font-bold text-primary uppercase tracking-widest'>Sneaker Company</span>
                </h2>
                <h3 className='mb-8'>
                  <span className='text-5xl font-bold text-typography-foreground'>Fall Limited Edition Sneakers</span>
                </h3>
              </div>

              <div className='mb-6'>
                <p className='text-typography'>
                  These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
                </p>
              </div>
            </header>

            <footer className='space-y-8'>
              <div>
                <div className='flex items-center justify-start gap-x-4 mb-3'>
                  <span className='font-bold text-3xl text-typography-foreground'>{setCurrency({ quantity: 125 })}</span>
                  <span>
                    <Badge>50%</Badge>
                  </span>
                </div>

                <span className='text-muted-foreground text-base font-bold'>{setCurrency({ quantity: 250 })}</span>
              </div>

              <div className='flex items-center justify-between gap-x-4 w-full'>
                <div className='bg-secondary inline-flex items-center justify-center w-full max-w-40'>
                  <Button variant={'secondary'} size={'icon'}>
                    <TiMinus />
                  </Button>
                  <span>0</span>

                  <Button variant={'secondary'} size={'icon'}>
                    <TiPlus />
                  </Button>
                </div>

                <Button className='gap-x-4 w-full'>
                  <span>
                    <BsCart2 width={20} height={20} />
                  </span>
                  <span>Add to cart</span>
                </Button>
              </div>
            </footer>
          </div>

          <div className='order-1 flex-grow max-w-[445px]'>
            <Carousel className='rounded-2xl overflow-hidden'>
              <CarouselContent>
                <CarouselItem>
                  <div className=''>
                    <Image src={ProductImage1} alt='Image' width={445} height={445} />
                  </div>
                </CarouselItem>

                <CarouselItem>
                  <div className=''>
                    <Image src={ProductImage2} alt='Image' width={445} height={445} />
                  </div>
                </CarouselItem>

                <CarouselItem>
                  <div className=''>
                    <Image src={ProductImage3} alt='Image' width={445} height={445} />
                  </div>
                </CarouselItem>

                <CarouselItem>
                  <div className=''>
                    <Image src={ProductImage4} alt='Image' width={445} height={445} />
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>

            <div></div>
          </div>
        </article>
      </section>
    </div>
  )
}
