
import useLocalStorage from './useLocalStorage'

const useDarkMode = () => {
    const [values, setValues] = useLocalStorage('dark')
    return([values,setValues])
}
export default useDarkMode