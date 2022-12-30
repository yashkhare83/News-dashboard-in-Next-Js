import React from 'react';
export async function getStaticProps() {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=9493ad8d674f4feaae246f8a0f7f5bef`)
    const data = await res.json()
    return {
        props: {
            data,
        },
    }
}



export default function Index({ data }) {
    return (
        <>
            {data.articles.map((d) => {
                return (
                            <div className='newsCard' key={d.id}>
                                <div className='newsImg'>
                                    <img src={d.urlToImage} />
                                </div>
                                <div className='newsHeading'>{d.title}</div>
                                <a href={d.url}>Read More</a>
                            </div>
                )
            })}
        </>
    )
}
