import { ChildrenProps } from './types'



const Provider = ({ children }: ChildrenProps) => {
    return (
        <Provider>{children}</Provider>
    )
}

export default Provider