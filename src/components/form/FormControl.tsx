import Input, { IInput } from './Input';
import Select, { ISelect } from './Select';
import FileUpload from './FileUpload';
import Radio, { IRadio } from './Radio';
import Password, { IPassword } from './Password';
import TextArea, { ITextArea } from './TextArea';
import Editor, { IEditor } from './Editor';
import MultiSelect, { IMultiSelect } from './MultiSelect';
import { FieldValues } from 'react-hook-form';

function FormControl(props: IFormControlProps) {
  const { control, ...rest } = props;
  switch (control) {
    case 'input':
      return <Input {...(rest as IInput<FieldValues>)} />;
    case 'password':
      return <Password {...(rest as IPassword)} />;
    case 'select':
      return <Select {...(rest as ISelect<FieldValues>)} />;
    case 'file':
      return <FileUpload {...(rest as IInput<FieldValues>)} />;
    case 'radio':
      return <Radio {...(rest as IRadio<FieldValues>)} />;
    case 'textArea':
      return <TextArea {...(rest as ITextArea<FieldValues>)} />;
    case 'editor':
      return <Editor {...(rest as IEditor)} />;
    case 'multiSelect':
      return <MultiSelect {...(rest as IMultiSelect)} />;

    default:
      return null;
  }
}

export default FormControl;
interface IFormControlProps {
  control: string;
}
