type LanguageDropdownProps = {
  currentLanguage: "English" | "Portuguese";
};

export default function LanguageDropdown({
  currentLanguage = "English",
}: LanguageDropdownProps) {
  return (
    <select className="w-fit rounded-full border-2 border-gray-600 p-1">
      <option>{currentLanguage == "English" ? "English" : "Inglês"}</option>
      <option>
        {currentLanguage == "English" ? "Portuguese" : "Português"}
      </option>
    </select>
  );
}
