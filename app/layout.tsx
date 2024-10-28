import type { Metadata } from "next";
import '@styles/globals.css'
import NavBar from "@components/navbar";
import Footer from "@components/footer";


export const metadata: Metadata = {
    title: 'Dual Fuel App',
    description: 'Dual Fuel App',
}

export default function RootLayout ({children,}:{children: React.ReactNode}){
    return(
        <html lang="en" data-theme="light">
            <body>
                <NavBar/>
                <main>{children}</main>
                <Footer/>
            </body>
        </html>
    )
}