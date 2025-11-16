import Todo from "./todo.js"

export type TodosCreationParams = Pick<Todo,("title" | "description")>


export class TodoService{

    public get(todoId:string):Todo{
        return{
            title:"daljeet",
            description:"i will complete 0-100 then get a decent job and then prepare for open source i will complete 0-100 then get a decent job and then prepare for open sourcei will complete 0-100 then get a decent job and then prepare for open sourcei will complete 0-100 then get a decent job and then prepare for open sourcei will complete 0-100 then get a decent job and then prepare for open sourcei will complete 0-100 then get a decent job and then prepare for open sourcei will complete 0-100 then get a decent job and then prepare for open sourcei will complete 0-100 then get a decent job and then prepare for open sourcei will complete 0-100 then get a decent job and then prepare for open sourcei will complete 0-100 then get a decent job and then prepare for open sourcei will complete 0-100 then get a decent job and then prepare for open sourcei will complete 0-100 then get a decent job and then prepare for open sourcei will complete 0-100 then get a decent job and then prepare for open sourcei will complete 0-100 then get a decent job and then prepare for open sourcei will complete 0-100 then get a decent job and then prepare for open sourcei will complete 0-100 then get a decent job and then prepare for open source
            ",
            done:false,
            id:todoId
        }
    }


        public post(todoParams:TodosCreationParams):Todo{
        return{
            title:"daljeet",
            description:"i will complete 0-100 then get a decent job and then prepare for open source",
            done:false,
            id:"1"
        }
    }

}