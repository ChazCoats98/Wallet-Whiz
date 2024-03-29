import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { usePlaidLink } from 'react-plaid-link';
import { EXCHANGE_PUBLIC_TOKEN } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import Button from '@mui/material/Button';

axios.defaults.baseURL = 'http://localhost:3001/api';

function PlaidAuth({ publicToken }) {
  const [exchangePublicToken] = useMutation(EXCHANGE_PUBLIC_TOKEN);
  console.log(publicToken);

  useEffect(() => {
    async function fetchData() {
      try {
        const accessToken = await exchangePublicToken({ variables: { publicToken }});
        console.log('accessToken', accessToken.data);
        window.location.assign('/personal finances');
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
}

function PlaidButton () {
  const [linkToken, setLinkToken] = useState();
  const [publicToken, setPublicToken] = useState();

  useEffect(() => {
    async function fetch() {
      try {
        const response = await axios.post('/create_link_token');
        console.log(response);
        setLinkToken(response.data.link_token);
      } catch (err) {
        console.error(err);
      }
    }
    fetch();
  }, []);

  const { open, ready } = usePlaidLink({
    token: linkToken,
    onSuccess: (public_token, metadata) => {
      setPublicToken(public_token);
      console.log('success', public_token, metadata);
    },
  });

  return publicToken ? <PlaidAuth publicToken={publicToken} /> : (
    <Button variant='contained' onClick={() => open()} disableElevation>
      Link Bank
    </Button>
  );
}

export default PlaidButton;