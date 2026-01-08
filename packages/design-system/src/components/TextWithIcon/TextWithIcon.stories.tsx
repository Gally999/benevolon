import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextWithIcon } from './TextWithIcon';

const meta: Meta<typeof TextWithIcon> = {
  title: 'Components/TextWithIcon',
  component: TextWithIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: ['Heart', 'MapPin', 'Calendar', 'CalendarDays', 'Search', 'ArrowLeft', 'ArrowRight', 'ChevronLeft', 'ChevronRight'],
      description: 'Nom de l\'icône Lucide',
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
    },
    iconSize: {
      control: { type: 'number', min: 12, max: 48 },
    },
    iconColor: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Exemple de texte',
    icon: 'Heart',
  },
};

export const IconOnRight: Story = {
  args: {
    text: 'Texte avec icône à droite',
    icon: 'ArrowRight',
    iconPosition: 'right',
  },
};

export const CustomSize: Story = {
  args: {
    text: 'Icône grande',
    icon: 'Star',
    iconSize: 32,
  },
};

export const CustomColor: Story = {
  args: {
    text: 'Icône colorée',
    icon: 'CheckCircle',
    iconColor: '#2f9e44', // Utilise une couleur de vos tokens si possible
  },
};

export const AllOptions: Story = {
  args: {
    text: 'Tout personnalisé',
    icon: 'Calendar',
    iconPosition: 'right',
    iconSize: 24,
    iconColor: '#e8590c',
  },
};