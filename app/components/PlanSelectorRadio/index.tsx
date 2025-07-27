import type { InputHTMLAttributes } from "react";

interface PlanSelectorRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  subtitle: string;
  value: string;
  quality: string;
  resolution: string;
  supported_devices: string;
  simultaneous_devices: string;
  downloadble_devices: string;
  ads: string;
  spatial_audio?: string;
}

export default function PlanSelectorRadio({
  title,
  subtitle,
  value,
  quality,
  resolution,
  supported_devices,
  simultaneous_devices,
  downloadble_devices,
  ads,
  spatial_audio,
  ...props
}: PlanSelectorRadioProps) {
  const renderGridElement = (title: string, description: string) => (
    <div className="border-b border-gray-400/60 text-start font-semibold last:border-none">
      <p className="text-xs text-gray-500">{title}</p>
      <p className="mb-4 text-sm text-gray-700">{description}</p>
    </div>
  );

  return (
    <label className="flex flex-col gap-4 rounded-2xl border border-gray-300 p-2">
      <input name="plan-radio" type="radio" className="hidden" {...props} />
      <div className="flex flex-col items-start rounded-2xl bg-purple-500 px-4 py-2 font-bold text-white">
        <p>{title}</p>
        <p>{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 grid-rows-8 gap-4 p-4">
        {renderGridElement("Monthly price", value)}
        {renderGridElement("Video and sound quality", quality)}
        {renderGridElement("Resolution", resolution)}
        {spatial_audio &&
          renderGridElement("Spatial audio (immersive sound)", spatial_audio)}
        {renderGridElement("Supported devices", supported_devices)}
        {renderGridElement(
          "Devices your household can watch at the same time",
          simultaneous_devices,
        )}
        {renderGridElement("Download devices", downloadble_devices)}
        {renderGridElement("Ads", ads)}
      </div>
    </label>
  );
}
