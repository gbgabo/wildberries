import { ImageResponse } from '@vercel/og';
import type { APIRoute } from 'astro';
import { getFontSrc, importImage } from '~/lib/assets';
import { getImage } from 'astro:assets';
import { div, span } from '~/lib/jsx';

export const config = {
  runtime: 'edge',
};

const logoComponent = {
  type: 'span',
  props: {
    tw: 'bg-[#19002e] text-[#ff0e82] border-2 border-[#ff0e82] mb-3 text-7xl h-40 rounded-[2rem] py-6 px-10 mr-auto',
    children: [
      {
        type: 'img',
        props: {
          tw: 'h-full',
          src: 'https://wildberries.style/img/ui/wb_logo.svg',
        },
      },
      {
        type: 'span',
        props: {
          tw: 'm-auto ml-2',
          children: 'Wildberries',
        },
      },
    ],
  },
};

export const GET: APIRoute = async ({ url }) => {
  const fontSrc = await getFontSrc(url);

  // Astro doesn't support tsx endpoints so I'm using React-element objects
  const html = div({
    tw: 'bg-white w-full h-full flex relative',
    children: [
      div({
        tw: 'absolute inset-0 h-full w-full',
        style: {
          backgroundImage:
            'linear-gradient(to right, #00ffb712 1px, #19002e 1px), linear-gradient(to bottom, #00ffb7 2px, #19002e 2px)',
          backgroundSize: '33px 33px',
        },
      }),
      span({
        tw: 'flex flex-col absolute bottom-14 left-14 w-full items-start',
        children: [
          div({
            tw: 'flex flex-row',
            children: [logoComponent],
          }),
          span({
            tw: 'mb-4 mt-2 text-4xl text-[#c79bff]',
            children: 'A dark theme for purple lovers',
          }),
        ],
      }),
      // screenshot && (await screenshotComponent(screenshot, url)),
    ],
  });

  return new ImageResponse(
    html,
    fontSrc && {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'JetBrains Mono',
          data: fontSrc,
          weight: 500,
        },
      ],
    }
  );
};
