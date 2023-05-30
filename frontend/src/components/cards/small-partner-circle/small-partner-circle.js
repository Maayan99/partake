export default function SmallPartnerCircle({partner, className, h}) {
    let bg = "bg-gray";
    if (partner.type === "Org") {
        bg = "bg-orange-100";
    } else if (partner.type === "Non-Profit") {
        bg = "bg-purple-100";
    }

    return (
        <div className={`${className} rounded-full ${bg} h-${h} aspect-square
        absolute top-1/2 left-1/2 -translate-x-1'2 -translate-y-1;2 hover:z-10
        flex flex-col place-items-center justify-center text-center
         hover:-translate-y-20 hover:h-[320px] hover:-translate-x-20
         transition-all duration-75 group`}>
            <div className="hidden group-hover:flex flex-col items-center space-y-1">
                <h1 className="text-lg font-bold">Initiatives:</h1>
                {partner.initiatives.map((initiative, index) =>
                    <div key={index} className="rounded-full px-2 bg-amber-100">
                        <span className="text-sm">{initiative}</span>
                    </div>
                )}
            </div>


            <div className="flex">
                <div className="hidden group-hover:flex flex-col items-center space-y-1 transition-all">
                    <h1 className="text-lg font-bold">Demands:</h1>
                    {partner.demands.map((demand, index) =>
                        <div key={index} className="rounded-full px-2 bg-important-blue">
                            <span className="text-sm">{demand}</span>
                        </div>
                    )}
                </div>

                <div className="flex flex-col items-center justify-center">
                    <img src={`/assets/PNG/logos/square/logo-s-${partner.logo}.png`} className="h-10 aspect-square"/>
                    <h1 className="text-lg font-bold">{partner.name}</h1>
                </div>

                <div className="hidden group-hover:flex flex-col items-center space-y-1">
                    <h1 className="text-lg font-bold">Co-Partners:</h1>
                    {partner.coPartners.map((coPartner, index) =>
                        <img src={`/assets/PNG/logos/square/logo-s-${coPartner}.png`} className="h-10 aspect-square rounded-full " key={index}/>
                    )}
                </div>
            </div>

            <div className="hidden group-hover:flex flex-col items-center space-y-1">
                <h1 className="text-lg font-bold">Time Frame: <span className="text-blue">{partner.timeFrame}</span></h1>
            </div>
        </div>
    )
}