import type { Meta, StoryObj } from '@storybook/react-vite';
import { Location } from './Location';

const meta: Meta<typeof Location> = {
  title: 'Components/Location',
  component: Location,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    location: {
      control: 'text',
      description: 'Lieu (ex: "Paris, France")',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    location: "Stade Gerland", 
  },
};

export const WithClassName: Story = {
  args: {
    location: "Parc de la Villette",
    className: 'custom-date-style', // Pour tester des styles personnalisés
  },
};