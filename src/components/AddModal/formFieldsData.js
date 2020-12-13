export const initialFormFieldsData = [
  {
    label: "First Name",
    type: "input",
    name: "first_name",
    response: "",
    pattern: "",
  },
  {
    label: "Last Name",
    type: "input",
    name: "last_name",
    response: "",
    pattern: "",
    error: ""
  },
  {
    label: "Email Address",
    type: "input",
    name: "email",
    response: "",
    pattern: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    error: ""
  },
  {
    label: "Mobile",
    type: "input",
    name: "mobile",
    response: "",
    pattern: /^[\d]{10}$/,
    error: ""
  },
  {
    label: "Location Type",
    type: "select",
    name: "location_type",
    options: [
      { label: "Select...", value: "" },
      { label: "City", value: "City" },
      { label: "State", value: "State" },
      { label: "Country", value: "Country" },
    ],
    response: "",
    pattern: "",
    error: ""
  },
  {
    label: "Location String",
    type: "input",
    name: "location_string",
    response: "",
    pattern: "",
    error: ""
  },
];
