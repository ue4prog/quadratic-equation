module.exports = function solveEquation(equation) {
  equation = equation.split(' ');
  equation[3] += equation[4];
  equation[4] = 'Fuck, GG';
  equation[7] += equation[8];
  equation[8] = 'Fuck, GG';
  equation = equation.map(el => parseInt(el)).filter(el => !isNaN(el))
  const desc = equation[1] **2 - 4 * equation[0] * equation[2];
  const result = [
    Math.round((-equation[1] + Math.sqrt(desc) ) / (2 * equation[0])),
    Math.round((-equation[1] - Math.sqrt(desc) ) / (2 * equation[0]))
  ];
  return result.sort((a ,b) => a - b);
}