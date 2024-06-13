import React from 'react';
import { Text, Stack } from '@chakra-ui/react';

export function Textual() {
  return (
    <Stack>
        <Text>This online meeting finder has beeen retired.</Text>
        <Text>Please use <a href="https://aa-intergroup.org/meetings/">Online Intergroup of AA</a> or similar.</Text>
        <Text><a href="https://docs.google.com/spreadsheets/d/1mJsAtK9GYq2TJwFSKbkq9OD436s00E_pTx1Oj96HbjI/edit#gid=0">YPAA share recordings</a>.</Text>
        <Text><a href="https://alcoholics-anonymous.eu/events/">YPAA Events and Conventions</a>.</Text>
    </Stack>
  );
}
