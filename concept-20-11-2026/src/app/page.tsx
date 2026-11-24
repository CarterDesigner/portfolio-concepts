import { ReactNode } from 'react';
import Image from "next/image";
import Link from "next/link";
import image1 from '../../public/image 1.png';
import image2 from '../../public/image 2.png';
import image3 from '../../public/image 3.png'
import Cta1 from "@/components/cta btn/cta1/page";
import ScrollableBar from "@/components/scrollable bar/page";

interface ReviewCardProps {
  title: string;
  starCount?: number;
  message: string;
  name: string;
  location: string;
  service: string;
}

function ReviewCard({
  title,
  starCount = 5,
  message,
  name,
  location,
  service,
}: ReviewCardProps) {
  const clampedStars = Math.max(0, Math.min(5, Math.round(starCount)));

  return (
    <div className="w-full flex flex-col px-5 py-5 drop-shadow-black bg-bright-snow-white gap-2.5">
      <div className='w-full flex flex-row'>
        <div className='flex items-center gap-2.5' aria-label={`Rated ${clampedStars} out of 5`}>
          {Array.from({ length: 5 }).map((_, index) => {
            const isFilled = index < clampedStars;
            return (
              <svg key={index} width="48" height="46" viewBox="0 0 48 46" fill="currentColor" className={`h-7.5 w-7.5 ${ isFilled ? 'text-safety-orange' : 'text-bright-snow-white'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.7764 0L29.3892 17.2746H47.5528L32.8582 27.9508L38.471 45.2254L23.7764 34.5491L9.08174 45.2254L14.6946 27.9508L-4.57764e-05 17.2746H18.1635L23.7764 0Z" fill="#0F172A"/>
              </svg>
            );
          })}
        </div>
      </div>
      <div className="w-full flex flex-col gap-2.5">
        <div className="header-4 text-black">
          <span>{title}</span>
        </div>
        <div className="para-2 text-black">
          <span>&ldquo;{message}&rdquo;</span>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row header-5 text-black lg:gap-5">
        <span>{name}</span>
        <span className='lg:border-l border-safety-orange lg:pl-5'>{location}</span>
        <span className='text-safety-orange lg:border-l border-safety-orange lg:pl-5'>{service}</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <div id="hero" className="w-full min-h-140 flex flex-col lg:flex-row border-b border-safety-orange">
        <div className="w-full min-h-87.5 lg:w-[60%] overflow-hidden relative">
          <Image src={image1} alt="" fill className="object-cover object-center w-full top-0 left-0" priority />
        </div>
        <div className="w-full lg:w-[40%] max-lg:border-t lg:border-l border-safety-orange flex flex-col justify-between">
          <div className="w-full px-5 py-5 header-3">
            <span className="text-black">Local. Licensed. Guaranteed.</span>
          </div>
          <div className="w-full flex flex-col gap-5">
            <div className="px-5 para-1">
              <span className="text-black">From urgent storm repairs to complete roof replacements, our accredited UK roofers protect your property with a 25-year workmanship guarantee.</span>
            </div>
            <div className="h-[calc(min+19px)]">
              <Cta1 link="#contact">View Our Services</Cta1>
            </div>
          </div>
        </div>
      </div>
      <div id="cta-1" className="w-full flex border-b border-safety-orange">
        <div className="flex md:hidden w-full h-full min-h-100">
          <ScrollableBar>
            <div className="w-full h-full flex flex-col justify-between px-5 py-5">
              <div className="w-full header-3 flex flex-col">
                <Link href={'#cta-1'} className="link-text text-safety-orange">01 / Industry Tested</Link>
                <span className="text-black">Industry Tested</span>
              </div>
              <div className="w-full para-1">
                <span className="text-black">Fully insured and NFRC-accredited, we use weather-tested slate, clay tiles, and GRP fibreglass systems built for British weather.</span>
              </div>
            </div>
            <div className="w-full h-full flex flex-col justify-between px-5 py-5">
              <div className="w-full header-3 flex flex-col">
                <Link href={'#cta-1'} className="link-text text-safety-orange">02 / Fast Schedule</Link>
                <span className="text-black">Fast Schedule</span>
              </div>
              <div className="w-full para-1">
                <span className="text-black">Need an urgent leak fixed? We offer free drone roof inspections within 48 hours and transparent, fixed-price quotes with zero hidden fees.</span>
              </div>
            </div>
          </ScrollableBar>
        </div>
        <div className="hidden md:flex w-full flex-row">
          <div className="lg:w-6/10 max-lg:w-full h-full flex flex-row">
            <div className="w-1/2 h-full flex flex-col justify-between px-5 py-5 border-r border-safety-orange">
              <div className="w-full header-3 flex flex-col">
                <Link href={'#cta-1'} className="link-text text-safety-orange">01 / Industry Tested</Link>
                <span className="text-black">Industry Tested</span>
              </div>
              <div className="w-full para-1">
                <span className="text-black">Fully insured and NFRC-accredited, we use weather-tested slate, clay tiles, and GRP fibreglass systems built for British weather.</span>
              </div>
            </div>
            <div className="w-1/2 h-full flex flex-col justify-between px-5 py-5">
              <div className="w-full header-3 flex flex-col">
                <Link href={'#cta-1'} className="link-text text-safety-orange">02 / Fast Schedule</Link>
                <span className="text-black">Fast Schedule</span>
              </div>
              <div className="w-full para-1">
                <span className="text-black">Need an urgent leak fixed? We offer free drone roof inspections within 48 hours and transparent, fixed-price quotes with zero hidden fees.</span>
              </div>
            </div>
          </div>
          <div className="lg:w-4/10 max-lg:hidden h-full min-h-100 relative overflow-hidden border-l border-safety-orange">
            <Image src={image2} alt="" fill className="object-cover object-center w-full top-0 left-0" />
          </div>
        </div>
      </div>
      <div id="services" className="w-full flex flex-col border-b border-safety-orange">
        <div className="w-full flex items-center justify-center bg-navy-blue py-7.5">
          <span className="lg:header-2 max-lg:header-3 text-bright-snow-white">Our Services</span>
        </div>
        <div className="flex md:hidden w-full h-full min-h-125">
          <ScrollableBar>
            <div className="w-full h-full flex flex-col justify-between ">
              <div className="w-full header-3 flex flex-col px-5 py-5">
                <span className="link-text text-safety-orange">03 / Pitched Roofs & Re-Roofing</span>
                <span className="text-black">Pitched Roofs & Re-Roofing</span>
              </div>
              <div className="w-full flex flex-col">
                <div className="para-1 text-black px-5 py-5">
                  <span>Complete new roofs and re-tiling using durable natural slate and clay tiles. Built to withstand harsh British weather and backed by a 25-year guarantee.</span>
                </div>
                <Cta1 link="#contact">Book a Roof Survey</Cta1>
              </div>
            </div>
            <div className="w-full h-full flex flex-col justify-between ">
              <div className="w-full header-3 flex flex-col px-5 py-5">
                <span className="link-text text-safety-orange">04 / Flat Roofs</span>
                <span className="text-black">Flat Roofs</span>
              </div>
              <div className="w-full flex flex-col">
                <div className="para-1 text-black px-5 py-5">
                  <span>Seamless GRP fibreglass and EPDM rubber flat roofing for extensions, garages, and dormers. 100% waterproof, low-maintenance, and UV-resistant.</span>
                </div>
                <Cta1 link="#contact">Get a Flat Roof Quote</Cta1>
              </div>
            </div>
            <div className="w-full h-full flex flex-col justify-between ">
              <div className="w-full header-3 flex flex-col px-5 py-5">
                <span className="link-text text-safety-orange">05 / Emergency Leak Repairs</span>
                <span className="text-black">Emergency Leak Repairs</span>
              </div>
              <div className="w-full flex flex-col">
                <div className="para-1 text-black px-5 py-5">
                  <span>Fast 24/7 response for storm damage, slipped tiles, and active leaks. We arrive quickly to make your home watertight with fixed, transparent pricing.</span>
                </div>
                <Cta1 link="#contact">Request a 24/7 Callout</Cta1>
              </div>
            </div>
            <div className="w-full h-full flex flex-col justify-between ">
              <div className="w-full header-3 flex flex-col px-5 py-5">
                <span className="link-text text-safety-orange">06 / Chimney & Leadwork</span>
                <span className="text-black">Chimney & Leadwork</span>
              </div>
              <div className="w-full flex flex-col">
                <div className="para-1 text-black px-5 py-5">
                  <span>Expert chimney repointing, cowl installations, and precision Code 4/5 lead flashing to stop water ingress around roof joints and valleys.</span>
                </div>
                <Cta1 link="#contact">Book Chimney Inspection</Cta1>
              </div>
            </div>
          </ScrollableBar>
        </div>
        <div className="hidden md:grid grid-cols-2">
            <div className="w-full h-full min-h-100 flex flex-col justify-between border-b border-safety-orange">
              <div className="w-full header-3 flex flex-col px-5 py-5">
                <span className="link-text text-safety-orange">03 / Pitched Roofs & Re-Roofing</span>
                <span className="text-black">Pitched Roofs & Re-Roofing</span>
              </div>
              <div className="w-full flex flex-col">
                <div className="para-1 text-black px-5 py-5">
                  <span>Complete new roofs and re-tiling using durable natural slate and clay tiles. Built to withstand harsh British weather and backed by a 25-year guarantee.</span>
                </div>
                <Cta1 link="#contact">Book a Roof Survey</Cta1>
              </div>
            </div>
            <div className="w-full h-full min-h-100 flex flex-col justify-between border-l border-b border-safety-orange">
              <div className="w-full header-3 flex flex-col px-5 py-5">
                <span className="link-text text-safety-orange">04 / Flat Roofs</span>
                <span className="text-black">Flat Roofs</span>
              </div>
              <div className="w-full flex flex-col">
                <div className="para-1 text-black px-5 py-5">
                  <span>Seamless GRP fibreglass and EPDM rubber flat roofing for extensions, garages, and dormers. 100% waterproof, low-maintenance, and UV-resistant.</span>
                </div>
                <Cta1 link="#contact">Get a Flat Roof Quote</Cta1>
              </div>
            </div>
            <div className="w-full h-full min-h-100 flex flex-col justify-between">
              <div className="w-full header-3 flex flex-col px-5 py-5">
                <span className="link-text text-safety-orange">05 / Emergency Leak Repairs</span>
                <span className="text-black">Emergency Leak Repairs</span>
              </div>
              <div className="w-full flex flex-col">
                <div className="para-1 text-black px-5 py-5">
                  <span>Fast 24/7 response for storm damage, slipped tiles, and active leaks. We arrive quickly to make your home watertight with fixed, transparent pricing.</span>
                </div>
                <Cta1 link="#contact">Request a 24/7 Callout</Cta1>
              </div>
            </div>
            <div className="w-full h-full min-h-100 flex flex-col justify-between border-l border-safety-orange">
              <div className="w-full header-3 flex flex-col px-5 py-5">
                <span className="link-text text-safety-orange">06 / Chimney & Leadwork</span>
                <span className="text-black">Chimney & Leadwork</span>
              </div>
              <div className="w-full flex flex-col">
                <div className="para-1 text-black px-5 py-5">
                  <span>Expert chimney repointing, cowl installations, and precision Code 4/5 lead flashing to stop water ingress around roof joints and valleys.</span>
                </div>
                <Cta1 link="#contact">Book Chimney Inspection</Cta1>
              </div>
            </div>
        </div>
      </div>
      <div id="rev" className="w-full flex flex-col lg:flex-row border-b border-safety-orange">
        <div className="lg:w-4/10 max-lg:hidden min-h-100 relative border-r border-safety-orange">
          <Image src={image3} alt="" fill className="object-cover object-center w-full top-0 left-0" />
        </div>
        <div className="lg:w-6/10 max-lg:w-full flex flex-col ">
          <div className="w-full header-3 flex flex-col px-5 py-5">
            <span className="link-text text-safety-orange">07 / Homeowner Reviews</span>
            <span className="text-black">Verified Reviews & Accreditations</span>
          </div>
          <div className="w-full h-full flex">
            <ScrollableBar>
              <ReviewCard
                title="Fixed our leaking valley in under 24 hours"
                starCount={3}
                message="Water was coming through our loft after heavy rain. Prime Roofing arrived the next morning, showed us drone photos of the cracked lead flashing, and fixed it for the exact price quoted."
                name='David M.'
                location='Rayleigh, Essex'
                service='Leadwork & Tile Repair'
              />
              <ReviewCard
                title="Faultless GRP fibreglass garage roof"
                starCount={5}
                message="Our old felt garage roof was pooling water every winter. The Prime Roofing team stripped it back, laid new decking, and installed a seamless GRP fibreglass roof in a single day. Clean, polite, and no hidden extras."
                name="Sarah & Mark T."
                location="Hockley, Essex"
                service="Flat Roof Replacement"
              />
              <ReviewCard
                title="Honest quote and top-class slate work"
                starCount={5}
                message="Got three quotes for a full re-roof on our 1930s semi and Prime Roofing were by far the most thorough. They sent drone footage before and after, finished ahead of schedule, and left our garden spotless."
                name="Claire B."
                location="Wickford, Essex"
                service="Pitched Re-Roofing"
              />
            </ScrollableBar>
          </div>
        </div>
      </div>
      <div id='contact' className="w-full flex border-b border-safety-orange lg:px-[20%] bg-linear-to-b from-transparent from-20% to-navy-blue to-90%">
        <div className="w-full flex flex-col border-l border-r border-safety-orange bg-bright-snow-white">
          <div className="w-full flex flex-col header-3 px-5 py-5"> 
            <span className="link-text text-safety-orange">08 / Get in Contact</span>
            <span className='text-black'>Get a Free Quote</span>
          </div>
          <div className='w-full flex'>
            <form action="https://formspree.io/f/myewblpg" method='POST' className='w-full flex flex-col'>
              <div className="w-full flex flex-col px-5 py-5 gap-5">
                <div className="w-full flex flex-col">
                  <span className='link-text text-safety-orange border-b '>Full Name</span>
                  <input type="text" name='name' required placeholder='e.g. David Miller' className='w-full para-1' autoComplete='off'/>
                </div>
                <div className="w-full flex flex-col">
                  <span className='link-text text-safety-orange border-b '>Postcode</span>
                  <input type="text" name='postcode' required placeholder='e.g. SS5 4AA' className='w-full para-1' autoComplete='off'/>
                </div>
                <div className="w-full flex flex-col">
                  <span className='link-text text-safety-orange border-b '>Phone Number</span>
                  <input type="tel" name='phone no.' required placeholder='e.g. 07700 900123' className='w-full para-1' autoComplete='off'/>
                </div>
                <div className="w-full flex flex-col">
                  <span className='link-text text-safety-orange border-b '>Service Needed</span>
                  <select name="required service" required defaultValue="Select a Roofing Service" className='para-1'>
                    <option value="" disabled>Select a Roofing Service</option>
                    <option value="emergency-repair">Emergency Leak / Storm Repair</option>
                    <option value="pitched-roof">Pitched Roof / Re-Roofing</option>
                    <option value="flat-roof">Flat Roof (GRP / EPDM)</option>
                    <option value="chimney-leadwork">Chimney & Leadwork</option>
                    <option value="roof-survey">Free Drone Roof Survey / Other</option>
                  </select>
                </div>
              </div>
              <div className="w-full">
                <button type='submit' className='w-full px-4.25 py-6.25 bg-safety-orange text-center link-text text-black cursor-pointer hover:bg-navy-blue hover:text-bright-snow-white'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
