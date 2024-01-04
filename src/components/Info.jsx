import InfoCard from "./shared/InfoCard";
import { IoTimeSharp } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
function Info() {
  return (
    <section className="section-info">
      <InfoCard
        Icon={IoTimeSharp}
        title={"Working Time"}
        content={"Today 10:00 AM - 11:00 PM"}></InfoCard>
      <InfoCard
        Icon={IoLocation}
        title={"Our Location"}
        content={"Washington, D.C, USA"}></InfoCard>
      <InfoCard
        Icon={FaPhoneAlt}
        title={"Phone"}
        content={"+01234567891"}></InfoCard>
    </section>
  );
}

export default Info;
