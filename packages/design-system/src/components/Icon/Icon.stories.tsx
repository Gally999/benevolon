import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon, IconProps } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: { type: 'select' },
      options: [
        'MapPin', 
        'Calendar', 
        'CalendarDays', 
        'Search', 
        'ArrowLeft', 
        'ArrowRight', 
        'ChevronLeft', 
        'ChevronRight', 
        'Music', 
        'Leaf',
        'BookOpen',
        'Heart',
        'Activity',
        'Palette',

      ],
      description: 'Nom de l\'icône Lucide',
    },
    size: {
      control: { type: 'number', min: 12, max: 48 },
      description: 'Taille de l\'icône en pixels',
    },
    color: {
      control: { type: 'select' },
      options: [
        'var(--color-primary-main)', // Bleu principal
        'var(--color-neutral-black)', // Noir
        'var(--color-neutral-gray-600)', // Gris moyen
        'var(--color-success)', // Vert
        'var(--color-error)', // Rouge
        'var(--color-warning)', // Orange
        'var(--color-info)', // Bleu info
      ],
      description: 'Couleur de l\'icône (utilise les variables CSS des tokens)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'MapPin',
    size: 24,
    color: 'var(--color-primary-main)',
  },
};

export const DifferentSizes: Story = {
  render: (args: Omit<IconProps, 'size'>) => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Icon {...args} size={16} />
      <Icon {...args} size={24} />
      <Icon {...args} size={32} />
      <Icon {...args} size={48} />
    </div>
  ),
  args: {
    name: 'Search',
    color: 'var(--color-neutral-black)',
  },
};

export const DifferentColors: Story = {
  render: (args: Omit<IconProps, 'color'>) => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Icon {...args} color="var(--color-primary-main)" />
      <Icon {...args} color="var(--color-success)" />
      <Icon {...args} color="var(--color-error)" />
      <Icon {...args} color="var(--color-warning)" />
    </div>
  ),
  args: {
    name: 'Calendar',
    size: 24,
  },
};

export const AllIcons: Story = {
  render: (args: Omit<IconProps, 'name'>) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Icon {...args} name="MapPin" />
        <p>MapPin</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon {...args} name="Calendar" />
        <p>Calendar</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon {...args} name="CalendarDays" />
        <p>CalendarDays</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon {...args} name="Search" />
        <p>Search</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon {...args} name="ArrowLeft" />
        <p>ArrowLeft</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon {...args} name="ArrowRight" />
        <p>ArrowRight</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon {...args} name="ChevronLeft" />
        <p>ChevronLeft</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon {...args} name="ChevronRight" />
        <p>ChevronRight</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon {...args} name="Music" />
        <p>Music</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon {...args} name="Leaf" />
        <p>Environnement</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon {...args} name="BookOpen" />
        <p>Book</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon {...args} name="Heart" />
        <p>Charity</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon {...args} name="Activity" />
        <p>Activity</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon {...args} name="Palette" />
        <p>Art</p>
      </div>
    </div>
  ),
  args: {
    size: 24,
    color: 'var(--color-neutral-black)',
  },
};