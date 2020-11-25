import React from 'react';
import { GetStaticPathsContext, GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult, InferGetStaticPropsType } from 'next';
import { getUsers } from '../../backend/yaml-reader';

interface Props {
    name: string
}

export async function getStaticPaths(ctx: GetStaticPathsContext) : Promise<GetStaticPathsResult> {
    const users = getUsers();
    const paths = users.map(u => `/users/${u.name}`);
    return { paths, fallback: false };
}

export async function getStaticProps(ctx: GetStaticPropsContext) : Promise<GetStaticPropsResult<Props>> {
    const { params } = ctx;
    const name = params.name as string;
    return {
        props: { name },
    };
}

function UserPage(props: Props){
  return <div>User: {props.name}</div>;
}

export default UserPage;