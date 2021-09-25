import * as React from 'react';
import './importIcons'
import './icon.scss'
import classnames from './helpers/classnames'


interface IconProps extends React.SVGAttributes<SVGElement>{
    name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props)=>{
    const {className, ...restProps} = props;
    return (
            <svg className={classnames('hzw-icon',className)} {...restProps}>
                <use xlinkHref={`#${props.name}`} />
            </svg>
    )
}

export default Icon;