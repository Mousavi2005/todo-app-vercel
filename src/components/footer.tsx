import { useDispatch, useSelector } from 'react-redux'
import { setActiveSection } from "../slices/activeSection"
import { useMutation, useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api'
import type { RootState } from '../store/store'

export default function Footer() {
    const dispatch = useDispatch()
    const clearCompleted = useMutation(api.tasksFunction.clearCompletedTasks)
    const leftItems = useQuery(api.tasksFunction.getActiveTasks)?.length

    const activeSection = useSelector((state: RootState) => state.activeSection.activeSection)
    const isDark = useSelector((state: RootState) => state.darkMode.isDark)

    return (
        <footer className={`${isDark? "bg-[hsl(235,24%,19%)]" : "bg-[hsl(0,0%,98%)]"} flex justify-center w-full h-12 px-3 mt-5 md:mt-0 rounded-md md:rounded-t-none text-gray-400`}>

            <div className='hidden md:flex flex-1 items-center justify-start cursor-default font-normal'>
                {leftItems} items left
            </div>

            <div className='w-[65%] flex md:flex-1 gap-6 items-center justify-between'>
                <button
                    onClick={() => dispatch(setActiveSection('All'))}
                    className={`
                        font-normal
                        ${activeSection === "All"
                            ? "text-[hsl(220,98%,61%)]"
                            : isDark
                            ? "hover:text-white"
                            : "hover:text-gray-800"
                        }
                        `}
                >All</button>
                <button
                    onClick={() => dispatch(setActiveSection('Active'))}
                    className={`
                        font-normal
                        ${activeSection === "Active"
                            ? "text-[hsl(220,98%,61%)]"
                            : isDark
                            ? "hover:text-white"
                            : "hover:text-gray-800"
                        }
                        `}
                >Active</button>
                <button
                    onClick={() => dispatch(setActiveSection('Completed'))}
                    className={`
                        font-normal
                        ${activeSection === "Completed"
                            ? "text-[hsl(220,98%,61%)]"
                            : isDark
                            ? "hover:text-white"
                            : "hover:text-gray-800"
                        }
                        `}
                >Completed</button>
            </div>

            <div className='hidden md:flex flex-1 items-center justify-end'>
                <button
                    onClick={() => clearCompleted()}
                    className={`${isDark ? "hover:text-white" : "hover:text-gray-800"} font-normal`}
                >clear completed
                </button>
            </div>
        </footer>
    )
}
