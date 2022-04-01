import React from 'react';
import { Button, Card } from 'react-bootstrap';
import styles from './NFTCard.module.css';

interface NFTCardProps {
  listingId: number;
  title: string;
  image: string;
  description: string;
  seller: string;
  category: string;
}

const NFTCard = (p: NFTCardProps) => {

  const viewDetails = () => {
    console.log('viewing details...');
  };

  const showFiendlyCategory = (category: string) => {
    let friendlyCategory = '';
    if (category === 'collection') {
      friendlyCategory = 'Collection';
    }
    if (category === 'art') {
      friendlyCategory = 'Art & Creative';
    }
    if (category === 'movies') {
      friendlyCategory = 'Movies';
    }

    if (friendlyCategory === '') {
      return 'N/A'
    } else {
      return friendlyCategory;
    }
  }

  return (
    <Card className={styles.card}>
      <Card.Img className={styles.cardImage} variant="top" src={`/assets/nft/${p.image}`} />
      <Card.Body className={styles.cardBody}>
        <Card.Title className={styles.cardTitle}>{p.title}</Card.Title>
        <Card.Text className={styles.cardSubtitle}>Sold by {p.seller} in {showFiendlyCategory(p.category)}</Card.Text>
        <Card.Text className={styles.cardDescription}>
          {p.description}
        </Card.Text>
        <Button variant="outline-primary" onClick={viewDetails}>View Details</Button>
      </Card.Body>
    </Card>
  )
};

export default NFTCard;
