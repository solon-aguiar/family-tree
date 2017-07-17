import {computed, observable} from "mobx";

class PersonStore {
  @observable people = {};
  @observable selectedPerson;

  constructor(peopleArray) {
    peopleArray.forEach((element) => this.people[element.name] = element);
    this.selectedPerson = Object.values(this.people).find((elem) => elem.selected === true);
  }

  @computed get partner() {
    if (!this.selectedPerson.partner) {
      return undefined;
    }
    return this.people[this.selectedPerson.partner.name];
  }

  @computed get offspring() {
    if (!this.selectedPerson.offspring) {
      return undefined;
    }
    return this.selectedPerson.offspring.map((child) => this.people[child]);
  }

  selectPerson(name) {
    this.selectedPerson.selected = false;
    this.people[name].selected = true;
    this.selectedPerson = this.people[name];
  }

  updatePeople(newPeople) {
    newPeople.forEach((element) => this.people[element.name] = element);
    this.selectedPerson = Object.values(this.people).find((elem) => elem.selected === true);
  }
};

const defaultPeople = [
  {
    name: "Solon Aguiar",
    short_name: "Solon",
    avatar: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/12079203_944644578942041_146555731947079949_n.jpg?oh=e89fe09652d47b99800dae90c84831d7&oe=59C345D5",
    partner: {
      name: "Kay Nelson",
    },
    offspring: [],
    selected: true
  },
  {
    avatar: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/13442323_10153953988603591_2416810001508685137_n.jpg?oh=ee24d5b1fb0e27cb9d4c41cb6bd7e013&oe=5A030810",
    short_name: "Kay",
    name: "Kay Nelson",
    partner: {
      name: "Solon Aguiar"
    },
  },
  {
      avatar: "https://pbs.twimg.com/profile_images/863026079468056576/FPIP0JH3.jpg",
      short_name: "Corinthians",
      name: "Corinthians Paulista",
  }
];

const store = new PersonStore(defaultPeople);
export default store;