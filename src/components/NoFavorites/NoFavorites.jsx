import { useNavigate } from 'react-router-dom';
import { Button, Container, Text } from './NoFavorites.styled';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/selectors';
import { Loader } from '../../components/Loader/Loader';

export const NoFavorites = () => {
    const navigate = useNavigate();
    const loading = useSelector(selectIsLoading);

    return (
        <>
        {loading ? <Loader />
            : 
            <Container>                
                <Text>Sorry, you have no favorites. <br/>Go to catalog and choose cars you like</Text>
                <Button onClick={() => navigate('/catalog')}>See catalog</Button>
            </Container>
        }
        </>
    )
};