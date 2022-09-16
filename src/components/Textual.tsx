import React from 'react';
import { Text, Stack } from '@chakra-ui/react';

export function Textual() {
  return (
    <Stack>
        <Text>All meeting times are in your timezone.</Text>
        <Text>To add or update your meeting, <a href="https://docs.google.com/forms/d/1Q1nZ_zOVu4q1Qt85wTXQjZPhPuXfG2xwZHrK2-pp6Kg">fill in this form</a>.</Text>
        <Text><a href="https://docs.google.com/spreadsheets/d/1mJsAtK9GYq2TJwFSKbkq9OD436s00E_pTx1Oj96HbjI/edit#gid=0">YPAA share recordings</a>.</Text>
        <Text><a href="https://alcoholics-anonymous.eu/events/">YPAA Events and Conventions</a>.</Text>
    </Stack>
  );
}
