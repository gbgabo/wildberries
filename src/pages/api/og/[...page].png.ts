import { readFileSync } from 'node:fs';
import path from 'path';
import { ImageResponse } from '@vercel/og';
import { getCollection } from 'astro:content';
import type { APIRoute, GetImageResult } from 'astro';
import { importImage } from '~/lib/assets';
import { getImage } from 'astro:assets';

export const config = {
  runtime: 'edge',
};

const font = readFileSync(path.resolve('src/assets/jetbrains-mono-all-500-normal.woff'));

const ports = await getCollection('port');

const logoComponent = {
  type: 'span',
  props: {
    tw: 'bg-[#19002e] text-[#ff0e82] border-2 border-[#ff0e82] mb-3 text-4xl h-20 rounded-2xl py-3 px-5 mr-auto',
    children: [
      {
        type: 'img',
        props: {
          tw: 'inline-block h-full',
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

const screenshotComponent = async (image: string, url: string) => {
  if (!image) return null;
  const screenshot = importImage(image);
  const optimizedImage = await getImage({ src: screenshot, format: 'png' });
  const absoluteURL = new URL(url);

  return {
    type: 'div',
    props: {
      tw: 'absolute border-t border-l overflow-x-auto border-[#00ffb7] h-full flex right-0 top-0 mt-8 w-1/2',
      children: [
        {
          type: 'img',
          props: {
            tw: 'min-w-full object-cover',
            src: absoluteURL.origin + optimizedImage.src,
            ...optimizedImage.attributes,
          },
        },
      ],
    },
  };
};

export function getStaticPaths() {
  return ports.map((page) => {
    return {
      params: { page: page.slug },
      props: { page },
    };
  });
}

export const GET: APIRoute = async ({ props, request }) => {
  const { page } = props;
  const { data } = page;
  const { title, subtitle, images } = data;

  // Astro doesn't support tsx endpoints so I'm using React-element objects
  const html = {
    type: 'div',
    props: {
      tw: 'bg-white w-full h-full flex relative',
      children: [
        {
          type: 'div',
          props: {
            tw: 'absolute inset-0 h-full w-full',
            style: {
              backgroundImage:
                'linear-gradient(to right, #00ffb712 1px, #19002e 1px), linear-gradient(to bottom, #00ffb7 2px, #19002e 2px)',
              backgroundSize: '33px 33px',
            },
          },
        },
        {
          type: 'span',
          props: {
            tw: 'flex flex-col absolute bottom-14 left-14 w-10/12 items-start',
            children: [
              {
                type: 'div',
                props: {
                  tw: 'flex flex-row',
                  children: [
                    logoComponent,
                    {
                      type: 'span',
                      props: {
                        tw: 'bg-[#19002e] text-[#ff0e82] h-20 text-4xl',
                        children: [
                          {
                            type: 'span',
                            props: {
                              tw: 'm-auto ml-3',
                              children: 'for',
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                type: 'span',
                props: {
                  tw: 'rounded-3xl px-8 py-5 bg-[#c79bff] mb-4 text-7xl text-[#19002e]',
                  children: title,
                },
              },
              {
                type: 'span',
                props: {
                  tw: 'text-4xl text-white',
                  children: subtitle,
                },
              },
            ],
          },
        },
        images && (await screenshotComponent(images[0], request.url)),
      ],
    },
  };

  return new ImageResponse(html, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: 'JetBrains MonoVariable',
        data: font,
      },
    ],
  });
};
