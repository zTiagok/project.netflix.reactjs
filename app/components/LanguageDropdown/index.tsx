type LanguageDropdownProps = {
  currentLanguage: "English" | "Portuguese";
};

export default function LanguageDropdown({
  currentLanguage = "English",
}: LanguageDropdownProps) {
  const option1 = currentLanguage;
  const option2 = !currentLanguage;

  console.log("Option 1: ", option1);
  console.log("Option 2: ", option2);

  return (
    <select className="w-fit rounded-md border-2 border-gray-600 p-1">
      <option>{currentLanguage == "English" ? "English" : "Inglês"}</option>
      <option>
        {currentLanguage == "English" ? "Portuguese" : "Português"}
      </option>
    </select>
  );
}
