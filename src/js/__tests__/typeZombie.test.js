import Zombie from '../typeZombie';

test('создание класса наследника Zombie', () => {
  const zombie = new Zombie('Leo');
  const expected = {
    name: 'Leo',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(zombie).toEqual(expected);
});
