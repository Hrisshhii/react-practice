export type Rarity="common"|"rare"|"epic"|"legendary";

export type Item={
  id: number;
  name: string;
  type: "weapon"|"armor"|"skin";
  rarity: Rarity;
  power: number;
  image: string;
};

export const items: Item[] = [
  {
    id: 1,
    name: "Dragon Blade",
    type: "weapon",
    rarity: "legendary",
    power: 98,
    image: "https://cdn-icons-png.flaticon.com/512/166/166598.png",
  },
  {
    id: 2,
    name: "Shadow Armor",
    type: "armor",
    rarity: "epic",
    power: 82,
    image: "https://cdn-icons-png.flaticon.com/512/1041/1041884.png",
  },
  {
    id: 3,
    name: "Cyber Pistol",
    type: "weapon",
    rarity: "rare",
    power: 65,
    image: "https://cdn-icons-png.flaticon.com/512/3655/3655682.png",
  },
  {
    id: 4,
    name: "Starter Sword",
    type: "weapon",
    rarity: "common",
    power: 30,
    image: "https://cdn-icons-png.flaticon.com/512/166/166570.png",
  },
];