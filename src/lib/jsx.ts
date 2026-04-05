interface jsx {
  type: string;
  props: {
    style?: { [key: string]: string };
    tw?: string;
    children?: jsx[] | string;
  };
}

interface el {
  type: string;
  tw?: string;
  style?: { [key: string]: string };
  children?: jsx[] | string;
  src?: string;
}

interface definedEl {
  tw?: string;
  style?: { [key: string]: string };
  children?: jsx[] | string;
}

export const el = ({ type, tw, style, children }: el): jsx => {
  return {
    type: type,
    props: {
      style: style,
      tw: tw,
      children: children,
    },
  };
};

export const div = ({ tw, style, children }: definedEl) => {
  return el({ type: 'div', tw, style, children });
};

export const span = ({ tw, style, children }: definedEl) => {
  return el({ type: 'span', tw, style, children });
};
