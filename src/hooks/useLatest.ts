import {useRef} from 'react';

export default function (val: any) {
  const ref = useRef(val);
  ref.current = val;

  return ref;
}
