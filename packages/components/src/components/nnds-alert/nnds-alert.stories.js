import { html } from 'lit-html';

export default {
  title: 'Alert',
  argTypes: {
    variant: {
      options: ['info', 'danger', 'success'],
      control: { type: 'select' },
    },
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'select' },
    },
  },
}

const Template = ({ 
  variant = 'info',
  size = 'medium',
  slot,
}) => {
  return html`
  <nnds-alert
    variant="${variant}"
    size="${size}"
  >
  ${slot}
</nnds-alert>
`
}

export const Primary = Template.bind({});
Primary.args = {
  variant: 'info',
  size: 'medium',
  slot: 'Info',
};

export const Danger = Template.bind({});
Danger.args = {
  ...Primary.args,
  variant: 'danger',
  slot: 'Danger',
};

export const Success = Template.bind({});
Success.args = {
  ...Primary.args,
  variant: 'success',
  slot: 'Success',
};
