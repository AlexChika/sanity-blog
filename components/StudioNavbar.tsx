import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid"
import { StudioNavbar } from "sanity";


const _StudioNavbar = (props: any) => {
    console.log(props);

    return (
        <nav>
            <div className="flex items-center justify-between px-5 py-3">
                <Link href="/" className="text-[#ff8a75] flex items-center" >
                    <ArrowUturnLeftIcon className="h-6 w-6 text-[#ff8a75] mr-2  animate-pulse" />
                    Go to Website
                </Link>

                <div className="hidden text-center sm:flex md:py-2 md:px-3 rounded-lg justify-center border-2 border-[#ff8a75]">

                    <h1 className="font-bold text-white">
                        Lets build together
                    </h1>

                    <Link href="https://i-am-alex.netlify.app" className="text-[#ff8a75] font-bold ml-2">
                        https://i-am-alex.netlify.app
                    </Link>

                </div>
            </div>
            <>{props.renderDefault(props)}</>
        </nav>
    )
}

export default _StudioNavbar