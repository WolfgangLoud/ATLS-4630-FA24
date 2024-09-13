//objects
const rooms=[
    {
        name: '104',
        capacity: 30,
        num_whiteboards: 3,
    },
    {
        name: 'BTU',
        capacity: 30,
        num_whiteboards: 2,
    }
    
];

function printRoomInfo(room){
    console.log(`Hello, I am room "${room.name}"! I can hold ${room.capacity} people and I have ${room.num_whiteboards} whiteboards.`)
}

rooms.forEach(printRoomInfo);

//creating a class

class Room {
    constructor(roomName,roomCapacity,roomNumWhiteboars){
        this.name=roomName;
        this.capacity=roomCapacity;
        this.num_whiteboards=roomNumWhiteboars;

    }

    printRoomInfo(){
        console.log(`Hello, I am room "${this.name}"! I can hold ${this.capacity} people and I have ${this.num_whiteboards} whiteboards.`)
    }

    
}

const classrooms = [
    new Room('104',30,3),
    new Room('BTU,30,2'),
];

classrooms.forEach(room=>room.printRoomInfo());
