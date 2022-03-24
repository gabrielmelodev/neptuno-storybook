import { styled } from '@stitches/react';
import {
  Card as CardContentCSS,
  CardWrapper as CardWrapperCSS
} from './card-styles';

export * from './CardHeader';

const StyledCard = styled('div', CardWrapperCSS);
const StyledCardContent = styled('div', CardContentCSS);

export type CardWrapperProps = React.ComponentProps<typeof StyledCardContent>;

export const Card = StyledCard;
Card.displayName = 'Card';


export const CardContent = StyledCardContent;
CardContent.displayName = 'CardContent';


