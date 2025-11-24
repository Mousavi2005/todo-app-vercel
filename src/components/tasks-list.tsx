import { useMutation, useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api'
import Checked from "../assets/check.svg"
import { useSelector } from 'react-redux'
import type { RootState } from '../store/store'

export default function TasksList() {
    const allTasks = useQuery(api.tasksFunction.getAllTasks)
    const activeTasks = useQuery(api.tasksFunction.getActiveTasks)
    const completedTasks = useQuery(api.tasksFunction.getCompletedTasks)
    const toggleCompleteTask = useMutation(api.tasksFunction.toggleCompleteTask)

    const activeSection = useSelector((state: RootState) => state.activeSection.activeSection)
    const isDark = useSelector((state: RootState) => state.darkMode.isDark)

    console.log('activeSection: ' + activeSection);

    return (
        <div className={`${isDark? "bg-[hsl(235,24%,19%)]" : "bg-[hsl(0,0%,98%)]"} w-full max-h-[384px] overflow-y-auto bg-[hsl(235,24%,19%)] rounded-t-md overflow-hidden`}>

            {activeSection === 'All' ? allTasks?.map((t) => {
                return (
                    <div key={t._id} className='w-full h-12 flex items-center border-b-[1px] border-gray-600'>
                        <div className='w-[8%] min-w-12 h-full flex items-center justify-center'>
                            <button
                                onClick={() => toggleCompleteTask({ taskId: t._id })}
                                className={`${t.isCompleted ? "bg-gradient-to-b from-[hsl(192,100%,67%)] to-[hsl(280,87%,65%)]" : ""} w-5 h-5 flex items-center justify-center rounded-full border border-gray-600`}>
                                <img src={t.isCompleted ? Checked : undefined} className={`${t.isCompleted ? "" : "hidden"} w-3 h-3`} alt="" />
                            </button>
                        </div>
                        <span className={`
                        
                            ${t.isCompleted ? "text-gray-400 line-through" : "text-white"} w-full overflow-x-hidden text-ellipsis pr-3`}>{t.taskName}</span>
                    </div>
                )
            })
                :
                activeSection === 'Active' ? activeTasks?.map((t) => {
                    return (
                        <div key={t._id} className='w-full h-12 flex items-center border-b-[1px] border-gray-600'>
                            <div className='w-[8%] min-w-12 h-full flex items-center justify-center'>
                                <button
                                    onClick={() => toggleCompleteTask({ taskId: t._id })}
                                    className='w-5 h-5 flex items-center justify-center rounded-full border border-gray-600'>
                                    <img src={t.isCompleted ? Checked : undefined} className={`${t.isCompleted ? "" : "hidden"} w-3 h-3`} alt="" />
                                </button>
                            </div>
                            <span className={`${t.isCompleted ? "text-gray-400 line-through" : "text-white"} w-full overflow-x-hidden text-ellipsis pr-3`}>{t.taskName}</span>
                        </div>
                    )
                })
                    :
                    completedTasks?.map((t) => {
                        return (
                            <div key={t._id} className='w-full h-12 flex items-center border-b-[1px] border-gray-600'>
                                <div className='w-[8%] min-w-12 h-full flex items-center justify-center'>
                                    <button
                                        onClick={() => toggleCompleteTask({ taskId: t._id })}
                                        className={`${t.isCompleted ? "bg-gradient-to-b from-[hsl(192,100%,67%)] to-[hsl(280,87%,65%)]" : ""} w-5 h-5 flex items-center justify-center rounded-full border border-gray-600`}>
                                        <img src={t.isCompleted ? Checked : undefined} className={`${t.isCompleted ? "" : "hidden"} w-3 h-3`} alt="" />
                                    </button>
                                </div>
                                <span className={`${t.isCompleted ? "text-gray-400 line-through" : "text-white"} w-full overflow-x-hidden text-ellipsis pr-3`}>{t.taskName}</span>
                            </div>
                        )
                    })
            }

        </div>
    )
}
