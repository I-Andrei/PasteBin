import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';

function ListDocs(props) {
    const [list, setList] = useState([])
    const [data, setData] = useState([])
    
    useEffect(() => {
        const getDocuments = async () => {
            const dbGetRef = collection(props.db, "users");
            const snapshot = await getDocs(dbGetRef);
            snapshot.forEach(doc => {
                setList(list => [list, <br/>, doc.id])
                console.log(doc.id)
                setData(data => [data, <br/>, doc.data().input_word])
            });
        } 
        getDocuments();
    }, []);

    return (
        <div>
            <div>{list}</div>
            <div>{data.map((data, index) => <li key={index}>{data}</li>)}</div>
        </div>
    )
}

export default ListDocs;