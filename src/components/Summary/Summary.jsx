import { SummaryCard } from "../SummaryCard/SummaryCard"

export const Summary = () => {
    return (
        <div className="summary-container">            
            <SummaryCard title="Total" count={8}/>
            <SummaryCard title="BackEnd" count={4}/>
            <SummaryCard title="FrontEnd" count={1}/>
            <SummaryCard title="SoftSkill" count={5}/>
        </div>
    )
}