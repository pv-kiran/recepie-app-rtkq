import { useSelector } from "react-redux";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Title from "./Title";

function CookingStep() {
  const { myRecipie } = useSelector((state) => state?.recepie);
  return (
    <>
      <Title
        title={"Cooking Steps"}
        subtitle={"Simple steps, delicious results"}></Title>
      <section className="section-steps">
        <VerticalTimeline>
          {myRecipie?.analyzedInstructions[0]?.steps?.map((item, index) => {
            return (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#F5DDC4",
                  color: "#F48E28",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  #F5DDC4",
                }}
                iconStyle={{
                  background: "#F5DDC4",
                  color: "#F48E28",
                }}>
                <h3 className="vertical-timeline-element-title">
                  Step {item?.number}
                </h3>
                <p style={{ fontWeight: "300" }}>{item?.step}</p>
              </VerticalTimelineElement>
            );
          })}
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            // icon={<StarIcon />}
          />
        </VerticalTimeline>
      </section>
    </>
  );
}

export default CookingStep;
