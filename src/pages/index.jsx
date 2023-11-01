import {fetchData} from "@/fetch";
import Link from 'next/link'

export default function HomePage ({res, categories}) {
    console.log(res, categories)

    return (
        <>
            <ul className="mb-8">
                {
                    categories.map(item =>
                        <li><Link href={`/?category=${item.id}`}>{item.title}</Link></li>
                    )
                }
            </ul>
            <ul>
                {
                    res.length ?
                    res.map(item =>
                        <li>{item.title}</li>
                    )
                        :
                        <h1>Не найдено</h1>
                }
            </ul>
        </>

    )
}


export async function getServerSideProps(context) {

    const {category} = context.query;

    const categories = await fetchData({
        endpoint: 'courses/marketplaceCategories',
        data: {}
    });

    const res = await fetchData({
        endpoint: 'courses/marketplaceCourses',
        data: {
            category: category || ''
        }
    });


    return {
        props: { message: `Next.js is awesome`, res, categories }
    }
}