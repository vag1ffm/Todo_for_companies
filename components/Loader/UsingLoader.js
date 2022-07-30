import React, {useState} from 'react';
import Loader from "./loader";

const UsingLoader = () => {
    const [loading, setLoading] = useState(false)
    return [
        loading ? <Loader/> : null,
        () => setLoading(true),
        ()=> setLoading(false)
    ]
};

export default UsingLoader;