import {computed, observable} from "mobx";

function randomPerson(people) {
    const keys = Object.keys(people);
    //return people[keys[Math.floor(Math.random() * keys.length)]];
    return people['Solon Aguiar'];
}

class PersonStore {
  @observable people = {};
  @observable selectedPerson;

  updatePeople(peopleArray) {
    peopleArray.forEach((element) => this.people[element.name] = element);
    this.selectedPerson = randomPerson(this.people);
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

   @computed get parents() {
      console.log("ANTES", this.selectedPerson);
      if (!this.selectedPerson || !this.selectedPerson.parents) {
        return undefined;
      }
      console.log("PARENTS", this.selectedPerson.parents.map((parent) => this.people[parent.name]));
      return this.selectedPerson.parents.map((parent) => this.people[parent.name]);
    }

  selectPerson(name) {
    this.selectedPerson.selected = false;
    this.people[name].selected = true;
    this.selectedPerson = this.people[name];
  }
};

const store = new PersonStore();
export default store;