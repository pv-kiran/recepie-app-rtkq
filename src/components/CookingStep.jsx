import { useSelector } from "react-redux";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function CookingStep() {
  const { myRecipie } = useSelector((state) => state?.recepie);
  return (
    <section className="section-steps">
      <VerticalTimeline>
        {myRecipie?.analyzedInstructions[0]?.steps?.map((item, index) => {
          return (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              position={index % 2 === 0 ? "left" : "right"}
              contentStyle={{
                background: "#F48E28",
                color: "#fff",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #F48E28",
              }}
              iconStyle={{
                background: "#F48E28",
                color: "#fff",
              }}>
              <h3 className="vertical-timeline-element-title">
                Step {item?.number}
              </h3>
              <p style={{ fontWeight: "100" }}>{item?.step}</p>
            </VerticalTimelineElement>
          );
        })}
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          // icon={<StarIcon />}
        />
      </VerticalTimeline>
    </section>
  );
}

export default CookingStep;
