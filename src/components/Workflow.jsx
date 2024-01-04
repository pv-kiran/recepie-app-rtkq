import Title from "./Title";
import WorkflowCard from "./shared/WorkflowCard";
import workOne from "../assets/wrkone.png";
import workTwo from "../assets/worktwo.png";
import workThree from "../assets/workthree.png";
import leftLine from "../assets/left-line.png";
import rightLine from "../assets/right-line.png";
function Workflow() {
  return (
    <>
      <Title
        title={"How to work"}
        subtitle={"Food Us an Important Part Of Balanced Diet"}></Title>
      <section className="section-workflow">
        <WorkflowCard img={workOne} title={"Choose"}></WorkflowCard>
        <WorkflowCard img={workTwo} title={"Prepare Food"}></WorkflowCard>
        <WorkflowCard img={workThree} title={"Deliver"}></WorkflowCard>
        <img src={leftLine} alt="leftline" className="left-line" />
        <img src={rightLine} alt="leftline" className="right-line" />
      </section>
    </>
  );
}

export default Workflow;
