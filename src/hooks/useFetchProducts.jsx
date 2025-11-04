function useFetch(endpoint) {
       const [products, setProducts] = useState([])
       const [error, setError] = useState()
       const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        async function getProducts() {
            setIsLoading(true)
            try {
                const response = await fetch(`https://fakestoreapi.com/${endpoint}`)
                if (!response.ok) {
                    throw new Error('Failed to fetch products')
                }
                const data = await response.json()
                setProducts(data)

            } catch (error) {
                setError(error)
            } finally {
                setIsLoading(false)
            }
        }
        getProducts()

    }, [])
    return {products, error, isLoading}
}

export default useFetch