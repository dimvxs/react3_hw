import React from 'react';
import './block2.css';


export function Block2(props){

    return(
<div className='block2'>
    <div className='header2'><p>Standard</p></div>
    <div className='price'>{props.price}</div>
    <div className='info'>
    <ul>
                    <li className='item1'>
                        <img src={props.icon1}/>
                        {props.name}
                    </li>
                    <li className='item2'>
                        <img src={props.icon2}/>
                        {props.gbValue}
                    </li>
                    <li className='item1'>
                        <img src={props.icon3}/>
                        {props.limit}
                    </li>
                </ul>
    </div>
    <div className='button2'>Select plan</div>
</div>
    );
}