import * as React from 'react';
// @ts-ignore
import ReactDOM from 'react-dom';
import Icon from './icon';

const fn: React.MouseEventHandler =(e)=>{
    console.log(e.target)
}

ReactDOM.render(<div>
    <Icon name="wechat" onClick={fn}/>,
    <Icon name="QQ" onClick={fn}/>,
    <Icon name="taobao" onClick={fn}/>,
    <Icon name="zfb" onClick={fn}/>,
    <Icon name="bilibili" onClick={fn}/>
</div>,document.querySelector('#root'))