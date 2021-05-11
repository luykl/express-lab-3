import Assignment from "./Assignment";

let allAssignments:Assignment[] = [];
let nextId:number = 1;

export function createAssignment(assignment:Assignment):void {
    assignment.id = nextId++;
    allAssignments.push(assignment);
}

createAssignment({name:"Walrus Worksheet", score:9, totalPossible:10, complete:true});
createAssignment({name:"Jellyfish Project", score:15, totalPossible:15, complete:true});
createAssignment({name:"Dolphin Quiz", score:8, totalPossible:10, complete:true});
createAssignment({name:"Oceans Unit Test", score:0, totalPossible:25, complete:false});

export function readAllAssignments():Assignment[]{
    return allAssignments;
}

export function updateAssignment(assignment:Assignment):boolean {
    const index:number = allAssignments.findIndex(x => x.id === assignment.id);
    if (index === -1) {
        return false;
    } else {
        allAssignments[index] = assignment;
        return true;
    }
}

export function readAssignmentById(id:number): Assignment|undefined {
    return allAssignments.find(assignment => assignment.id ===id);
}

