'use client';

import { store } from '@/redux/store';
import { Provider } from 'react-redux';
import StyledComponentsRegistry from './AntdRegistry';
import { ChildrenProps } from './types';



const Providers = ({ children }: ChildrenProps) => {
    return (
        <Provider store={store}>
            <StyledComponentsRegistry>
                {children}
            </StyledComponentsRegistry>
        </Provider>
    )
}

export default Providers