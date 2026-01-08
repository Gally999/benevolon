import type { Meta, StoryObj } from '@storybook/react-vite';
import { DateComponent } from './DateComponent';

const meta: Meta<typeof DateComponent> = {
  title: 'Components/Date',
  component: DateComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    format: {
      control: 'text',
      description: 'Format de date (ex: dd/MM/yyyy)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    date: new Date(), // Aujourd'hui
  },
};

export const CustomFormat: Story = {
  args: {
    date: '2023-12-25',
    format: 'EEEE, dd MMMM yyyy', // Ex: "lundi, 25 décembre 2023"
  },
};

export const ISOString: Story = {
  args: {
    date: '2025-12-12T10:00:00Z', // String ISO
    format: 'yyyy-MM-dd',
  },
};

export const WithClassName: Story = {
  args: {
    date: new Date(),
    className: 'custom-date-style', // Pour tester des styles personnalisés
  },
};