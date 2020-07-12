import React, { useState, useEffect } from 'react'
import { Container, Card, Row, Col, InputGroup, Form } from 'react-bootstrap'
const MovieTwo = ({ data }) => {
    const content = data.list[0].page["content-items"]["content"];
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');
    const pagetitle = data.list[0].page.title
    const searchMovie = (e) => setSearch(e.target.value.toLowerCase())
    useEffect(() => {
        setMovies(content.filter(team => team.name.toLowerCase().includes(search)))
    }, [search])
    return (
        <React.Fragment>
            <div className="page_header">
                <Container>
                    <Row>
                        <Col sm={6} className="order-2 order-md-12 mb-4">
                            <h4 className="page_title">{pagetitle}</h4>
                        </Col>
                        <Col sm={6} className="order-1 order-md-12 mb-4">
                            <InputGroup>
                                <Form.Control
                                    type="text"
                                    placeholder="Search Movie..."
                                    aria-describedby="inputGroupPrepend"
                                    required
                                    name="search"
                                    value={search}
                                    autoComplete="off"
                                    onChange={searchMovie}
                                />
                                <InputGroup.Append>
                                    <InputGroup.Text id="inputGroupPrepend"><i className="fad fa-search"></i></InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
            {movies.length <= 0 ? <h1 className="display-4 text-center text-secondary">0 Result</h1> :
                <Row> {movies.map((items, index) => {
                    return (
                        <Col xs={6} sm={6} md={4} lg={3} className="mb-5" key={index}>
                            <Card className="cus_card">
                                <Card.Img src={'/Slice/' + items['poster-image']} />
                                <strong class="movie_name">{items.name}</strong>
                            </Card>
                        </Col>
                    )
                })}
                </Row>
            }
        </Container>

        </React.Fragment>
    )

}
console.warn = () => { }
export default MovieTwo