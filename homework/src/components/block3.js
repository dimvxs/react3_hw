import React from 'react';
import './block3.css';


export function Block3(props){

    return(
<div className='block3'>
    <div className='header3'><p>Premium</p></div>
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
    <div className='button3'>Select plan</div>
</div>
    );
}

