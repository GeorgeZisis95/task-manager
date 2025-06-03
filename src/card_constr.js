import { v4 as uuidv4 } from 'uuid';

function Card(name, age, job) {
    this.name = name
    this.age = age
    this.job = job
    this.id = uuidv4()
}

export { Card }