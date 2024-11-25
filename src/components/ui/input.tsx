type Props = {
    placeholder: string;
    password?: boolean;
    value?: string;
    onChange?: (newValue: string) => void;
    
}

export const Input = ({ placeholder,password, value, onChange}: Props) => {
    return (
        <div className="flex flex-items h-14 rounded-3xl border-2 border-orange-700">
            <input 
                placeholder={placeholder}
                value={value}
                onChange={e => onChange && onChange(e.target.value)}

            />
        </div>
    );
}