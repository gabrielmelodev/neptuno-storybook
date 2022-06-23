import { ThemeColor } from "src/helpers/color";
import { StyledAvatar } from "../Avatar/Avatar";
import { StyledButton } from "../Button/Button";
import { StyledField } from "../Field/Field";
import type * as Stitches from '@stitches/react';
import { StyledText } from "../Text/Text";
import { StyledTag } from "../tag/Tag";
import { StyledSwitch } from "../Switch/Switch";
import { StyledSpinner } from "../spinner/Spinner";
import { StyledIconButton } from "../IconButton/IconButton";
import { StyledHeading } from "../Heading/Heading";
import { StyledBox } from "../Box/Box";
import { StyledSlider } from "../slider/Slider";
import { HTMLAttributes } from "react";


export type AvatarProps = React.ComponentProps<typeof StyledAvatar> & {
    src: string;
    name: string;
    label?: string;
    borderColor?: ThemeColor;
  };

  export type TextFieldProps = React.ComponentProps<typeof StyledField> & {
    leftIcon?: React.ReactElement;
    rightIcon?: React.ReactElement;
    disabled?: boolean;
    error?: boolean;
  };

  export type ButtonProps = React.ComponentProps<typeof StyledButton> & {
    leftIcon?: React.ReactElement;
    rightIcon?: React.ReactElement;
    loading?: boolean;
    css?: Stitches.CSS;
  };

  export type TextProps = React.ComponentProps<typeof StyledText> & {
    as?: React.ElementType;
  };

  export type TagProps = React.ComponentProps<typeof StyledTag> & {
    onDelete?: () => void;
  };
  
  export type SwitchProps = React.ComponentProps<typeof StyledSwitch> & {
    label?: string;
  };

  export type SpinnerProps = React.ComponentProps<typeof StyledSpinner> & {
    baseColor?: ThemeColor;
  };
  

  export type IconButtonProps = React.ComponentProps<typeof StyledIconButton> & {
    icon: React.ReactElement;
    loading?: boolean;
  };

  export type HeadingProps = React.ComponentProps<typeof StyledHeading> & {
    as?: React.ElementType;
  };
  

  export type BoxProps = React.ComponentProps<typeof StyledBox> & {
    as?: React.ElementType;
  };

  export type SliderProps = Omit<
  React.ComponentProps<typeof StyledSlider>,
  'value' | 'defaultValue'
> & {
  value?: number;
  defaultValue?: number;
};

export type ShimmerWrapperProps = {
  screen?: 'desktop' | 'mobile' | 'tablet' | 'min-tablet';
  children: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export type TabsProps = React.ComponentProps<typeof StyledSwitch> & {
  label?: string;
};
