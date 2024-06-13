import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, defer, RouterProvider } from 'react-router-dom';
import { ChakraProvider, ColorModeScript, Text, Stack } from '@chakra-ui/react';
import { DateTime } from 'luxon';

import { App } from './App';
import './index.css';
import { getLanguage, load, parseSearchWords, theme } from './helpers';
import { Error as ErrorBoundary, Meetings, SingleMeeting } from './components';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container);

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorBoundary />,
      loader: ({ request }) => {
        if (!process.env.REACT_APP_JSON_URL) {
          throw new Error('REACT_APP_JSON_URL not specified');
        }

        const url = new URL(request.url);
        const query = url.searchParams;
        const searchWords = parseSearchWords(query.get('search')?.toString());
        const language = getLanguage();

        const tags = query.getAll('tags');

        return (
          <Stack>
              <Text>This online meeting finder has beeen retired.</Text>
              <Text>Please use <a href="https://aa-intergroup.org/meetings/">Online Intergroup of AA</a> or similar.</Text>
              <Text><a href="https://docs.google.com/spreadsheets/d/1mJsAtK9GYq2TJwFSKbkq9OD436s00E_pTx1Oj96HbjI/edit#gid=0">YPAA share recordings</a>.</Text>
              <Text><a href="https://alcoholics-anonymous.eu/events/">YPAA Events and Conventions</a>.</Text>
          </Stack>
        );
      },
      children: [
        {
          path: '/',
          element: <Meetings />
        },
        {
          path: '/:id',
          element: <SingleMeeting />,
          loader: ({ params }) => params.id
        }
      ]
    }
  ],
  { basename: process.env.REACT_APP_BASE_URL }
);

root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>
);
