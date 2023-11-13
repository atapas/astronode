
import { gql } from "graphql-request";
import {getClient} from '../lib/graphQLClient';

export const getAllPosts = async () => {
  const client = getClient();

  const allPosts = await client.request(
    gql`
      query allPosts {
        publication(host: "blog.greenroots.info") {
          title
          posts(first: 10) {
            edges {
              node {
                title
                brief
                slug
                tags {
                  name
                  slug
                }
                coverImage {
                  url
                }
                publishedAt
              }
            }
          }
        }
      }
    `
  );

  return allPosts;
}