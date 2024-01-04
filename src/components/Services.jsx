import Title from "./Title";
import ServiceCard from "./shared/ServiceCard";
import { CiForkAndKnife } from "react-icons/ci";
import { GiKnifeFork } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";

function Services() {
  return (
    <>
      <Title
        title={"Services"}
        subtitle={"Why Choose our Favourite Food"}></Title>
      <section className="service-section">
        <ServiceCard
          Icon={CiForkAndKnife}
          title={"Qualityfull Food"}></ServiceCard>
        <ServiceCard Icon={GiKnifeFork} title={"Healthy Food"}></ServiceCard>
        <ServiceCard
          Icon={TbTruckDelivery}
          title={"Fast Delivery"}></ServiceCard>
      </section>
    </>
  );
}

export default Services;
