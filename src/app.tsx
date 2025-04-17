import "bootstrap/dist/css/bootstrap.min.css";
import NinjaList from "./Components/ninja";
const data = [
  {
    name: "Cole",
    age: 16,
    image: "Cole.jpg",
    color: "bg-black",
    powerLevel: 8,
    skills: ["Spinjitzu", "Super Strength", "Earth Element"],

    personality: { brave: true, leader: false, loyal: true },
  },
  {
    name: "Wu Sensi",
    age: 16,
    image: "Wu_cover.jpg",
    color: "bg-success",
    powerLevel: 8,
    skills: ["Spinjitzu", "Super Strength", "Master of spenjustsu"],

    personality: { brave: true, leader: false, loyal: true },
  },
  {
    name: "Jay",
    age: 17,
    image: "jay.jpg",
    color: "bg-primary",
    powerLevel: 7,
    skills: ["Spinjitzu", "Lightning Element", "Speed"],

    personality: { brave: true, leader: false, loyal: false },
  },
  {
    name: "Lloyd",
    age: 18,
    image: "lloyd.jpg",
    color: "bg-success",
    powerLevel: 10,
    skills: ["Spinjitzu", "Green Energy", "Leadership"],

    personality: { brave: true, leader: true, loyal: true },
  },
  {
    name: "Kai",
    age: 19,
    image: "kai.jpg",
    color: "bg-secondary",
    powerLevel: 9,
    skills: ["Spinjitzu", "Fire Element", "Swordsmanship"],

    personality: { brave: true, leader: false, loyal: true },
  },
  {
    name: "Zane",
    age: 18,
    image: "zane.jpg",
    color: "bg-black",
    powerLevel: 9,
    skills: ["Spinjitzu", "Ice Element", "Cyber Intelligence"],

    personality: { brave: true, leader: false, loyal: true },
  },
];
export default function App() {
  return <NinjaList ninjas={data} />;
}
