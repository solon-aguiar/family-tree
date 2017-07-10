import {computed, observable} from "mobx";

class PersonStore {
  @observable people = {};
  @observable selectedPerson;

  constructor(peopleArray) {
    peopleArray.forEach((element) => this.people[element.name] = element);
    this.selectedPerson = Object.values(this.people).find((elem) => elem.selected === true);
  }

  @computed get partner() {
    return this.people[this.selectedPerson.partner.name];
  }

  selectPerson(name) {
    this.selectedPerson.selected = false;
    this.people[name].selected = true;
    this.selectedPerson = this.people[name];
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
    selected: true
  },
  {
    avatar: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/13442323_10153953988603591_2416810001508685137_n.jpg?oh=ee24d5b1fb0e27cb9d4c41cb6bd7e013&oe=5A030810",
    short_name: "Kay",
    name: "Kay Nelson",
    partner: {
      name: "Solon Aguiar"
    }
  }
];

const store = new PersonStore(defaultPeople);
export default store;