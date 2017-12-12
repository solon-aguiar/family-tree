import {computed, observable} from "mobx";

function randomPerson(people) {
    const keys = Object.keys(people);
    console.log("keys", keys);
    const k = keys[Math.floor(Math.random() * keys.length)];
    console.log("returning k randomly", people[k]);
    return people[k];
}

class PersonStore {
  @observable people = {};
  @observable selectedPerson;

  init(peopleArray) {
    peopleArray.forEach((element) => this.people[element.name] = element);
    this.selectedPerson = Object.values(this.people).find((elem) => elem.selected === true);
  }

  @computed get partner() {
    if (!this.selectedPerson || !this.selectedPerson.partner) {
      return undefined;
    }
    return this.people[this.selectedPerson.partner.name];
  }

  @computed get offspring() {
    if (!this.selectedPerson || !this.selectedPerson.offspring) {
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
    this.selectedPerson = randomPerson(this.people);
    console.log("UPDATED PEOPLE", this.selectedPerson);
    console.log("UPDATED PEOPLE 2", this.people);
  }
};

const store = new PersonStore();
export default store;