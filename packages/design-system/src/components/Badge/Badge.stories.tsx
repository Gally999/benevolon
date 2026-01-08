import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';


const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Neutral: Story = {
  args: {
    label: 'Neutral',
    variant: 'neutral',
  },
};

export const Primary: Story = {
  args: {
    label: 'Primary',
    variant: 'primary',
  },
};

export const Success: Story = {
  args: {
    label: 'Success',
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    label: 'Warning',
    variant: 'warning',
  },
};

export const Error: Story = {
  args: {
    label: 'Error',
    variant: 'error',
  },
}