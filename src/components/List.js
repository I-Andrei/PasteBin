import React, { useEffect, useState } from 'react';
import { collection, getDocs, getDoc, doc } from 'firebase/firestore/lite';
import { Link, useParams } from "react-router-dom";
import { db } from "../firebase";

function ListDocs() {
    const [data, setData] = useState([])
    const [content, setContent] = useState([])
    let {idList} = useParams();
    useEffect(() => {
        const getDocuments = async () => {
            const dbGetRef = collection(db, "users");
            const snapshot = await getDocs(dbGetRef);
            snapshot.forEach(doc => {
                setData(data => [...data, {content: doc.data().input_word, id: doc.id}])
            });
        } 
        getDocuments();
    }, []);
    
    function docContent(){
        console.log(idList)
        if(idList > ''){
            const singleDocRef = doc(db, 'users', idList);
            getDoc(singleDocRef)
                .then((doc) => {
                    setContent(doc.data().input_word)
                })
        return content;
        }
        else
            return 'No document selected!'
    }

    return (
            <div>{data.map((item) => 
                <div><Link to={'/Doclist/' + item.id}>{item.content}</Link></div>)}
                <div>Document text: {docContent()}</div>
            </div>
    )
}

export default ListDocs;