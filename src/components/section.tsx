import Header from "./header"
import TaskInput from "./input"
import TasksList from "./tasks-list"
import Footer from "./footer"

export default function Section() {

    return (
        <div className="relative h-full w-[90%] md:w-[55%]">
            <Header></Header>
            <TaskInput></TaskInput>
            <TasksList></TasksList>
            <Footer></Footer>
        </div>
    )
}
