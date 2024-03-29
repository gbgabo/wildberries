import React, { ReactElement, ReactNode } from 'react';
import { Button, Slider } from './';
interface CallToAction {
  text: string;
  href: string;
  icon?: string;
}
interface Props {
  children?: ReactNode;
  subtitle?: string | ReactNode;
  cta?: CallToAction;
  title?: ReactNode;
  slides?: string[] | null;
}

export default function Hero({ children, title, subtitle, slides, cta }: Props): ReactElement {
  const content = slides ? (
    <Slider
      slides={slides.map((screenshot) => {
        return {
          element: <img alt={`port screenshot`} src={screenshot} />,
        };
      })}
    />
  ) : (
    children
  );

  return (
    <main
      className="relative z-20 grid min-h-screen grid-rows-2 content-center items-center justify-center gap-16 bg-darker-purple 
                bg-gradient-to-t from-darker-purple from-80% to-cherry p-10 shadow-lg md:grid-cols-2 
                md:grid-rows-1 md:gap-0 md:bg-gradient-to-tl md:from-60% md:to-95% md:p-40"
    >
      <div className="flex flex-col items-center justify-center md:mr-56 md:items-start">
        <h1 className="m-0 text-4xl font-semibold md:text-5xl">{title}</h1>
        {subtitle && <div className="my-8 text-xl text-light-purple md:text-2xl">{subtitle}</div>}
        {cta && <Button {...cta}>{cta?.text}</Button>}
      </div>
      {content && content}
    </main>
  );
}
