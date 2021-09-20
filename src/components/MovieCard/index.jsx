import { Card, Button, Col } from 'react-bootstrap'

const MovieCard = ({ movie, setMovieInfo, setShow }) => {

    const handleShow = () => {
        setShow(true)
        readMore()
    }

    const readMore = async () => {
        const url = `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=97fa441e`
        const response = await fetch(url)
        const data = await response.json()
        setMovieInfo(data)
    }

    return (
        <Col md={3}>
            <Card style={{ height: '26rem' }} border="secondary" class="mb-5">
                <Card.Img style={{ height: '18rem' }} variant="top" src={movie.Poster} />
                <Card.Body style={{ height: '6rem' }}>
                    <Card.Title className="h6">{movie.Title}</Card.Title>
                </Card.Body>
                <Button style={{ width: '7rem' }} className="btn btn-secondary" onClick={handleShow}>Read More</Button>
            </Card>
        </Col >
    )
}


export default MovieCard