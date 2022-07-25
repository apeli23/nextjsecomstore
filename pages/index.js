import Layout from "../components/Layout";
import NextLink from "next/link"
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import data from '../utils/data';
import { ClassNames } from "@emotion/react";
import useStyles from "../utils/styles"

export default function Home({ children }) {
  const classes = useStyles();
  return (
    <Layout>
      <h1>products</h1>
      <Grid container spacing={3}>
        {data.products.map((product) => (
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
