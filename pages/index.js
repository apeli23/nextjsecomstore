import Layout from "../components/Layout";
import NextLink from "next/link"
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  // CardActions,
  // Button,
} from '@mui/material';
// import data from '../utils/data';
// import { ClassNames } from "@emotion/react";
import useStyles from "../utils/styles"
import db from "../utils/db";
import Product from "../models/Product";

export default function Home(props) {
  const classes = useStyles();
  const { products } = props;
  return (
    <Layout>
      <h1>products</h1>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item md={4} key={product.name}>
            <Card >
              <NextLink href={`/product/${product.slug}`} passHref>
                <CardActionArea>
                  <CardMedia
                  className={classes.card}
                    component="img"
                    image={product.image}
                    title={product.name}
                  ></CardMedia>
                  <CardContent>
                    <Typography>{product.name}</Typography>
                  </CardContent>
                </CardActionArea>
              </NextLink>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  )
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}).lean();
  await db.disconnect();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}