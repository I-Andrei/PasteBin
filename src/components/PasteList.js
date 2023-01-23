import React, { useEffect, useState } from 'react';
import { collection, getDocs, getDoc, doc } from 'firebase/firestore/lite';
import { Link, useParams } from "react-router-dom";
import { db } from "../firebase";

function ListDocs() {
    const [data, setData] = useState([])
    const [content, setContent] = useState([])
    const [saveTitle, setSaveTitle] = useState([])
    let {ids} = useParams();
    useEffect(() => {
        const getDocuments = async () => {
            const dbGetRef = collection(db, "users");
            const snapshot = await getDocs(dbGetRef);
            snapshot.forEach(doc => {
                setData(data => [...data, {content: doc.data().description.input_word, id: doc.id, title: doc.data().title.inputTitle}])
            });
        }
        getDocuments();
    }, []);

    function docContent(){
        if(ids > ''){
            const singleDocRef = doc(db, 'users', ids);
            getDoc(singleDocRef)
                .then((doc) => {
                    setContent(doc.data().description.input_word)
                    setSaveTitle(doc.data().title.inputTitle)
                })
        return (
            "Title: " + saveTitle + "-> Text: " + content
        );
        } else
            return 'No document selected!'
    }

    return (
            <div>{data.map((item) => 
                <div><Link to={'/paste/' + item.id}>{item.title}</Link></div>)}
                <div>Document {docContent()}</div>
            </div>
    )
}

export default ListDocs;