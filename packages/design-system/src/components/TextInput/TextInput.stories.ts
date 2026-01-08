import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextInput } from "./TextInput";

const meta: Meta<typeof TextInput> = {
  title: "Components/TextInput",
  component: TextInput,
  argTypes: {
    // disabled: { control: "boolean" },
    text: { control: "text" },
    // onClick: { action: "clicked" }, 
  }
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    text: "Texte par défaut",
  }
};

// export const PrimaryDisabled: Story = {
//   args: {
//     children: "Désactivé",
//     disabled: true,
//     color: "primary"
//   }
// };

// export const PrimarySmall: Story = {
//   args: {
//     children: "Petit Bouton",
//     disabled: false,
//     size: "small",
//     color: "primary"
//   }
// };

// export const PrimaryMedium: Story = {
//   args: {
//     children: "Bouton Moyen",
//     disabled: false,
//     size: "medium",
//     color: "primary"
//   }
// };

// export const PrimaryLarge: Story = {
//   args: {
//     children: "Gros Bouton",
//     disabled: false,
//     size: "large",
//     color: "primary"
//   }
// };
