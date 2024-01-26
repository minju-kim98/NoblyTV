import BtnStyles from './styles/BtnStyles';

interface ButtonProps {
  label: string;
  buttontype: 'cancel' | 'confirm' | 'next';
  onClick: () => void;
}

function Button({ label, buttontype, onClick }: ButtonProps) {
  return (
    <BtnStyles buttontype={buttontype} onClick={onClick}>
      {label}
    </BtnStyles>
  );
}

export default Button;
