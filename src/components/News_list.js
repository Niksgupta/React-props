// use class based Component when you use STATES
// Use functional based component when there is no use of STATES.

import React from 'react';
import NewsItem from './News_list_items'

const NewsList =(props)=>{

    // map function just like for loop to extract each item
    const items = props.news.map((item)=>{
        return(
            <NewsItem  key ={item.id} item={item} />
        )
    })


    return(
        <div>
            {items}
        </div>
    )
}

export default NewsList;