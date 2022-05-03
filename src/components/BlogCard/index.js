import React from "react";
import Link from "next/link";
import dayjs from "dayjs";
import { Card } from "./style/blogcard.styled";

const BlogCard = ({ data }) => {
  return (
    <>
      <Link href={`/${data.slug}`} passHref>
        <Card>
          <h1 className="title">{data.title}</h1>
          <p className="summary">{data.excerpt}</p>
          <p className="date">
            {dayjs(data.publishedAt).format("MMMM D, YYYY")} &mdash;{" "}
            {data.readingTime}
          </p>
        </Card>
      </Link>
    </>
  );
};

export default BlogCard;
