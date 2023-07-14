import axios from "axios";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
export default function product() {
  const [list, setList] = useState<any>([]);
  const router = useRouter();
  useEffect(() => {
    debugger;
    const id = router.query.id;
    const hrefId = window.location.href.split("/");
    var lastSegment = hrefId.pop();
    const fetchData = async () => {
      try {
        const response = await axios.get<any>(
          "https://jsonplaceholder.typicode.com/posts/" +
            `${id ? id : lastSegment}`
        );
        setList(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, []);

  const Container = styled.div`
    margin-left: 15px;
  `;
  const Title = styled.span`
    font-size: 20px;
    text-decoration: underline;
  `;
  const ContainerTitle = styled.div`
    margin-top: 10px;
  `;
  const ContainerBody = styled.div`
    margin-top: 10px;
  `;
  const Label = styled.label``;
  const Span = styled.span``;
  return (
    <>
      <Container>
        <Title>Product Details</Title>
        <ContainerTitle>
          <Label>Title :</Label>
          <Span> {list.title}</Span>
        </ContainerTitle>
        <ContainerBody>
          <Label>Body :</Label>
          <Span> {list.body}</Span>
        </ContainerBody>
      </Container>
    </>
  );
}
