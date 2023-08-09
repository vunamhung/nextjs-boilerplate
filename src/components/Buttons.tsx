import type { FC, MouseEventHandler } from 'react';
import type { ButtonProps, PopoverProps } from '@mantine/core';
import Link from 'next/link';
import { Button, Popover, UnstyledButton } from '@mantine/core';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

export const EditButton: FC<{ href: string; disabled?: boolean }> = ({ href, disabled }) => {
  if (disabled) {
    return (
      <UnstyledButton className="flex items-center gap-1 text-gray-500" disabled>
        <FiEdit />
        Edit
      </UnstyledButton>
    );
  }

  return (
    <Link className="flex items-center gap-1 text-blue-500 transition-all hover:text-blue-700" href={href}>
      <FiEdit />
      Edit
    </Link>
  );
};

type props = { onClick: MouseEventHandler; position?: PopoverProps['position']; disabled?: boolean; size?: ButtonProps['size'] };
export const DeleteButton: FC<props> = ({ onClick, position = 'bottom', size, disabled }) => {
  return (
    <Popover position={position} withArrow shadow="md">
      <Popover.Target>
        <Button type="button" disabled={disabled} size={size} color="red" leftIcon={<FiTrash2 size={18} />}>
          Delete
        </Button>
      </Popover.Target>
      <Popover.Dropdown className="px-2 py-1 text-sm">
        Are You Sure,{' '}
        <button className="bg-white text-red-500" type="button" onClick={onClick}>
          Yes
        </button>
      </Popover.Dropdown>
    </Popover>
  );
};
