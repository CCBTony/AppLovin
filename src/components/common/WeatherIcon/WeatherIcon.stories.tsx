import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Cpt from './index';
import styled from 'styled-components';

export default {
  title: 'Example/WeatherIcon',
  component: Cpt,
  argTypes: {
    themeType: {
      name: 'themeType',
      type: { name: 'string', required: true },
      defaultValue: 'day',
      description: 'Type of theme',
      options: ['day', 'night'],
      control: { type: 'radio' },
    },
    type: {
      defaultValue: 'fine',
      options: ['fine', 'rain', 'clouds', 'wind', 'snow', 'storm'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Cpt>;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;
const IconWrapper = styled.div`
  width: 100px;
  height: 100px;
`;
const Label = styled.div`
  width: 100%;
  height: 30px;
  font-size: 14px;
  text-align: center;
`;
const Container = styled.div`
  width: 650px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;
const SingleContainer = styled.div`
  width: 200px;
  height: 200px;
  margin: 50px;
`;

const Template: ComponentStory<typeof Cpt> = (args) => (
  <div>
    <SingleContainer>
      <Cpt {...args} />
    </SingleContainer>
    <Container>
      {['day', 'night'].map((themeType) =>
        ['fine', 'clouds', 'wind', 'rain', 'snow', 'storm'].map((type) => (
          <Box key={themeType + type}>
            <IconWrapper>
              <Cpt themeType={themeType as any} type={type as any} />
            </IconWrapper>
            <Label>
              {themeType} - {type}
            </Label>
          </Box>
        )),
      )}
    </Container>
  </div>
);

export const Primary = Template;
