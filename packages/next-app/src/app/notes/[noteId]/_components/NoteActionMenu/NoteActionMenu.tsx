'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { css } from '../../../../../../styled-system/css';
import { flex } from '../../../../../../styled-system/patterns';
import { MenuIcon } from '../../../../../components/icons/MenuIcon';
import { TrashIcon } from '../../../../../components/icons/TrashIcon';
import { deleteNoteAndRedirect } from '../../actions';

interface Props {
  noteId: string;
}
export const NoteActionMenu = ({ noteId }: Props) => {
  const onDelete = async () => {
    await deleteNoteAndRedirect(noteId);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className={flex({
            alignItems: 'center',
            justifyContent: 'center',
            w: 8,
            h: 8,
            borderRadius: '6px',
            transition: '150ms token(easings.easeIn)',
            cursor: 'pointer',
            _hover: {
              bg: 'gray.100',
            },
          })}
        >
          <MenuIcon className={css({ w: 4, h: 4, color: 'gray.700' })} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          align="end"
          className={css({
            minW: 48,
            p: 1,
            border: '1px solid token(colors.gray.100)',
            borderRadius: '10px',
            boxShadow: 'md',
            background: '#fff',
            userSelect: 'none',
            transformOrigin:
              'var(--radix-dropdown-menu-content-transform-origin)',
            animation: 'popIn 150ms token(easings.easeOut)',
            '& > div[data-radix-collection-item]': {
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              py: 2,
              px: 2,
              borderRadius: '4px',
              cursor: 'pointer',
              '& svg': {
                w: 4,
                h: 4,
                color: 'gray.500',
              },
              '&[data-highlighted]': {
                background: 'gray.100',
                outline: 'none',
              },
            },
          })}
        >
          <DropdownMenuItem onSelect={onDelete}>
            <TrashIcon />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
};
