import {User} from 'phosphor-react';
import {AvatarContainer, AvatarImage, AvatarFallback} from './styles';
import type { ComponentProps } from 'react';

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {};

export function Avatar(props: AvatarProps) {
    return (
        <AvatarContainer>
            <AvatarImage {...props} />

            <AvatarFallback delayMs={600}>
                <User />
            </AvatarFallback>
        </AvatarContainer>
    )
}