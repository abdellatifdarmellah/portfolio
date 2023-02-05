import Navbar from "./navbar";

export default function Layout({setPage, children}) {
    return (   
        <>
            <Navbar setPage={setPage} />
            {children}
        </>
    )
}