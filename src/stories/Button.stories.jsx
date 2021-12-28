import React from 'react';

import { Button } from './Button';


export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    handleClick: { action: 'clicked' },
    label: { control: "text" }
  },
  args: {
    label: "Click Me",
    primary: false,
    size: "medium"
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/someUrl',
    }
  }
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  handleClick: () => console.log("Primary")
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: "medium"
};

export const Large = Template.bind({});
Large.args = {
  size: 'large'
};

Large.parameters = {
  docs: {
    page: () => null
  }
}

export const Small = Template.bind({});
Small.args = {
  size: 'small'
};

Small.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/anotherURL',
  },
  docs: {
    page: () => <div>This is small button</div>
  }
}
