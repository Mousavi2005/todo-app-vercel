import { useMutation, useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api'
import Checked from "../assets/check.svg"
import Croos from "../assets/cross.svg"
import { useSelector } from 'react-redux'
import type { RootState } from '../store/store'

export default function TasksList() {
    const allTasks = useQuery(api.tasksFunction.getAllTasks)
    const activeTasks = useQuery(api.tasksFunction.getActiveTasks)
    const completedTasks = useQuery(api.tasksFunction.getCompletedTasks)
    const toggleCompleteTask = useMutation(api.tasksFunction.toggleCompleteTask)
    const deleteTask = useMutation(api.tasksFunction.deleteTask)
    const clearCompleted = useMutation(api.tasksFunction.clearCompletedTasks)
    const leftItems = useQuery(api.tasksFunction.getActiveTasks)?.length


    const activeSection = useSelector((state: RootState) => state.activeSection.activeSection)
    const isDark = useSelector((state: RootState) => state.darkMode.isDark)

    console.log('activeSection: ' + activeSection);

    return (
        <>
            <div className={`${isDark ? "bg-[hsl(235,24%,19%)]" : "bg-[hsl(0,0%,98%)]"} w-full max-h-[288px] md:max-h-[384px] overflow-y-auto rounded-t-md overflow-hidden`}>

                {activeSection === 'All' ? allTasks?.map((t) => {
                    return (
                        <div key={t._id} className='group w-full h-12 flex items-center border-b-[1px] border-gray-600'>
                            <div className='w-[8%] min-w-12 h-full flex items-center justify-center'>
                                <button
                                    onClick={() => toggleCompleteTask({ taskId: t._id })}
                                    className={`
                                w-5 h-5 flex items-center justify-center rounded-full
                                ${t.isCompleted
                                            ? "bg-gradient-to-b from-[hsl(192,100%,67%)] to-[hsl(280,87%,65%)] border-none"
                                            : isDark
                                                ? "border-gradient-dark border-[2px]"
                                                : "border-gradient-light border-[2px] border-gray-600"
                                        }
                                `}
                                >

                                    <img src={t.isCompleted ? Checked : undefined} className={`${t.isCompleted ? "" : "hidden"} w-3 h-3`} alt="" />
                                </button>
                            </div>
                            <span className={`
                                w-full overflow-x-hidden text-ellipsis pr-3
                                ${t.isCompleted
                                    ? "text-gray-400 line-through"
                                    : isDark
                                        ? "text-white"
                                        : "text-[hsl(235,19%,35%)]"
                                }
                            `}
                            >{t.taskName}
                            </span>
                            <button
                                onClick={() => deleteTask({ taskId: t._id })}
                                className='flex h-full w-[8%] items-center justify-center'>
                                <img src={Croos} className='hidden group-hover:block' alt="" />
                            </button>
                        </div>
                    )
                })
                    :
                    activeSection === 'Active' ? activeTasks?.map((t) => {
                        return (
                            <div key={t._id} className='group w-full h-12 flex items-center border-b-[1px] border-gray-600'>
                                <div className='w-[8%] min-w-12 h-full flex items-center justify-center'>
                                    <button
                                        onClick={() => toggleCompleteTask({ taskId: t._id })}
                                        className={`
                                    w-5 h-5 flex items-center justify-center rounded-full
                                    ${t.isCompleted
                                                ? "bg-gradient-to-b from-[hsl(192,100%,67%)] to-[hsl(280,87%,65%)] border-none"
                                                : isDark
                                                    ? "border-gradient-dark border-[2px]"
                                                    : "hover:border-gradient-light border-[2px] border-gray-600"
                                            }
                                    `}
                                    >
                                        <img src={t.isCompleted ? Checked : undefined} className={`${t.isCompleted ? "" : "hidden"} w-3 h-3`} alt="" />
                                    </button>
                                </div>
                                <span className={`
                                w-full overflow-x-hidden text-ellipsis pr-3
                                ${t.isCompleted
                                        ? "text-gray-400 line-through"
                                        : isDark
                                            ? "text-white"
                                            : "text-[hsl(235,19%,35%)]"
                                    }
                            `}
                                >{t.taskName}
                                </span>
                                <button
                                    onClick={() => deleteTask({ taskId: t._id })}
                                    className='flex h-full w-[8%] items-center justify-center'>
                                    <img src={Croos} className='hidden group-hover:block' alt="" />
                                </button>
                            </div>
                        )
                    })
                        :
                        completedTasks?.map((t) => {
                            return (
                                <div key={t._id} className='group w-full h-12 flex items-center border-b-[1px] border-gray-600'>
                                    <div className='w-[8%] min-w-12 h-full flex items-center justify-center'>
                                        <button
                                            onClick={() => toggleCompleteTask({ taskId: t._id })}
                                            className={`
                                        w-5 h-5 flex items-center justify-center rounded-full
                                        ${t.isCompleted
                                                    ? "bg-gradient-to-b from-[hsl(192,100%,67%)] to-[hsl(280,87%,65%)] border-none"
                                                    : isDark
                                                        ? "border-gradient-dark border-[2px]"
                                                        : "border-gradient-light border-[2px] border-gray-600"
                                                }
                                        `}
                                        >
                                            <img src={t.isCompleted ? Checked : undefined} className={`${t.isCompleted ? "" : "hidden"} w-3 h-3`} alt="" />
                                        </button>
                                    </div>
                                    <span className={`
                                w-full overflow-x-hidden text-ellipsis pr-3
                                ${t.isCompleted
                                            ? "text-gray-400 line-through"
                                            : isDark
                                                ? "text-white"
                                                : "text-[hsl(235,19%,35%)]"
                                        }
                            `}
                                    >{t.taskName}</span>
                                    <button
                                        onClick={() => deleteTask({ taskId: t._id })}
                                        className='flex h-full w-[8%] items-center justify-center'>
                                        <img src={Croos} className='hidden group-hover:block' alt="" />
                                    </button>
                                </div>
                            )
                        })
                }


            </div>

            <div className={`${isDark ? "bg-[hsl(235,24%,19%)]" : "bg-[hsl(0,0%,98%)]"} flex md:hidden w-full h-12 justify-between items-center px-3 rounded-b-md text-gray-400`}>
                <span>{leftItems} items left</span>
                <button
                    onClick={() => clearCompleted()}
                    className='hover:text-gray-800'>Clear Completed</button>
            </div>

        </>
    )
}
