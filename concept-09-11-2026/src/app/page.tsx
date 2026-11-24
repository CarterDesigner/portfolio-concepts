import { ReactLenis, useLenis } from 'lenis/react';
import Ctabtn from "@/components/cta-btn/page";
import Scrollbtn from "@/components/scroll-btn/page";
import Background2 from '@/components/background-2/page';

export default function Home() {
  return (
    <div>
      <div className="w-full h-[calc(100vh-120px)] flex flex-col items-center justify-center gap-12.5 mask-1 bg-[#111111] relative">
        <Background2 />
        <div className="lg:hidden flex flex-col text-white text-[48px] font-pp-thin text-center gap-12.5">
          <div>
            <div>
              <span>so you've decided to go with the best...</span>
            </div>
            <div>
              <span>good choice...</span>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <Ctabtn href="/contact">Start the Process</Ctabtn>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-screen flex justify-center">
          <Scrollbtn />
        </div>
      </div>
    </div>
  );
}
