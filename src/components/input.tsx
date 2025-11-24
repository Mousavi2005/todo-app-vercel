import { useState } from "react"
import { useMutation } from "convex/react"
import { api } from "../../convex/_generated/api"
import type { RootState } from "../store/store"
import { useSelector } from "react-redux"

export default function TaskInput() {
    const [taskName, setTaskName] = useState('')
    const isDark = useSelector((state: RootState) => state.darkMode.isDark)
    const createTask = useMutation(api.tasksFunction.createTask)

    function handleSubmit(e: any) {
        e.preventDefault()
        if (taskName === '') {
            return
        }

        createTask({taskName: taskName})
        setTaskName('')
    }
    return (
        <form
        onSubmit={handleSubmit}
        className={`${isDark? "bg-[hsl(235,24%,19%)]" : "bg-[hsl(0,0%,98%)]"} w-full h-12 mb-10 px-3 flex items-center rounded-md`}>
            <button className={`${isDark? "text-white" : "text-[hsl(235,19%,35%)]"} w-[8%] h-full`} type="submit">Create</button>
            <input className="w-full h-full ml-3 border-l-[1px] border-gray-600 bg-transparent px-5 focus:outline-none text-white" type="text" placeholder="Create a new todo..."
            value={taskName} onChange={(e) => {
                e.preventDefault()
                setTaskName(e.target.value)
            }}/>
        </form>
    )
}
