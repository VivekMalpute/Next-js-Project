// import axios from "axios";
// import { useRouter } from "next/router";
// import React, { useEffect, useState } from "react";

// export default function product() {
//   const [list, setList] = useState<any>([]);
//   const router = useRouter();
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get<any>(
//           "https://jsonplaceholder.typicode.com/posts"
//         );
//         setList(response.data);
//         console.log(response.data);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };

//     fetchData();
//   }, []);
//   console.log(list);
//   const handleOnProductClick = (item: any) => {
//     router.push(`/product/${item.id}`);
//   };
//   return (
//     <>
//       <ul>
//         {list &&
//           list.length > 0 &&
//           list.map((item: any) => {
//             return (
//               <>
//                 <div onClick={() => handleOnProductClick(item)} className="d-flex card__post">
//                 <div className="margin__right">
//                     <span>
//                       {item.id}
//                     </span>
//                   </div>
//                   <div>
//                     <span>{item.title}</span>
//                   </div>

//                 </div>
//               </>
//             );
//           })}
//       </ul>
//     </>
//   );
// }

import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { Container, Typography, Box } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

type Repo = {
  name: string;
  stargazers_count: number;
};

export const getServerSideProps: GetServerSideProps<{
  repo: Repo;
}> = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const repo = await res.json();
  return { props: { repo } };
};

export default function Page({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const Newrepo = JSON.stringify(repo);
  const newRepoParsed = JSON.parse(Newrepo);

  const handleOnProductClick = (item: any) => {
    router.push(`/product/${item.id}`);
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "userId",
      headerName: "User ID",
      width: 150,
      editable: true,
    },
    {
      field: "title",
      headerName: "Title",
      width: 500,
      editable: true,
    },
  ];

  // const Container  = styled.div`
  //     background-color: burlywood;
  //     border: 1px solid black;
  //     padding: 10px;
  //     margin: 10px;
  //     cursor: pointer;
  //     display:flex
  // `
  // const Items = styled.div`
  //   margin-right:10px;
  //  `
  // const Span = styled.span`
  // `
  // const SpanTitle = styled.span`
  //   font-weight: bold;
  // `
  return (
    <>

      <Container component="main" sx={{overflow: 'auto'}}>
        <Typography component="h1" variant="h5" sx={{ textAlign: "center" }}>Table Data</Typography>
        <Box sx={{ height: 500 }}>
          <DataGrid
            onRowClick={(item) => handleOnProductClick(item)}
            rows={newRepoParsed}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
          />
        </Box>
      </Container>
    </>
  );
}
