import React from 'react'
import {useQuery, gql} from "@apollo/client";

const LIST_USERS = gql`
    query($getUsersPointsByCategoryId: Int!){
        getUsersPointsByCategory(id: $getUsersPointsByCategoryId) {
            name
            totalPoints
        }
    }`

type Props = {
    categoryId: number
}
export const ListUsers = ({categoryId}: Props) => {
    const {data, error, loading} = useQuery(LIST_USERS, {
        variables: {
            getUsersPointsByCategoryId: categoryId
        }
    })
    if (loading) return <p>loading</p>
    if (error) return <p>connection error</p>
    return (
        <div className={' h-auto sm:w-2/4 w-full px-4'}>
            <table>
                <thead>
                <tr className={"bg-green-600 text-gray-200 font-body uppercase text-sm"}>
                    <th className="w-1/2 py-3 px-6 text-left">User</th>
                    <th className="w-1/4 py-3 px-6 text-left">Total Points</th>
                </tr>
                </thead>
                <tbody className={'bg-white'}>
                {data.getUsersPointsByCategory.map((e: any) =>
                    (<tr className={'border-b border-gray-200'}>
                        <td className={'px-3 py-4 text-left font-body'}>{e.name}</td>
                        <td className={'px-3 py-4 font-body'}>{e.totalPoints}</td>
                    </tr>)
                )}

                </tbody>
            </table>
        </div>
    )
}
