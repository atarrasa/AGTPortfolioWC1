import { servicesElements } from "@/data";
import Title from "./shared/title";
import { Check } from "lucide-react";

const Services = () => {
  return (
    <div className="p-6 md:px-12 md:py-24 max-w-7xl mx-auto" id="services">
      <Title title="Services" subtitle="What do I offer?" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
        {servicesElements.map((element, index) => (
          <div
            key={index}
            className="border border-white-10 rounded-xl p-4 shadow-md shadow-slate-500 dark:bg-slate-900"
          >
            <div className="mb-4 flex items-center justify-center">
              {element.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">
              {element.title}
            </h3>
            <ul className="text-base">
              {element.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 mb-3">
                  <Check className="h-6 w-6 text-green-500" size={20} />
                  {feature.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
