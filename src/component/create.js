import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Create = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const postData = () => {
        axios.post(`https://64d0cfd3ff953154bb798186.mockapi.io/fakeData`, {
            firstName,
            lastName,
            checkbox
        })
    }
    return (
        <Form className='create-form'>
            <Form.Field>
                <label>Nama Depan</label>
                <input placeholder='Nama Depan' onChange={(e) => setFirstName(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Nama Belakang</label>
                <input placeholder='Nama Belakang' onChange={(e) => setLastName(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)} />
            </Form.Field>
            <Link to='/read'>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Link>
        </Form>
    )
}


export default Create;