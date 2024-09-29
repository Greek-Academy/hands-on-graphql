type RollDiceArgs = {
  numDice: number;
  numSides: number;
};

export function rollDice({ numDice, numSides }: RollDiceArgs) {
  const output = [];
  for (let i = 0; i < numDice; i++) {
    output.push(1 + Math.floor(Math.random() * (numSides || 6)));
  }
  return output;
}
