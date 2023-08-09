import React, { useEffect, useState } from 'react';
import { Table } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Read() {
    const [APIData, setAPIData] = useState([]);
    const onDelete = (id) => {
        axios.delete(`https://64d0cfd3ff953154bb798186.mockapi.io/fakeData/${id}`)
            .then(() => {
                getData();
            })
    }
    const getData = () => {
        axios.get(`https://64d0cfd3ff953154bb798186.mockapi.io/fakeData`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }
    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
    }
        useEffect(() => {
            axios.get(`https://64d0cfd3ff953154bb798186.mockapi.io/fakeData`)
                .then((response) => {
                    setAPIData(response.data);
                })
        }, [])
    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nama Depan</Table.HeaderCell>
                        <Table.HeaderCell>Nama Belakang</Table.HeaderCell>
                        <Table.HeaderCell>Check</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                                <Link to='/update'>
                                    <Table.Cell>
                                        <Button onClick={() => setData(data)}>Update</Button>
                                    </Table.Cell>
                                </Link>
                                    <Table.Cell>
                                        <Button onClick={() => onDelete(data.id)}>Delete</Button>
                                    </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
            <Link to='/create'>
                <Table.Cell>
                    <Button className='add'>Add</Button>
                </Table.Cell>
            </Link>
        </div>
    )
}