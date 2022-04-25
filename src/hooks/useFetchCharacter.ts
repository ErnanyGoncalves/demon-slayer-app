import axios from "axios";
import { useCallback, useState } from "react";
import { Info } from "../types";

export const useFetchCharacter = (id: string | undefined) => {
    const [dsInfo, setDSInfo] = useState<Info>({
        "id": 0,
        "name": "",
        "age": 0,
        "gender": "",
        "photo": "",
        "power": "",
        "emoji": ""
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const request = useCallback(() => {
        const url = `http://localhost:3000/demon-slayers/${id}`;
        setLoading(true);
        axios.get(url)
            .then(({ data }: any) => {
                setDSInfo(data);
                setLoading(false);
            })
            .catch((err: any) => {
                setError(err);
                setLoading(false);
            });
    }, [id]);

    return { dsInfo, error, loading, request }
}