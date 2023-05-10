export default class Character {
  // class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('имя должно содержать от 2 до 10 сиволов');
    }

    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (types.includes(type) === false) {
      throw new Error('тип не установлен');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}
