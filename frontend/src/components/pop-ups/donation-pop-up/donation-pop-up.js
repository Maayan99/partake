import PopUp from "@components/components/pop-ups/basic-pop-up/pop-up";
import BlueButton from "@components/components/common/blue-button";

export default function DonationPopUp({display, setDisplay}) {
    return (
        <PopUp display={display} setDisplay={setDisplay} title="Donation">
            <div className="p-8 flex flex-col items-center space-y-4">
                <BlueButton onClick={() => {window.location.href = '/take'}}>Take me to more challenges!</BlueButton>
            </div>
        </PopUp>
    )
}