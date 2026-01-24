type Props={
    label: string; 
    onClick:()=>void; 
    disabled: boolean;
};
const Buttons = ({label,onClick,disabled}: Props) => {
  return (
    <div>
        <button onClick={onClick} disabled={disabled}>{label}</button>
    </div>
  )
}

export default Buttons