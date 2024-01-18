import Link from "next/link";


export default function Navbar() {

    return(
        <nav className="flex justify-between items-center bg-slate-500 px-8 py-5">
            <Link className="text-white font-bold" href={"/"}>Home</Link>
            <Link className="bg-white p-2" href={"/addTopic"}>Add Topic</Link>
        </nav>
    );
}