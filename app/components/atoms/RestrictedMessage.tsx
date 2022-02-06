import React from 'react';

type Props = {
  class: string;
  message: string;
};

const RestrictedMessage = (props: Props) => {
  return (
    <div className={props.class}>
      <h1>{props.message}</h1>
    </div>
  );
};

export default RestrictedMessage;
