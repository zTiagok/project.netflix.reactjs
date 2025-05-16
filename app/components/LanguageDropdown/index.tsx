import { Languages } from "lucide-react";
import { useRef } from "react";

type LanguageDropdownProps = {
  currentLanguage: "English" | "Portuguese";
};

export default function LanguageDropdown({
  currentLanguage = "English",
}: LanguageDropdownProps) {
  const selectRef = useRef<HTMLSelectElement>(null);

  const option1 = currentLanguage == "English" ? "English" : "Inglês";
  const option2 = currentLanguage == "English" ? "Portuguese" : "Português";

  const handleLanguageDropdown = () => {
    if (selectRef.current) {
      selectRef.current.focus();
      selectRef.current.showPicker();
    }
  };

  return (
    <div
      onClick={handleLanguageDropdown}
      className="flex h-10 w-fit items-center gap-2 rounded-md border-2 border-gray-600 px-2 text-white outline-1 outline-transparent transition-all focus-within:outline-white"
    >
      <Languages />
      <select
        ref={selectRef}
        className="h-full outline-none select-none [&>*]:text-black"
      >
        <option>{option1}</option>
        <option>{option2}</option>
      </select>
    </div>
  );
}
