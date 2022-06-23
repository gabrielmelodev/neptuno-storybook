import {
    Tabs as TabsCSS,
    TabsContent as TabsContentCSS,
    TabsList as TabsListCSS,
    TabsTrigger as TabsTriggerCSS
} from './tabs-styles';
import React, { forwardRef } from 'react';
import { styled } from '@stitches/react';
import * as TabsPrimitive from "@radix-ui/react-tabs"; 
import Stitches from '@stitches/react';

type TabsProps = React.ComponentProps<typeof StyledTabs> & { css?: Stitches.CSS };

export const StyledTabs = styled(TabsPrimitive.Root, TabsCSS);
export const StyledTabsContent = styled(TabsPrimitive.Content, TabsContentCSS);
export const StyledTabsList = styled(TabsPrimitive.List, TabsListCSS);
export const StyledTabsTrigger = styled(TabsPrimitive.Trigger, TabsTriggerCSS);


export const Tabs = forwardRef<
React.ElementRef<typeof StyledTabs>,
TabsProps
>(({...props }, forwardedRef) => {
  return(
  <StyledTabsList {...props} ref={forwardedRef}/>
  );
});