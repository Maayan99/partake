import {useState} from "react";
import BlueButton from "@components/components/common/blue-button";
import PrimaryButton from "@components/components/common/primary-button";
import ColoredButton from "@components/components/common/colored-button/colored-button";

export default function TakeSurveyPage() {
    const [selected, setSelected] = useState();
    const [submitted, setSubmitted] = useState(false);

    const options = [
        {
            id: '1',
            text: 'Children and youth',
        },
        {
            id: '2',
            text: 'Poverty',
        },
        {
            id: '3',
            text: 'Refugees',
        },
        {
            id: '4',
            text: 'LGTBQIA+',
        },
    ];

    const handleClick = (e) => {
        setSelected(e.target.value);
    }

    const handleSubmit = () => {
        setSubmitted(true);
    }


    return (
        <div className="-mb-32 flex items-center justify-center w-full min-h-[720px] py-10 px-10 bg-gradient-radial ellipse_at_bottom from-[#FFFCE6] to-[#05CDFF]">
            {!submitted ? <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-10 space-y-10 w-2/3 max-w-[900px]">
            <p className="text-lg">Hi Evyatar, please answer this short survey</p>
                <h1 className="text-center font-bold text-2xl">Which social cause do you wish our company to focus on this year?</h1>
                <div className="space-y-4 flex flex-col items-center">
                    {options.map(option =>
                            <ColoredButton onClick={handleClick} value={option.id} key={option.id}
                                className={`w-80 hover:translate-x-1 ${option.id === selected ? 'bg-black' : 'bg-blue hover:bg-black'}`}>
                                {option.text}
                            </ColoredButton>)}
                </div>

                <PrimaryButton onClick={handleSubmit}>Submit Choice</PrimaryButton>
            </div> :
                <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-10 w-2/3 max-w-[900px]">
                    <h1 className="font-bold mb-10">Thanks!</h1>
                    <p>Your answer has been submitted</p>
                    <p>Have a great holiday season :)</p>
                    <PrimaryButton className="mt-10" onClick={() => window.location.href = '/take'}>Take me back to Take!</PrimaryButton>
                </div>}
        </div>
    )
}