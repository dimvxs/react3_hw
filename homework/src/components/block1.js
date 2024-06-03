import React from 'react';
import './block1.css';


export function Block1(props){

    return(
<div className='block1'>
    <div className='header'><p>Basic</p></div>
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
    <div className='button'>Select plan</div>
</div>
    );
}