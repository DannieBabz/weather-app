import { useFetch } from "react";

const Widgets = () => {
    const {data, isPending} = useFetch()

    return ( 
        <>
            <div className="grid gap-20 grid-cols-4 w-screen">
                {isPending && <div className="widget">Loading...</div> }
                {data && <div className="widget"></div>}
            </div>
        </>
     );
}
 
export default Widgets;