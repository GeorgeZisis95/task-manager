import { v4 as uuidv4 } from 'uuid';

function Card(name, age, project) {
    this.name = name
    this.age = age
    this.project = project
    this.id = uuidv4()
}

export { Card }