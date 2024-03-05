import Radio, { IRadio } from './Radio';
import Editor, { IEditor } from './Editor';
import { FieldValues } from 'react-hook-form';

function FormControl(props: IFormControlProps) {
  const { control, ...rest } = props;
  switch (control) {
    case 'radio':
      return <Radio {...(rest as IRadio<FieldValues>)} />;
    case 'editor':
      return <Editor {...(rest as IEditor)} />;

    default:
      return null;
  }
}

export default FormControl;
interface IFormControlProps {
  control: string;
}
