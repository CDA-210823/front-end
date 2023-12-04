import React from 'react'
import {useSelector} from 'react-redux';

const Search = () => {
    const currentUser = useSelector(state => state.user)
        console.log(currentUser)
    return (
        <>
        </>
    )
}
export default Search
