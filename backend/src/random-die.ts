type RollArgs = { numRolls: number };

export class RandomDie {
  constructor(private numSides: number) {}

  rollOnce() {
    return 1 + Math.floor(Math.random() * this.numSides);
  }

  roll({ numRolls }: RollArgs) {
    var output = [];
    for (let i = 0; i < numRolls; i++) {
      output.push(this.rollOnce());
    }
    return output;
  }
}

type GetDieArgs = { numSides: number };

export function getDie({ numSides }: GetDieArgs) {
  return new RandomDie(numSides || 6);
}
