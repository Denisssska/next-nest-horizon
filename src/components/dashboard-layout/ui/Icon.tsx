import { COLORS } from '@/constants/colors.constants';
import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import dynamic from 'next/dynamic';
import { FC } from 'react';

export type TypeIconName = keyof typeof dynamicIconImports;
interface IconProps extends LucideProps {
  name: keyof typeof dynamicIconImports;
}
const Icon: FC<IconProps> = ({ name, ...props }) => {
  const LucideIcon = dynamic(dynamicIconImports[name]);
  return <LucideIcon color={COLORS.primary} {...props} />;
};

export default Icon;
