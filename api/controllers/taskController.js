import { taskService } from "../services"

const getTask = async (req, res) =>{
    const users = await taskService.getAllTask
}


export default{
    getTask
};