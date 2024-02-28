import Select, { ISelect } from './Select';
import Radio, { IRadio } from './Radio';
import TextArea, { ITextArea } from './TextArea';
import Editor, { IEditor } from './Editor';
import MultiSelect, { IMultiSelect } from './MultiSelect';
import { FieldValues } from 'react-hook-form';

function FormControl(props: IFormControlProps) {
  const { control, ...rest } = props;
  switch (control) {
    case 'select':
      return <Select {...(rest as ISelect<FieldValues>)} />;
    // case 'file':
    //   return <FileUpload {...(rest as IInput<FieldValues>)} />;
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
