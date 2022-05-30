import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Cpt from './index';

export default {
  title: 'Example/Icon',
  component: Cpt,
} as ComponentMeta<typeof Cpt>;

const Template: ComponentStory<typeof Cpt> = () => <Cpt />;

export const Primary = Template.bind({});
