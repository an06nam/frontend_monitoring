import { NextBreadCrumb } from "@components/breadcrumb"
import NavBar from "@components/navbar";



export default function dieselLayout ({children,}:{children: React.ReactNode}){
  return (
    <div className="bg-inherit">
        <div className="mb-5">
            <NextBreadCrumb
                homeElement={'Home'}
                separator={<span> | </span>}
                activeClasses='font-bold'
                containerClasses='flex py-2' 
                listClasses='mx-2'
                capitalizeLinks
                />
        </div>
        
        <main>{children}</main>
    </div>
        
  )
}