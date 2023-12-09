import {createContext} from "react";

import {createContext, useState} from "react";

const chapters_default = [
    {
        id:"day-1",
        name:"ორშაბათი",

    }
]

const users = [
    {id:"user-1", name:"ilona"},
    {id:"user-2", name:"danny"}
]
const grades = [
    {id:"grade-1",userId:"user-1",chapterId:"day-1",grade:40}
]


export const GlobalContext = createContext({});

export function GlobalProvider({children}) {
    const [chapters,setChapters]=useState(chapters_default);
    const [users,setUsers]=useState([])
const [grades,setGrades]=useState([]);


    return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
}