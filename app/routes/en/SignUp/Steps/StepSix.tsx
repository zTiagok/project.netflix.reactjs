import PlanSelectorRadio from "~/components/PlanSelectorRadio";

interface StepSixInterface {
  onButtonClick: () => void;
}

export default function StepSix({ onButtonClick }: StepSixInterface) {
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
          title="Standard with ads"
          subtitle="1080p"
          ads="Less than you might think"
          downloadble_devices="2"
          quality="Good"
          resolution="1080 (Full HD)"
          simultaneous_devices="2"
          supported_devices="TV, computer, mobile phone, tablet"
          value="BRL 20.90"
        />

        <PlanSelectorRadio
          title="Standard"
          subtitle="1080p"
          ads="No ads"
          downloadble_devices="2"
          quality="Good"
          resolution="1080 (Full HD)"
          simultaneous_devices="2"
          supported_devices="TV, computer, mobile phone, tablet"
          value="BRL 20.90"
        />

        <PlanSelectorRadio
          title="Premium"
          subtitle="4K + HDR"
          ads="No ads"
          downloadble_devices="6"
          quality="Best"
          resolution="4K (Ultra HD) + HDR"
          simultaneous_devices="4"
          supported_devices="TV, computer, mobile phone, tablet"
          value="BRL 59.90"
          spatial_audio="Included"
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
