import Card from "@/components/home/card";
import { DEPLOY_URL } from "@/lib/constants";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default async function Home() {

  return (
    <>
      <div className="z-10 w-full max-w-7xl px-5 xl:px-0 mb-80 mt-40">
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          We make enterprise AI actually happen.
        </h1>
      </div>
      <div className="my-10 w-full px-5 xl:px-0">
        <div className="w-full max-w-screen-xl mx-auto animate-fade-up mb-5">
          <Card
            key={`${features[0].title}-0`}
            title={features[0].title}
            description={features[0].description}
            demo={
              features[0].title === "Beautiful, reusable components" ? (
                <ComponentGrid />
              ) : (
                features[0].demo
              )
            }
            large={features[0].large}
          />
        </div>
        <div className="grid w-full max-w-screen-xl mx-auto animate-fade-up grid-cols-1 gap-5 md:grid-cols-3">
          {features.slice(1).map(({ title, description, demo, large }, index) => (
            <Card
              key={`${title}-${index + 1}`}
              title={title}
              description={description}
              demo={
                title === "Beautiful, reusable components" ? (
                  <ComponentGrid />
                ) : (
                  demo
                )
              }
              large={large}
            />
          ))}
        </div>
      </div>
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-20">
        <p className="text-sm" style={{ fontFamily: 'Sansation, system-ui, sans-serif' }}>SCROLL</p>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </div>
    </>
  );
}

const features = [
  {
    title: "Beautiful, reusable components",
    description:
      "Pre-built beautiful, a11y-first components, powered by [Tailwind CSS](https://tailwindcss.com), [Radix UI](https://www.radix-ui.com), and [Framer Motion](https://framer.com/motion). Used in production on [Dub.co](https://dub.co).",
    large: true,
  },
  {
    title: "Beautiful, reusable components",
    description:
      "Pre-built beautiful, a11y-first components, powered by [Tailwind CSS](https://tailwindcss.com), [Radix UI](https://www.radix-ui.com), and [Framer Motion](https://framer.com/motion). Used in production on [Dub.co](https://dub.co).",
    large: true,
  },
  {
    title: "Performance first",
    description:
      "Built on [Next.js](https://nextjs.org/) primitives like `@next/font` and `next/image` for stellar performance.",
    demo: <WebVitals />,
  },
  {
    title: "One-click Deploy",
    description:
      "Jumpstart your next project by deploying Precedent to [Vercel](https://vercel.com/) in one click.",
    demo: (
      <a href={DEPLOY_URL}>
        <Image
          src="https://vercel.com/button"
          alt="Deploy with Vercel"
          width={120}
          height={30}
          unoptimized
        />
      </a>
    ),
  },
  {
    title: "Built-in Auth",
    description:
      "Precedent comes with authentication via [Clerk](https://clerk.com/)",
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="Clerk logo" src="/clerk.svg" width={50} height={50} />
      </div>
    ),
  },
  {
    title: "Hooks, utilities, and more",
    description:
      "Precedent offers a collection of hooks, utilities, and `@vercel/og`",
    demo: (
      <div className="grid grid-flow-col grid-rows-3 gap-10 p-10">
        <span className="font-mono font-semibold">useIntersectionObserver</span>
        <span className="font-mono font-semibold">useLocalStorage</span>
        <span className="font-mono font-semibold">useScroll</span>
        <span className="font-mono font-semibold">nFormatter</span>
        <span className="font-mono font-semibold">capitalize</span>
        <span className="font-mono font-semibold">truncate</span>
      </div>
    ),
  },
];
