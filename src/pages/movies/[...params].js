import Seo from "@/components/Seo";
import { useRouter } from "next/router";


export default function Detail({params}) {
    const router = useRouter();
    const [title, id] = params || [];
    console.log(router);
    return (
        <>
            <Seo title={title} />
            <h4>{title || "Loading"}</h4>
        </>
    )
}

export function getServerSideProps({params: {params}}) {
    
    return {
        props: {
            params
        },
    }
}