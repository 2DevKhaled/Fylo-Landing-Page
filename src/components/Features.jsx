import FeatureBox from "./FeatureBox";
import FeatureImg1 from "/src/assets/images/icon-access-anywhere.svg";
import FeatureImg2 from "/src/assets/images/icon-security.svg";
import FeatureImg3 from "/src/assets/images/icon-collaboration.svg";
import FeatureImg4 from "/src/assets/images/icon-any-file.svg";
const features = [
  {
    key: 1,
    icon: FeatureImg1,
    title: "Access your files, anywhere",
    description:
      "The ability to use a smartphone, tablet, or computer to access your account means your  files follow you everywhere",
  },
  {
    key: 2,
    icon: FeatureImg2,
    title: "Security you can trust",
    description:
      "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
  },
  {
    key: 3,
    icon: FeatureImg3,
    title: "Real-time collaboration",
    description:
      "Securely share files and folders with friends, family and colleagues for live collaboration.",
  },
  {
    key: 4,
    icon: FeatureImg4,
    title: "Store any type of file",
    description:
      "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared",
  },
];
export default function Features() {
  return (
    <section className="pb-[150px]">
      <div className="container mx-auto">
        <div className="mt-[20px] grid grid-cols-1 md:grid-cols-2 justify-center gap-[100px] w-[865px] max-w-full mx-auto ">
          {features.map((item) => (
            <FeatureBox
              key={item.key}
              icon={item.icon}
              title={item.title}
              desc={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
