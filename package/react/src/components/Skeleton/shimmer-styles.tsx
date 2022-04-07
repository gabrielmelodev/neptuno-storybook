import { css, keyframes } from "@stitches/react";

const progress = keyframes({
    '0%': { backgroundPosition: '-200px 0' },
    '100%': { backgroundPosition: 'calc(200px + 100%) 0' },
  });

  
  export const Shimmer = css({
    backgroundColor: 'rgb(179, 179, 179)',
    backgroundSize: '200px 100%',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `linear-gradient(
      90deg, 
      rgba(0, 0, 0, 0), 
      rgb(255, 255, 255), 
      rgba(0, 0, 0, 0)
    )`,
  
    display: 'inline-block',
    lineHeight: '1',
  
    opacity: '0.1',
  
    animation: `${progress} 1.2s ease-in-out infinite`,
  
    variants: {
      type: {
        circle: {
          borderRadius: '9999px',
        },
        line: {
          margin: '4px 0',
          borderRadius: '150px',
        },
        rectangle: {
          margin: '5px 0',
          borderRadius: '5px',
        },
      },
    },
  });
  
  
export const ShimmerContent = css({
    display: 'flex',
    flexDirection: 'column',
  });

export const ShimmerWrapper = css({
    variants: {
      screen: {
        desktop: {
          '@media (max-width: 768px)': {
            display: 'none !important',
          },
        },
  
        mobile: {
          '@media (min-width: 769px)': {
            display: 'none !important',
          },
        },
  
        tablet: {
          '@media (min-width: 952px)': {
            display: 'none !important',
          },
          '@media (max-width: 442px)': {
            display: 'none !important',
          },
        },
  
        'min-tablet': {
          '@media (min-width: 442px)': {
            display: 'none !important',
          },
        },
      },
    },
  });
  