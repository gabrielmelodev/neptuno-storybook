import { colors } from "@neptuno-ui/colors";
import { styled } from "@stitches/react";

export const Tabs = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: 300,
  });

  export const TabsList = styled('div', {
    flexShrink: 0,
    display: 'flex',
    borderBottom: `1px solid ${colors['grey-700']}`,
  });

  export const TabsTrigger = styled('div', {
    all: 'unset',
    fontFamily: 'inherit',
    backgroundColor: 'white',
    padding: '0 20px',
    height: 45,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
    lineHeight: 1,
    color: colors['seaclax-mid'],
    userSelect: 'none',
    '&:first-child': { borderTopLeftRadius: 6 },
    '&:last-child': { borderTopRightRadius: 6 },
    '&:hover': { color: colors['grey-800'] },
    '&[data-state="active"]': {
      color: colors['jobs-mid'],
      boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
    },
    '&:focus': { position: 'relative', boxShadow: `0 0 0 2px black` },
  });

  export const TabsContent  = styled('div',{
    flexGrow: 1,
    padding: 20,
    backgroundColor: 'white',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    outline: 'none',
    '&:focus': { boxShadow: `0 0 0 2px black` },
  });