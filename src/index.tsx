import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ChakraProvider, ColorModeScript, Text, Stack } from '@chakra-ui/react';

import { App } from './App';
import './index.css';
import { theme } from './helpers';
import { Error as ErrorBoundary } from './components';

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
        
        return (
          <Stack>
              <Text>This online meeting finder has beeen retired.</Text>
              <Text>Please use <a href="https://aa-intergroup.org/meetings/">Online Intergroup of AA</a> or similar.</Text>
              <Text><a href="https://docs.google.com/spreadsheets/d/1mJsAtK9GYq2TJwFSKbkq9OD436s00E_pTx1Oj96HbjI/edit#gid=0">YPAA share recordings</a>.</Text>
              <Text><a href="https://alcoholics-anonymous.eu/events/">YPAA Events and Conventions</a>.</Text>
          </Stack>
        );
      },

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
