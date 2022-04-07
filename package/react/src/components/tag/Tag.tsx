import { Tag as TagCSS, TagDeleteButton as TagDeleteButtonCSS } from './tag-styles';
import { styled } from '@stitches/react';
import React, { forwardRef } from 'react';
import { TagProps } from '../types';

export const  StyledTag = styled('span', TagCSS);
export const  TagDeleteButton = styled('span', TagDeleteButtonCSS);

export const Tag = forwardRef<React.ElementRef<typeof StyledTag>, TagProps>(
  ({ children, onDelete, variant, ...props}, forwardeRef) => {

    const { size } = props;

    return (
      <StyledTag
      ref={forwardeRef}
      variant={onDelete ? 'deletable' : variant}
      {...props}
      >
        <span>{children}</span>
        {!!onDelete && <TagDeleteButton size={size} onClick={onDelete} />}
      </StyledTag>
    )
  }
)
