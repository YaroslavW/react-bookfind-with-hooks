import React from 'react';
import { Row, Col, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import Collapsible from 'react-collapsible';

const Books = ({books}) => {
  let bookItems;
  if (books) {
    bookItems = books.map(book => {
      let id = book.id;
      let title = book.volumeInfo.title;
      let thumbnail = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/128x212'
      let categories = book.volumeInfo.categories ? book.volumeInfo.categories : 'Nemo';
      let authors = book.volumeInfo.authors;
      let publisher = book.volumeInfo.publisher ? book.volumeInfo.publisher : 'Super-Publisher';
      let description = book.volumeInfo.description ? book.volumeInfo.description : 'Very Interestig book but not description';
      let pageCount = book.volumeInfo.pageCount;
      let publishedDate = book.volumeInfo.publishedDate;
      let averageRating = book.volumeInfo.averageRating ? book.volumeInfo.averageRating : '0';
      let buyLink = book.volumeInfo.previewLink;
      return (
        <Collapsible key={id} trigger={title} triggerTagName="div" triggerWhenOpen='^'>
          <Row>
            <Col xs={12} md={3} lg={3} className="text-center">
              <img src={thumbnail} className="img-responsive" role="presentation" alt={`Some about-${thumbnail}`} />
            </Col>
            <Col xs={12} md={8} lg={8}>
              <ListGroup>
                <ListGroupItem><strong>Title: </strong> {title}</ListGroupItem>
                <ListGroupItem><strong>Categories: </strong> {categories}</ListGroupItem>
                <ListGroupItem><strong>Authors: </strong> {authors}</ListGroupItem>
                <ListGroupItem><strong>Publisher: </strong> {publisher}</ListGroupItem>
                <ListGroupItem><strong>Publish Date: </strong> {publishedDate}</ListGroupItem>
                <ListGroupItem><strong>Page Count: </strong> {pageCount}</ListGroupItem>
                <ListGroupItem><strong>Average Rating: </strong> <span className="rating">{averageRating}</span></ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={11} md={11} lg={11}>
              <h3>Book Description</h3>
              {description}
              <hr />
              <Button href={buyLink} target="_blank" variant="primary">Buy Now</Button>
            </Col>
          </Row>
        </Collapsible>

      )
    })
  }
  return (
    <div>{bookItems}</div>

  );
}

export default Books;