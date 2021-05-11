import { getAverage } from "../src/model/assignments-data";
import Assignment from "../src/model/Assignment";

describe("test average", () => {

    test("test regular array", () => {
        const allAssignments:Assignment[] = [
            {name:"Walrus Worksheet", score:9, totalPossible:10, complete:true},
            {name:"Jellyfish Project", score:15, totalPossible:15, complete:true},
            {name:"Dolphin Quiz", score:8, totalPossible:10, complete:true},
            {name:"Oceans Unit Test", score:0, totalPossible:25, complete:false}
        ];
        let result:number = getAverage(allAssignments);

        expect(result).toBeCloseTo(91.4, 1);

    });

    test("test another array", () => {
        const allAssignments:Assignment[] = [
            {name:"Walrus Worksheet", score:19, totalPossible:20, complete:true},
            {name:"Jellyfish Project", score:0, totalPossible:15, complete:false},
            {name:"Dolphin Quiz", score:8, totalPossible:10, complete:true},
            {name:"Oceans Unit Test", score:0, totalPossible:25, complete:false}
        ];
        let result:number = getAverage(allAssignments);

        expect(result).toBeCloseTo(90, 1);

    });

    test("test empty array", () => {
        const allAssignments:Assignment[] = [];
        let result:number = getAverage(allAssignments);

        expect(result).toBeCloseTo(0);

    });


});