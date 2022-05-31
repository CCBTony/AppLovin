import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Cpt from './index';
import { GlobalStyle } from '@/styles';

export default {
  title: 'Example/TemperatureIcon',
  component: Cpt,
  argTypes: {
    fontSizeInPx: {
      name: 'fontSizeInPx',
      type: { name: 'number', required: true },
      defaultValue: 14,
      description: 'font size of temperature in px',
      control: { type: 'range', min: 12, max: 100, step: 1 },
    },
  },
} as ComponentMeta<typeof Cpt>;

const Template: ComponentStory<typeof Cpt> = (args) => (
  <div>
    <GlobalStyle />
    <Cpt {...args}>15</Cpt>
  </div>
);

export const Primary = Template;
