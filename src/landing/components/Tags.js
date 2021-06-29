import React from 'react'
import './Tags.scss'
import { Link } from 'react-router-dom'
export default function Tags() {
    const style={

        backgroundColor:'#111111aa'
    }
    const tags = ['فشن', 'حیوان','درخت','مد','تاریخی','معماری','اشیا','طبیعت','گربه']
    return (
        <div className='main_tags'>
            <p>
                <b>به طور مثال:</b>
                {tags.map(tag=> <Link style={style} to={"search/"+tag}>{tag}</Link>)}
            </p>
        </div>
    )
}
