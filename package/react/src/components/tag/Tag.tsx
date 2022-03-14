import { Tag as TagCSS, TagDeleteButton as TagDeleteButtonCSS } from './tag-styles';
import { styled } from '@stitches/react';
import React, { forwardRef } from 'react';

const  StyledTag = styled('span', TagCSS);
const  TagDeleteButton = styled('span', TagDeleteButtonCSS);

export type TagProps = React.ComponentProps<typeof StyledTag> & {
  onDelete?: () => void;
}

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
