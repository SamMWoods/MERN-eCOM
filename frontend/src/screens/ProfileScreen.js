import React, {useState, useEffect} from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails, updateUserProfile, } from '../actions/userAction'
import { USER_UPDATE_PROFILE_REST } from '../constants/userConstants'

 
const ProfileScreen = ({location, history}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)


    const dispatch = useDispatch()

    const userDetails = useSelector((state) => state.userDetails)
    const { loading, error, user } = userDetails

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
    const { success } = userUpdateProfile

    useEffect(() => {
        if(!userInfo){
            history.push('/login')
        } else {
            if(!user.name || success){
                dispatch({type: USER_UPDATE_PROFILE_REST})
                dispatch(getUserDetails('profile'))
            } else {
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [dispatch, history, userInfo, user, success]) 

    const submitHandler = (e) => {
        e.preventDefault()
        if(password !== confirmPassword){
            setMessage('Password do not match')
        } else{
            dispatch(updateUserProfile({id: user._id, name, email, password}))
        }
    }
 
    return (
        <Row>
        <Col md={3}>
        <h2>User Profile</h2>
        {error && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {success && <Message variant='success'>Profile Updated</Message>}
        {loading && <Loader/>}
        <Form onSubmit={submitHandler}>

            <Form.Group controlId='name'>Name
                <Form.Control 
                    type='name' 
                    placeholder='Enter name' 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                ></Form.Control>
            </Form.Group>

            <Form.Group controlId='email'>Email Address
                <Form.Control 
                    type='email' 
                    placeholder='Enter email' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
            </Form.Group>

            <Form.Group controlId='password'>Password
                <Form.Control 
                    type='password' 
                    placeholder='Enter password' 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
            </Form.Group>

            <Form.Group controlId='confirmPassword'>Confirm Password
                <Form.Control 
                    type='password' 
                    placeholder='Confirm Password' 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'>
                Update
            </Button>
        </Form>
        </Col>
        <Col md={9}>
            <h2>My Orders</h2>
        </Col>
        </Row>
    )
}

export default ProfileScreen
