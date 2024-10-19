import axios from 'axios';
import { useState, useEffect } from 'react';

const useEffect = ({ url, options = {} }) => {
    const [data, setDate] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {

        const fetchApi = async () => {
            try {
                setIsLoading(true)
                const req = await axios(url, options)
                setDate(req.data)
            } catch (e) {
                setError(e)
            } finally {
                setIsLoading(false)
            }
        }
        fetchApi()

    }, [url, options])

    return { data, isLoading, error }
}

export default useEffect;

