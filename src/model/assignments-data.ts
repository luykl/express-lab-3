import Assignment from "./Assignment";

export let allAssignments:Assignment[] = [];
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

export function deleteAssignment(id: number): boolean {
    const index = allAssignments.findIndex(x => x.id === id);
    if (index == -1) {
      return false;
    } else {
      allAssignments.splice(index, 1);
      return true;
    }
  }

  export function getAverage(array:Assignment[]):number {
      if (array.length === 0) {
          return 0;
      } else {
        let yourScore:number = 0;
        let totalScore:number = 0;
        for (let assignment of array) {
            if (assignment.complete) {
                yourScore += Number(assignment.score)
                totalScore += Number(assignment.totalPossible)
                
            }
        }
        return yourScore / totalScore * 100;
      }
  }

  export function displayAverage():string {
      return (getAverage(allAssignments)).toFixed(1);
  }

