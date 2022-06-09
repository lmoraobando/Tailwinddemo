import logo from "../../images/logo-white.svg";


export const Navbar = ()=>{
    const manu = ['Home','About','Contact']

    return(
        <nav className="max-w-7xl mx-auto py-8">
            <div className="container mx-auto flex flex-wrap items-center justify-between">
                <div className="flex space-x-1 items-center">
                    <img className="text-2xl font-bold" src={logo} height="40" width="40" style={{"color":"red"}} />
                    <h1 className="text-2xl font-bold">Waterbox</h1>
                </div>
                <div className="flex space-x-16">
                    {
                        manu.map((item,idx)=>(
                            <a href="#" className="font-medium hover:text-gray-700" key={idx}>{item}</a>
                        ))    
                    }
                    
                </div>
            </div>
        </nav>
    );


}


