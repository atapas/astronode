
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
                subtitle
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


export const getPage = async () => {
  const client = getClient();

  const page = await client.request(
    gql`
      query pageData {
        publication(host: "blog.greenroots.info") {
          staticPage(slug: "about"){
            title
            content{
              html
            }
          }
          title          
        }
      }
    `
  );

  return page.publication.staticPage;
}