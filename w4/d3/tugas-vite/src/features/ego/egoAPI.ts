// egoAPI.ts
export interface EgoInfo {
  name: string
}

export interface CharacterEgo {
  character: {
    option1: string
    option2: string | null
  }
  egos: EgoInfo[]
}

// helper untuk normalisasi huruf khusus
function normalizeName(name: string): string {
  return name
    .normalize("NFD") // pisahkan aksen dari huruf
    .replace(/[\u0300-\u036f]/g, "") // hilangkan tanda aksen
}

export const egoData: CharacterEgo[] = [
  {
    character: { option1: "Gregor", option2: null },
    egos: [
      { name: "Bygone Days" },
      { name: "Christmas Nightmare" },
      { name: "Garden of Thorns" },
      { name: "Suddenly, One Day" },
      { name: "Legerdemain" },
      { name: "Lantern" },
      { name: "AEDD" },
      { name: "Solemn Lament" },
      { name: "Unbrilliant Glory" },
    ],
  },
  {
    character: { option1: "Yi Sang", option2: null },
    egos: [
      { name: "Crow's Eye View" },
      { name: "Bygone Days" },
      { name: "4th Match Flame" },
      { name: "Wishing Cairn" },
      { name: "Dimension Shredder" },
      { name: "Fell Bullet" },
      { name: "Sunshower" },
    ],
  },
  {
    character: { option1: "Sinclair", option2: null },
    egos: [
      { name: "Branch of Knowledge" },
      { name: "Cavernous Wailing" },
      { name: "Impending Day" },
      { name: "Lifetime Stew" },
      { name: "Hex Nail" },
      { name: "Lantern" },
      { name: "9:2" },
      { name: "Tears of the Tarnished Blood [汚血泣淚]" },
    ],
  },
  {
    character: { option1: "Faust", option2: null },
    egos: [
      { name: "Representation Emitter" },
      { name: "Hex Nail" },
      { name: "9:2" },
      { name: "Lasso" },
      { name: "Fluid Sac" },
      { name: "Telepole" },
      { name: "Thoracalgia" },
      { name: "Command : Meltdown" },
      { name: "Everlasting" },
    ],
  },
  {
    character: { option1: "Don Quixote", option2: null },
    egos: [
      { name: "La Sangre de Sancho" },
      { name: "Lifetime Stew" },
      { name: "Wishing Cairn" },
      { name: "Electric Screaming" },
      { name: "Fluid Sac" },
      { name: "Telepole" },
      { name: "Red Sheet" },
      { name: "Yearning-Mircalla" },
      { name: "In the Name of Love and Hate" },
    ],
  },
  {
    character: { option1: "Ryōshū", option2: normalizeName("Ryōshū") },
    egos: [
      { name: "Forest for the Flames" },
      { name: "Soda" },
      { name: "Red Eyes" },
      { name: "Blind Obsession" },
      { name: "4th Match Flame" },
      { name: "Red Eyes (Open)" },
      { name: "Thoracalgia" },
      { name: "Contempt, Awe" },
    ],
  },
  {
    character: { option1: "Meursault", option2: null },
    egos: [
      { name: "Chains of Others" },
      { name: "Screwloose Wallop" },
      { name: "Regret" },
      { name: "Electric Screaming" },
      { name: "Pursuance" },
      { name: "Capote" },
      { name: "Yearning-Mircalla" },
      { name: "Crushbound Past" },
    ],
  },
  {
    character: { option1: "Hong Lu", option2: null },
    egos: [
      { name: "Land of Illusion" },
      { name: "Roseate Desire" },
      { name: "Soda" },
      { name: "Cavernous Wailing" },
      { name: "Lasso" },
      { name: "Dimension Shredder" },
      { name: "Effervescent Corrosion" },
      { name: "To Remain Oneself [宁作吾]" },
      { name: "Tears of the Tarnished Blood [汚血泣淚]" },
    ],
  },
  {
    character: { option1: "Heathcliff", option2: null },
    egos: [
      { name: "Bodysack" },
      { name: "Holiday" },
      { name: "AEDD" },
      { name: "Fell Bullet" },
      { name: "Telepole" },
      { name: "Ya Śūnyatā Tad Rūpam" },
      { name: "Asymmetrical Inertia" },
      { name: "Binds" },
    ],
  },
  {
    character: { option1: "Ishmael", option2: null },
    egos: [
      { name: "Snagharpoon" },
      { name: "Hundred-Footed Death Maggot [蝍蛆殺]" },
      { name: "Roseate Desire" },
      { name: "Capote" },
      { name: "Bygone Days" },
      { name: "Ardor Blossom Star" },
      { name: "Wingbeat" },
      { name: "Christmas Nightmare" },
      { name: "Tidal Elegy" },
      { name: "Blind Obsession" },
    ],
  },
  {
    character: { option1: "Rodion", option2: null },
    egos: [
      { name: "What is Cast" },
      { name: "Rime Shank" },
      { name: "Effervescent Corrosion" },
      { name: "4th Match Flame" },
      { name: "Pursuance" },
      { name: "Hex Nail" },
      { name: "Sanguine Desire" },
      { name: "Indicant's Trial" },
    ],
  },
  {
    character: { option1: "Outis", option2: null },
    egos: [
      { name: "To Páthos Máthos" },
      { name: "Ya Śūnyatā Tad Rūpam" },
      { name: "Sunshower" },
      { name: "Ebony Stem" },
      { name: "Holiday" },
      { name: "Dimension Shredder" },
      { name: "Magic Bullet" },
      { name: "Binds" },
    ],
  },
]
