const formConfig = {
  form: {
    titleEng: {
      uuid: "1527cb6d-6813-4888-b5a3-1d32c226901c",
      id: "titleEng",
      label: "Title (English)",
      control: "input",
      type: "text",
      rules: {
        required: {
          value: true,
          message: "Title Eng. is required",
        },
      },
    },
    titleJap: {
      uuid: "5a0bb6d2-9051-4d81-af12-57a1cf2f3c1f",
      id: "titleJap",
      label: "Title (Japanese)",
      control: "input",
      type: "text",
      rules: {
        required: {
          value: true,
          message: "Title Jap. is required",
        },
      },
    },
    groupName: {
      uuid: "97fd9cb0-c720-4b73-8716-286d38309c69",
      id: "groupName",
      label: "Group Name",
      control: "input",
      type: "text",
      rules: {
        required: {
          value: true,
          message: "Group Name is required",
        },
      },
    },
    released: {
      uuid: "3ad59be8-0137-466b-98e4-bc2ef2577ea7",
      id: "released",
      label: "Released",
      control: "input",
      type: "number",
    },
    status: {
      uuid: "6a227f83-f585-4b3e-8c43-e54302a7ef48",
      id: "status",
      label: "Status",
      control: "select",
      options: [
        {
          value: "",
          label: "-",
        },
        {
          value: "completed",
          label: "Completed",
        },
        {
          value: "ongoing",
          label: "Ongoing",
        },
        {
          value: "planing",
          label: "Planing",
        },
        {
          value: "cancled",
          label: "Cancled",
        },
      ],
    },
    type: {
      uuid: "a39fb479-a04e-4755-93e1-3c7bec0305e9",
      id: "type",
      label: "Type",
      control: "select",
      options: [
        {
          value: "",
          label: "-",
        },
        {
          value: "movie",
          label: "Movie",
        },
        {
          value: "ova",
          label: "OVA",
        },
        {
          value: "season",
          label: "Season",
        },
      ],
    },
    description: {
      uuid: "c10e09b2-4208-4632-acf2-80be2a1068f4",
      id: "description",
      label: "Description",
      control: "input",
      type: "text",
    },
    link: {
      uuid: "1fc7dd11-bf66-4339-86d5-2dc68145212e",
      id: "link",
      label: "Link",
      control: "input",
      type: "text",
      rules: {
        required: {
          value: true,
          message: "Link is required",
        },
      },
    },
    banner: {
      uuid: "31556e98-21b1-462f-98ef-1d8f383c9b54",
      id: "banner",
      label: "Banner",
      control: "input",
      type: "text",
    },
    thumnail: {
      uuid: "0288a25e-5cc0-451a-9c7b-eb7b3f8f36eb",
      id: "thumnail",
      label: "Thumnail",
      control: "input",
      type: "text",
    },
    logo: {
      uuid: "6a8b8655-8254-45c4-95d1-9d9039311c43",
      id: "logo",
      label: "Logo",
      control: "input",
      type: "text",
    },
    trailer: {
      uuid: "cc855dfd-fceb-4f24-8b80-c35fcf58a550",
      id: "trailer",
      label: "Trailer",
      control: "input",
      type: "text",
    },
  },
  template: {
    titleEng: {
      id: "titleEng",
      label: "Title (English)",
      control: "input",
      type: "text",
      rules: {
        required: {
          value: true,
          message: "Username is required",
        },
      },
    },
    titleJap: {
      id: "titleJap",
      label: "Title (Japanese)",
      control: "input",
      type: "text",
      rules: {
        required: {
          value: true,
          message: "Title Jap. is required",
        },
      },
    },
    groupName: {
      id: "groupName",
      label: "Group Name",
      control: "input",
      type: "text",
      rules: {
        required: {
          value: true,
          message: "Group Name is required",
        },
      },
    },
    released: {
      id: "released",
      label: "Released",
      control: "input",
      type: "number",
    },
    status: {
      id: "status",
      label: "Status",
      control: "select",
      options: [
        {
          value: "completed",
          label: "Completed",
        },
        {
          value: "ongoing",
          label: "Ongoing",
        },
        {
          value: "planing",
          label: "Planing",
        },
        {
          value: "cancled",
          label: "Cancled",
        },
      ],
    },
    type: {
      id: "type",
      label: "Type",
      control: "select",
      options: [
        {
          value: "-",
          label: "",
        },
        {
          value: "movie",
          label: "Movie",
        },
        {
          value: "ova",
          label: "OVA",
        },
        {
          value: "season",
          label: "Season",
        },
      ],
    },
    description: {
      id: "description",
      label: "Description",
      control: "input",
      type: "text",
    },
    link: {
      id: "link",
      label: "Link",
      control: "input",
      type: "text",
      rules: {
        required: {
          value: true,
          message: "Link is required",
        },
      },
    },
    banner: {
      id: "banner",
      label: "Banner",
      control: "input",
      type: "text",
    },
    thumnail: {
      id: "thumnail",
      label: "Thumnail",
      control: "input",
      type: "text",
    },
    logo: {
      id: "logo",
      label: "Logo",
      control: "input",
      type: "text",
    },
    trailer: {
      id: "trailer",
      label: "Trailer",
      control: "input",
      type: "text",
    },
  },
};

export default formConfig;
