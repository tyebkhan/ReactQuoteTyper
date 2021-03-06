import './TypingField.css';
import { Lang } from '../English'
import { useEffect, useRef } from 'react';

interface TypingFieldProps {
  button: boolean,
  loading: boolean,
  seconds: number,
  inputMethod: (event: React.FormEvent<HTMLTextAreaElement>) => void,
  clickHandler: (event: React.MouseEvent) => void,
}

export default function TypingField(props: TypingFieldProps) {
  if (props.button || props.loading) {
    return ( 
      <div className='starter'> 
        <button disabled={props.loading} className='startButton' onClick={props.clickHandler}>{Lang.Start}</button>
      </div>
    );
  }
  else if (props.seconds >= 0) {
    return (
      <div className="starter">
        <p className='countdown'>{props.seconds}</p>
      </div>
    );
  }
  else {
    return <InputBox inputMethod={props.inputMethod} />
  }
}

interface InputBoxProps {
  inputMethod: (event: React.FormEvent<HTMLTextAreaElement>) => void
}

function InputBox(props: InputBoxProps) {
  const field = useRef<HTMLTextAreaElement>(null);
  useEffect(() => field.current?.focus());
  return <textarea ref={field} onInput={props.inputMethod} className='InputField'></textarea>;
}