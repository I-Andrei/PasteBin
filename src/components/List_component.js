import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';

function ListDocs(props) {
    const data = props.data

    return (
        <div>
            <div>{props.list}</div>
            <div>{data.map((data, index) => <li key={index}>{data}</li>)}</div>
        </div>
    )
}

export default ListDocs;