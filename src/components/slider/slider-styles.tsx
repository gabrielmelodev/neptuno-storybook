import { colors } from "@neptuno-ui/colors";
import { styled } from "@stitches/react";



export const StyledSlider = styled('div', {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    userSelect: 'none',
    touchAction: 'none',
    width: 200,
  
    '&[data-orientation="horizontal"]': {
      height: 8,
    },
  
    '&[data-orientation="vertical"]': {
      flexDirection: 'column',
      width: 8,
      height: 100,
    },
  });

 export const StyledTrack = styled('div', {
    backgroundColor: colors['grey-700'],
    position: 'relative',
    flexGrow: 1,
    borderRadius: '$full',
  
    '&[data-orientation="horizontal"]': { height: 7 },
    '&[data-orientation="vertical"]': { width: 7 },
  });

 export const StyledRange = styled('div', {
    position: 'absolute',
    backgroundColor: colors['seaclax-light'],
    borderRadius: '9999px',
    height: '100%',
  });

  export const StyledThumb = styled('div', {
    all: 'unset',
    display: 'block',
    width: '1rem',
    height: '1rem',
    backgroundColor: colors['seaclax-light'],
    borderRadius: 10,
    '&:hover': { backgroundColor: colors['seaclax-dark'] },
    '&:focus': { boxShadow: `0 0 0 5px ${colors['seaclax-mid']}` },
  });