import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import PageHead from '../components/PageHead/PageHead';
import { Col, Container, Row, Button, Form } from 'react-bootstrap';
import Navigation from '../components/Navigation/Navigation';
import NFTCard from '../components/NFTCard/NFTCard';
import { useEffect, useState } from 'react';

// Data
import listingsArt from './../data/listings-art.json';
import listingsCollections from './../data/listings-collections.json';
import listingsMovies from './../data/listings-movies.json';

export interface Listings {
  items: ListingDetails[]
}

export interface ListingDetails {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
  seller: string;
  category: string;
}

const Home: NextPage = () => {

  const [currentCategory, setCurrentCategory] = useState('collections');
  const [listings, setListings] = useState<Listings>();

  const [messagesTemp, setMessagesTemp] = useState('');
  const [messages, setMessages] = useState('');

  useEffect(() => {
    const init = async () => {
      const data = load_data(currentCategory);
      setListings(data);
    };
    init();
  }, [currentCategory]);

  const save_message = (message: any) => {
    setMessagesTemp(message);
  };

  const postMessage = () => {
    setMessages(messagesTemp);
  };

  const load_data = (Category: any): Listings => {

    console.log('loading data...' + Category);

    const data: Listings = { items: [] };

      // TODO: this be fetched from ...(put the json on public github repo)
      
      if (Category === 'art') {
        listingsArt.forEach((item: any) => {
          data.items.push({
            id: item.id,
            title: item.title,
            description: item.description,
            price: item.price,
            image: item.image,
            seller: item.seller,
            category: item.category,
          });
        });
      } else if (Category === 'collections') {
        listingsCollections.forEach((item: any) => {
          data.items.push({
            id: item.id,
            title: item.title,
            description: item.description,
            price: item.price,
            image: item.image,
            seller: item.seller,
            category: item.category,
          });
        });
      }
      else {
        listingsMovies.forEach((item: any) => {
          data.items.push({
            id: item.id,
            title: item.title,
            description: item.description,
            price: item.price,
            image: item.image,
            seller: item.seller,
            category: item.category,
          });
        });
      }

      if (data == null) {
        console.log('error in fetching the data...');
      }

      return data;
  };

  return (
    <div className={styles.container}>
      <PageHead title="Marketplace - Discover amazing NFTs" />
      <main>

        <Navigation />

        <div className={styles.intro}>
          <Container>
            <div className={styles.introTextContainer}>
              <h1 className={styles.title}>NFT Marketplace</h1>
              <p className={styles.subtitle}>
                Discover, collect, and sell extraordinary NFTs
              </p>
            </div>
          </Container>
          <div className={styles.introOverlay}></div>
        </div>

        <Container id="explore">
          
          <Row style={{ marginTop: 80, marginBottom: 80 }}>
            <Button variant="outline-primary" style={{ width: 200 }} onClick={() => setCurrentCategory('collections')}>Collections</Button>
            <Button variant="outline-primary" style={{ width: 200 }} onClick={() => setCurrentCategory('art')}>Art</Button>
            <Button variant="outline-primary" style={{ width: 200 }} onClick={() => setCurrentCategory('movies')}>Movies</Button>
          </Row>
          
          <Row style={{ marginTop: 80, marginBottom: 80 }}>
            <h2 className={styles.heading}>Featured NFTs</h2>
            {listings && listings.items.map((listing: any) => (
              <Col key={listing.id} lg={4} md={6} xs={12}>
                <NFTCard 
                  listingId={listing.id}
                  title={listing.title}
                  image={listing.image}
                  description={listing.description}
                  seller={listing.seller} 
                  category={listing.category} 
                />
              </Col>
            ))}
          </Row>

          <Row style={{ marginTop: 80, marginBottom: 80 }}>
            <Col lg={3}>
            </Col>
            <Col lg={6}>
              <h3 className={styles.heading}>Shout Outs!</h3>
              <div>
                {messages && (<div dangerouslySetInnerHTML={{ __html: messages }} />)}
              </div>
              <hr />
              <div>
                <Form>
                  <Form.Label>Say something to the community</Form.Label>
                  <Form.Control as="textarea" rows={3} onChange={(e) => save_message(e.target.value)} />
                </Form>
                <Button variant="primary" onClick={() => postMessage()}>
                  Post
                </Button>
              </div>
            </Col>
          </Row>

        </Container>
      </main>
    </div>
  )
}

export default Home
