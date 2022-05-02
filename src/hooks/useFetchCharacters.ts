import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchCharacters = (currentPage: number | string, queryFilter: string) => {
    const [dsList, setDSList] = useState(null);
    const [totalPages, setTotalPages] = useState(0);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const url = `http://localhost:3000/demon-slayers?_page=${currentPage}&_limit=6${queryFilter}`;
        
        setLoading(true);
        axios.get(url)
            .then(({ data, headers }: any) => {
                setTotalPages(Math.ceil(headers["x-total-count"] / 6));
                setDSList(data);
                setLoading(false);
            })
            .catch((err: any) => {
                setError(err);
                setLoading(false);
            });
    }, [currentPage, queryFilter]);

    return { dsList, error, loading, totalPages }
}