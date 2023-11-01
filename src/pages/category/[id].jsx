

export default function Page ({id}) {


    return (
        <p>Current {id}</p>
    )
}

export async function getServerSideProps (ctx) {
    const {id} = ctx.params;

    return {
        props: {
            id
        }
    }
}