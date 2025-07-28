import { useState } from "react";
import PlanSelectorRadio from "~/components/PlanSelectorRadio";

interface StepSixInterface {
  onButtonClick: () => void;
}

export default function StepSix({ onButtonClick }: StepSixInterface) {
  const [selectedInput, setSelectedInput] = useState<string>("1");
  return (
    <div className="flex h-[820px] w-full flex-col items-start justify-start gap-6 text-center">
      <div className="flex flex-col items-start">
        <span className="text-sm uppercase">
          Step <b>6</b> of <b>6</b>
        </span>
        <h2 className="text-start font-bold">
          Choose the plan that’s right for you
        </h2>
      </div>

      <div className="grid w-full flex-1 grid-cols-3 grid-rows-1 gap-2 p-2">
        <PlanSelectorRadio
          id="1"
          title="Standard with ads"
          subtitle="1080p"
          ads="Less than you might think"
          downloadble_devices="2"
          quality="Good"
          resolution="1080 (Full HD)"
          simultaneous_devices="2"
          supported_devices="TV, computer, mobile phone, tablet"
          planValue="BRL 20.90"
          value="1"
          checked={selectedInput === "1"}
          onChange={(event) => setSelectedInput(event.currentTarget.value)}
        />

        <PlanSelectorRadio
          id="2"
          title="Standard"
          subtitle="1080p"
          ads="No ads"
          downloadble_devices="2"
          quality="Good"
          resolution="1080 (Full HD)"
          simultaneous_devices="2"
          supported_devices="TV, computer, mobile phone, tablet"
          planValue="BRL 20.90"
          value="2"
          checked={selectedInput === "2"}
          onChange={(event) => setSelectedInput(event.currentTarget.value)}
        />

        <PlanSelectorRadio
          id="3"
          title="Premium"
          subtitle="4K + HDR"
          ads="No ads"
          downloadble_devices="6"
          quality="Best"
          resolution="4K (Ultra HD) + HDR"
          simultaneous_devices="4"
          supported_devices="TV, computer, mobile phone, tablet"
          planValue="BRL 59.90"
          spatial_audio="Included"
          value="3"
          checked={selectedInput === "3"}
          onChange={(event) => setSelectedInput(event.currentTarget.value)}
        />
      </div>

      <button
        onClick={onButtonClick}
        className="w-full cursor-pointer rounded-sm bg-red-600 py-4 text-xl font-bold tracking-wide text-white"
      >
        Next
      </button>
    </div>
  );
}
