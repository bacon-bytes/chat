const teams = [
  {
    id: "5b21ca3eeb7f6fbccd470000",
    name: "Super Cool Games",
    icon: "./profileIcons/gameIcon.png",
    channels: [
      {
        id: "6c52ca3eeb7f6fbccd470000",
        name: "general",
        members: [
          "5b21ca3eeb7f6fbccd471813",
          "5b21ca3eeb7f6fbccd471837",
          "5b21ca3eeb7f6fbccd471838",
          "5b21ca3eeb7f6fbccd471839",
        ],
      },
      {
        id: "6c52ca3eeb7f6fbccd470001",
        name: "code",
        members: [
          "5b21ca3eeb7f6fbccd471813",
          "5b21ca3eeb7f6fbccd471837",
          "5b21ca3eeb7f6fbccd471838",
          "5b21ca3eeb7f6fbccd471839",
        ],
      },
      {
        id: "6c52ca3eeb7f6fbccd470002",
        name: "art",
        members: [
          "5b21ca3eeb7f6fbccd471813",
          "5b21ca3eeb7f6fbccd471837",
          "5b21ca3eeb7f6fbccd471838",
          "5b21ca3eeb7f6fbccd471839",
        ],
      },
    ],
    directMessageChannels: [
      {
        id: "6c52ca3eeb7f6fbccd470003",
        members: ["5b21ca3eeb7f6fbccd471813", "5b21ca3eeb7f6fbccd471837"],
      },
      {
        id: "6c52ca3eeb7f6fbccd470004",
        members: ["5b21ca3eeb7f6fbccd471813", "5b21ca3eeb7f6fbccd471838"],
      },
      {
        id: "6c52ca3eeb7f6fbccd470005",
        members: ["5b21ca3eeb7f6fbccd471813", "5b21ca3eeb7f6fbccd471839"],
      },
      {
        id: "6c52ca3eeb7f6fbccd470006",
        members: ["5b21ca3eeb7f6fbccd471837", "5b21ca3eeb7f6fbccd471838"],
      },
      {
        id: "6c52ca3eeb7f6fbccd470007",
        members: ["5b21ca3eeb7f6fbccd471837", "5b21ca3eeb7f6fbccd471839"],
      },
      {
        id: "6c52ca3eeb7f6fbccd470008",
        members: ["5b21ca3eeb7f6fbccd471838", "5b21ca3eeb7f6fbccd471839"],
      },
    ],
    members: [
      "5b21ca3eeb7f6fbccd471813",
      "5b21ca3eeb7f6fbccd471837",
      "5b21ca3eeb7f6fbccd471838",
      "5b21ca3eeb7f6fbccd471839",
    ],
  },
  {
    id: "5b21ca3eeb7f6fbccd470001",
    name: "Business Bee",
    icon: "./profileIcons/beeIcon.png",
    channels: [
      {
        id: "6c52ca3eeb7f6fbccd470015",
        name: "general",
        members: ["5b21ca3eeb7f6fbccd471813", "5b21ca3eeb7f6fbccd471837"],
      },
    ],
    directMessageChannels: [
      {
        id: "6c52ca3eeb7f6fbccd470083",
        members: ["5b21ca3eeb7f6fbccd471813", "5b21ca3eeb7f6fbccd471837"],
      },
    ],
    members: ["5b21ca3eeb7f6fbccd471813", "5b21ca3eeb7f6fbccd471837"],
  },
];

export function getTeams() {
  return teams;
}
