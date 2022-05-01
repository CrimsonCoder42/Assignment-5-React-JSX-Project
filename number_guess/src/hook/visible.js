import React from 'react'
import { useState } from 'react';

export const useVisible = (comp, visibility = false) => {

    const [visible, setVisibility] = useState(() => visibility);

    return [visible ? comp : null, () => setVisibility((v) => !v) ]
}

export default useVisible;