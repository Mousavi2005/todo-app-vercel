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
        <footer className={`${isDark? "bg-[hsl(235,24%,19%)]" : "bg-[hsl(0,0%,98%)]"} flex w-full h-12 px-3 rounded-b-md text-gray-400`}>

            <div className='flex flex-1 items-center justify-start cursor-default'>
                {leftItems} items left
            </div>

            <div className='flex flex-1 gap-6 items-center justify-between'>
                <button
                    onClick={() => dispatch(setActiveSection('All'))}
                    className={`${activeSection === 'All' ? "text-[hsl(220,98%,61%)]" : ""}`}
                >All</button>
                <button
                    onClick={() => dispatch(setActiveSection('Active'))}
                    className={`${activeSection === 'Active' ? "text-[hsl(220,98%,61%)]" : ""}`}
                >Active</button>
                <button
                    onClick={() => dispatch(setActiveSection('Completed'))}
                    className={`${activeSection === 'Completed' ? "text-[hsl(220,98%,61%)]" : ""}`}
                >Completed</button>
            </div>

            <div className='flex flex-1 items-center justify-end'>
                <button
                    onClick={() => clearCompleted()}
                >clear completed
                </button>
            </div>
        </footer>
    )
}
