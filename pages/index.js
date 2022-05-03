import React from "react";
import Head from "next/head";
import { getAllArticles } from "@utils/mdx";
import BlogCard from "@components/BlogCard";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 180px;
  padding-top: 100px;
  padding-bottom: 50px;

  @media only screen and (min-width: 0px) and (max-width: 576px) {
    padding: 75px 10px;
  }

  @media only screen and (min-width: 576px) and (max-width: 992px) {
    padding: 105px 9px;
  }
`;

export default function Blog({ posts }) {
  return (
    <React.Fragment>
      <Head>
        <title>My blog</title>
      </Head>
      <Container>
        {posts.map((frontmatter) => {
          return <BlogCard key={frontmatter.slug} data={frontmatter} />;
        })}
      </Container>
    </React.Fragment>
  );
}

export async function getStaticProps() {
  let articles = await getAllArticles();

  const sortedArticles = articles.map((article) => article);

  sortedArticles.sort((a, b) => {
    return new Date(b.publishedAt) - new Date(a.publishedAt);
  });

  return {
    props: {
      posts: sortedArticles,
    },
  };
}
