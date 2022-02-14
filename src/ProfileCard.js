import Card from 'react-bootstrap/Card' ;

const ProfileCard = ({ id, name, email }) => {
    return (
            <Card className='mx-3 my-3'>
                <Card.Img 
                    variant="top" 
                    src={`https://robohash.org/${id}?set=set4&bgset=bg2&size=250x250`} 
                    className='rounded-circle' 
                    alt='profile-pic' />
                <Card.Body>
                    <Card.Title className='text-center'>{name}</Card.Title>
                    <Card.Text className='text-center'>
                        {email}
                    </Card.Text>
                </Card.Body>
            </Card>
    )
}

export default ProfileCard ;