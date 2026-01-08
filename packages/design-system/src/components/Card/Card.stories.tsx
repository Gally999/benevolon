import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Titre de l\'événement',
    },
    icon: {
      control: { type: 'select' },
      options: ['Heart', 'MapPin', 'Calendar', 'CalendarDays', 'Search', 'ArrowLeft', 'ArrowRight', 'ChevronLeft', 'ChevronRight'],
      description: 'Nom de l\'icône Lucide',
    },
    date: {
      control: 'date',
      description: 'Date de l\'événement',
    },
    city: {
      control: 'text',
      description: 'Ville de l\'événement',
    },
    location: {
      control: 'text',
      description: 'Lieu détaillé',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Festival de Musique Solidaire',
    icon: 'Music', 
    date: new Date('2025-12-25'),
    city: 'Paris',
    location: 'Parc des Princes',
  },
};

export const WithCustomData: Story = {
  args: {
    title: 'Concert Classique',
    icon: 'Guitar',
    date: '2025-11-15',
    city: 'Lyon',
    location: 'Opéra de Lyon',
  },
};

export const WithLongTitle: Story = {
  args: {
    title: 'Festival International de Jazz et de Musique Contemporaine 2025',
    icon: 'Bike',
    date: new Date(),
    city: 'Marseille',
    location: 'Le Dôme',
  },
};