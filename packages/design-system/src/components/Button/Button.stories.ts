import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    disabled: { control: "boolean" },
    children: { control: "text" },
    onClick: { action: "clicked" }, 
    color: { control: "color"}
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const PrimaryDefault: Story = {
  args: {
    children: "Défaut",
    disabled: false,
    color: "primary"
  }
};

export const PrimaryDisabled: Story = {
  args: {
    children: "Désactivé",
    disabled: true,
    color: "primary"
  }
};

export const PrimarySmall: Story = {
  args: {
    children: "Petit Bouton",
    disabled: false,
    size: "small",
    color: "primary"
  }
};

export const PrimaryMedium: Story = {
  args: {
    children: "Bouton Moyen",
    disabled: false,
    size: "medium",
    color: "primary"
  }
};

export const PrimaryLarge: Story = {
  args: {
    children: "Gros Bouton",
    disabled: false,
    size: "large",
    color: "primary"
  }
};

export const SecondaryDefault: Story = {
  args: {
    children: "Défaut",
    disabled: false,
    color: "secondary"
  }
};

export const SecondaryDisabled: Story = {
  args: {
    children: "Désactivé",
    disabled: true,
    color: "secondary"
  }
};

export const SecondarySmall: Story = {
  args: {
    children: "Petit Bouton",
    disabled: false,
    size: "small",
    color: "secondary"
  }
};

export const SecondaryMedium: Story = {
  args: {
    children: "Bouton Moyen",
    disabled: false,
    size: "medium",
    color: "secondary"
  }
};

export const SecondaryLarge: Story = {
  args: {
    children: "Gros Bouton",
    disabled: false,
    size: "large",
    color: "secondary"
  }
};