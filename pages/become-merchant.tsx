import React from 'react';
import { NextPage } from 'next';
import Layout from '@components/Layout/Layout';
import AddShopForm from '@components/Form/AddShop';

const SignInPage: NextPage = () => {
  return (
    <Layout maxWidth={'sm'}>
      <AddShopForm />
    </Layout>
  );
};

export default SignInPage;
