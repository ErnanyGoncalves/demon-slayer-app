import axios from "axios";
import { useCallback, useState } from "react";

export const useFetchCharacters = (currentPage: number | string) => {
    const [dsList, setDSList] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const request = useCallback(() => {
        const url = `http://localhost:3000/demon-slayers?_page=${currentPage}&_limit=6`;
        setLoading(true);
        axios.get(url)
            .then(({ data }: any) => {
                setDSList(data);
                setLoading(false);
            })
            .catch((err: any) => {
                setError(err);
                setLoading(false);
            });
    }, [currentPage]);

    return { dsList, error, loading, request }
}