import Select from "react-select";

const options = [
  { value: "all", label: "All" },
  { value: "titles", label: "Titles" },
  { value: "tv-episodes", label: "TV Episodes" },
  { value: "celeb", label: "Celebs" },
  { value: "keyword", label: "Keywords" },
  { value: "advance search", label: "Advance Search" },
];

const SearchFilter = () => (
  <Select
    options={options}
    className="w-24"
    classNamePrefix="All"
    styles={{
      control: (provided) => ({
        ...provided,
        borderColor: "#ddd",
        boxShadow: "none",
        "&:hover": {
          borderColor: "#ccc",
        },
        "&:focus": {
          borderColor: "#4f46e5",
        },
      }),
      option: (provided) => ({
        ...provided,
        padding: 20,
      }),
    }}
  />
);

export default SearchFilter;
