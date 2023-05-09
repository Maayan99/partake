import StarIcon from "@mui/icons-material/Star";
import Icon from "@components/components/common/icon/icon";


export default function TakeIcons({impactType, coins, duration}) {
    const getDurationText = () => {
        if (duration < 60) {
            return <p className="text-[7pt] -translate-y-[132%] leading-3 text-center">{duration}<br/>Min</p>;
        } else if (duration < 1440) {
            if (duration === 60) {
                return <p className="text-[7pt] -translate-y-[132%]  leading-3 text-center">1<br/>Hour</p>
            }
            return <p className="text-[7pt] -translate-y-[132%] leading-3 text-center">{duration / 60}<br/>Hours</p>;
        } else if (duration < 10080) {
            if (duration === 1440) {
                return <p className="text-[7pt] -translate-y-[132%] leading-3 text-center">1<br/>Days</p>;
            }
            return <p className="text-[7pt] -translate-y-[132%] leading-3 text-center">{duration / 1440}<br/>Days</p>;
        } else {
            if (duration === 10080) {
                return <p className="text-[7pt] -translate-y-[132%] leading-3 text-center">1<br/>Week</p>;
            }
            return <p className="text-[7pt] -translate-y-[132%] leading-3 text-center">{duration / 10080}<br/>Weeks</p>;
        }
    }


    return (
        <div className="mt-2.5 ml-2.5 flex gap-2">
            {impactType && <div className="flex flex-col justify-center items-center bg-white
            border-solid border-2 border-blue rounded-full p-2 w-12 h-12 text-blue">
                <Icon name={impactType}/>
            </div>}
            <div className="flex flex-col justify-center items-center bg-white
            border-solid border-2 border-blue rounded-full p-1 w-12 h-12 text-blue">
                <StarIcon/>
                <span className="text-xs -mt-1">{coins}</span>
            </div>
            {duration ?
                <div className="text-white w-12 h-12">
                    <svg className="w-12 h-12 fill-white"  viewBox="0 0 64.57 65.694">
                        <g id="Group_186" data-name="Group 186" transform="translate(2.087 2.087)">
                            <path id="Path_420" data-name="Path 420" d="M58.82,16.76a30.751,30.751,0,1,0,2.636,25.154" transform="translate(-1.5 -1.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
                            <path id="Path_421" data-name="Path 421" d="M35.766,5.21l.054,13.076L24.468,11.8Z" transform="translate(25.725 5.975)" fill="#fff" stroke="#fff" stroke-width="1"/>
                        </g>
                    </svg>
                    {getDurationText()}
                </div>
            : <></>}
        </div>
    )
}