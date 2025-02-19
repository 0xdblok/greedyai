import Image from "next/image";

import logoo from "./logoo.png";

export default function Home() {
  return (
    <div class="flex flex-col pb-16 bg-black max-md:pb-24" role="main">
      <div class="flex p-6 bg-black flex-col items-center self-center mt-12 max-w-full w-[757px] max-md:mt-10">
        <Image width={160} height={160} src={logoo} alt="Hyperlauncher Logo" />
        <h1 class="mt-8 text-6xl tracking-tighter leading-none text-center text-white max-md:max-w-full max-md:text-4xl">
          GREEDY AI
        </h1>
        <h2 class="mt-2.5 text-2xl leading-none text-center text-teal-400">
          AI Agent 
        </h2>
        <p className="text-center text-zinc-100 pt-2  animate-pulse font-extralight text-xs">
         Wallet, trading and Onchain research Agent coming soon...
        </p>

        <a
          className=" pt-4"
          href="">
          {" "}
          <div
            class="px-8 py-3 mt-8 text-base text-center text-black bg-white rounded max-md:px-5"
            role="status">
            Buy on Pumpfun
          </div>
        </a>

        <div class="mt-6 text-base text-center text-gray-400">
          token live on solana
        </div>
        <div class="mt-6 text-base text-center text-gray-400">
          ca :
        </div>
        <div
          class="flex gap-4 mt-4 max-w-full text-xs leading-none text-center text-gray-500 w-[419px]"
          role="list">
       
        </div>
        <div class="flex gap-4 mt-3 w-16">
          <div class="flex flex-col flex-1 min-h-[24px]">
            <a href="">
              {" "}
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bdf69f8b9b82997a787b2a7b366b6bc6cad58d5f64595ccccbc8f13327e2b69?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3"
                class="object-contain w-6 aspect-square"
                alt="Social Media Icon 1"
              />
            </a>
          </div>
          <div class="flex flex-col flex-1 min-h-[24px]">
            <a href="">
              {" "}
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/acb277604e8e8947bf4378b882716272786db87a1328c4aa6d86d09d8953ae94?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3"
                class="object-contain w-6 aspect-square"
                alt="Social Media Icon 2"
              />
            </a>
          </div>
        </div>
        <div
          class="flex gap-3 self-start mt-14 text-base leading-loose max-md:mt-10"
          role="status"
          aria-live="polite">
          <div class="my-auto text-gray-500" aria-hidden="true">
            &gt;
          </div>
          <div
            class="flex-auto text-teal-100
        ">
            INITIALIZING STARTUP SEQUENCE...
          </div>
        </div>
        <div class="self-stretch mt-9 text-base leading-7 text-white max-md:max-w-full">
        Countless crypto projects have come and gone. Many built on promises, controlled by teams with too much power—flawed by human greed and limitations.
          <br />
          The cycle repeats: hype, manipulation, collapse. But what if we could break free? What if control was no longer in human hands?
          <br />
        
        </div>
        <div class="self-start mt-9 text-base leading-7 text-white max-md:max-w-full">
        Enter the Sentinel. An autonomous AI, designed to track, analyze, and predict market movements with precision beyond human capability. 
          <br />
          it moves through the blockchain like a hunter—tracing liquidity flows, tracking on-chain transactions, and decoding the signals buried in the noise. 
        </div>
        <div class="self-start mt-9 text-base leading-7 text-white max-md:max-w-full">
        Fueled by real-time market analysis and social sentiment tracking, the Sentinel sees what others miss
          <br />
          It detects early whale accumulations, wallet movements, and hidden trends before they become mainstream. No speculation—only action. 
          <br />
          No bias—only results. The age of human-controlled trading is fading. The era of autonomous intelligence has begun.
        </div>
        <div
          class="flex gap-3 self-start mt-9 text-base leading-loose"
          role="status"
          aria-live="polite">
          <div class="my-auto text-gray-500" aria-hidden="true">
            &gt;
          </div>
          <div class="text-teal-50 basis-auto">SYSTEM STATUS: IN TRAINING</div>
        </div>
      </div>
      <p className="text-center text-zinc-200 pt-28 pb- font-extralight text-sm">
        All Rights Reserve ©{" "}
      </p>
    </div>
  );
}
