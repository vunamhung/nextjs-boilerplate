import type { FC } from 'react';
import clsx from 'clsx';
import { Skeleton as Sk } from '@mantine/core';

export const Skeleton: FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={clsx('space-y-4', className)}>
      <Sk height={32} radius="xl" />
      <Sk height={32} radius="xl" />
      <Sk height={32} radius="xl" />
      <Sk height={32} radius="xl" />
    </div>
  );
};
