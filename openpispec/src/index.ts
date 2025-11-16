//Classes in typescript
import {once, measure} from "helpful-decorators"

class DateClass{
    private Zone:string;
    constructor(Zone:string){
        this.Zone = Zone;
    }
    getZone(){
        return this.Zone;
    }

    getMonth(){
        var d = new Date();
        return d.getMonth()
    }
@measure
    getTime(){
        var d= new Date();
console.log("hi")
    }

    expensiveOperation(){
      
        const startTime = new Date().getTime();
        let ctr = 0;
        for(let i=0;i<100000000;i++){
            ctr++;
        }
        const endTime = new Date().getTime();


        return (endTime - startTime);
    }
}

const NewObj = new DateClass("IND");

NewObj.getTime();
NewObj.getTime()
NewObj.getTime()

NewObj.getTime()
NewObj.getTime()
NewObj.getTime()


