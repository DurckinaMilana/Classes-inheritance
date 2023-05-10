import Magician from '../typeMagician';

test('создание класса наследника Magician', () => {
  const swordsman = new Magician('Nick');
  const expected = {
    name: 'Nick',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(swordsman).toEqual(expected);
});
