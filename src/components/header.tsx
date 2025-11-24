import moonIcon from '../assets/moon.svg'
import sunIcon from '../assets/sun.svg'
import { toggleDarkMode } from '../slices/darkMode';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store/store';

export default function Header() {
    const dispatch = useDispatch()
    const isDark = useSelector((state: RootState) => state.darkMode.isDark)

    function toggleMode() {
        dispatch(toggleDarkMode())
    }

    return (
        <div className="w-full h-[20%] flex items-center justify-between ">
            <span className="text-white text-3xl font-semibold">T O D O</span>
            <button className='w-7 h-7' onClick={toggleMode}>
                <img className='w-7 h-7' src={isDark ? sunIcon : moonIcon} alt="" />
            </button>
        </div>
    )
}
