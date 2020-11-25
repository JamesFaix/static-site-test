import React from 'react';
import { GetStaticPathsContext, GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult, InferGetStaticPropsType } from 'next';

interface Props {
    name: string
}

export async function getStaticPaths(ctx: GetStaticPathsContext) : Promise<GetStaticPathsResult> {
    const ids = [1, 2, 3, 5, 8, 13];
    const paths = ids.map(id => `/users/${id}`);
    return { paths, fallback: false };
}

export async function getStaticProps(ctx: GetStaticPropsContext) : Promise<GetStaticPropsResult<Props>> {
    const { params } = ctx;
    const { id } = params;
    const name = `${id}-${id}`;
    return {
        props: { name },
    };
}

function UserPage(props: Props){
  return <div>User: {props.name}</div>;
}

export default UserPage;