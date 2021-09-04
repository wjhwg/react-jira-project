import React from 'react'
import { List } from "./list"
import { SearchPanel } from "./search-panel"
import { useEffect, useState } from "react"
import { cleanObject } from '../../utils/index.js';
import * as qs from "qs";
const apiUrl = process.env.REACT_APP_API_URL;
export const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    const [users, setUsers] = useState([])
    const [list, setList] = useState([])
    useEffect(() =>{
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async response => {
            if(response.ok){
                setList(await response.json())
            }
        })
    }, [param])
    useEffect(() =>{
        fetch(`${apiUrl}/users`).then(async response => {
            if(response.ok){
                setUsers(await response.json())
            }
        })
    }, [])


    return <div>
        <SearchPanel users={users} param={param} setParam={setParam}></SearchPanel>
        <List list={list} users={users}></List>
    </div>
}