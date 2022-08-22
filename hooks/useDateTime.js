const options = { year: 'numeric', month: 'long', day: 'numeric' };

const useDateTime = (time) => {
    const date = new Date(time)
    return date.toLocaleDateString('es-ES',options)
}

export default useDateTime