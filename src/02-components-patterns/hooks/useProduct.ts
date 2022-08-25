import { useState } from "react";

export const useProduct = () => {
    
    const [value, setValue] = useState(0);

    const increaseBy = (n:number) => {
        setValue(prev => Math.max(prev + n, 0));
    }

    return { value, increaseBy };
}

