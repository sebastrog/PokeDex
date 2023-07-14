/* export type Ability = {
  ability: { name: string };
};

export type Stat = {
  base_stat: number,
  stat: {
    name: 'hp' | 'attack' | 'defense' | 'speed'
  }
}

export type Language = {
  flavor_text: string
  language: {
    name: string
  }
}

export type DataTypes = {
  sprites: { front_default: string };
  abilities: Ability[];
  stats: Stat[]
}

export type DataSpecieTypes = {
  flavor_text_entries: Language[];
  color: { name: string };

  sprites: { front_default: string };
  abilities: Ability[];
  stats: Stat[]
}

export type PokeCard = {
  DataSpecieTypes: DataSpecieTypes
  DataTypes: DataTypes
}

 */

export type Stat = {
  base_stat: number,
  stat: {
    name: 'hp' | 'attack' | 'defense' | 'speed'
  }
}

export type Languages = {
  flavor_text: string
  language: {
    name: string
  }
}

export type Sprites = {
  front_default: string
}

export type Ability = {
  ability: { name: string };
};

export type Pokemon = {
  name: string,
  id: number,
  abilities: []
  stats: []
  sprites: string
  color: string
  language?: string | null
}
