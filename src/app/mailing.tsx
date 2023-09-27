'use client'
import { ReactElement, ChangeEvent, FocusEvent } from 'react';
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control';
import { useState } from 'react';
import { Button, Input } from 'antd';
import { sendContactForm } from './api'; // Import your sendContactForm function

const initValues = { name: '', email: '', subject: '', message: '' };

interface State {
  isLoading: boolean;
  error: string;
  values: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
}

const initState: State = { isLoading: false, error: '', values: initValues };

export default function Home(): ReactElement {
  const [state, setState] = useState<State>(initState);
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const { values, isLoading, error } = state;

  const onBlur = ({ target }: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      // Add your toast implementation here
    } catch (error: any) {
      if (typeof error === "string") {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          error: error,
        }));
      } else {
        // Handle non-string errors here
        console.error(error); // Log the error for debugging
        setState((prev) => ({
          ...prev,
          isLoading: false,
          error: "An error occurred while sending the message.",
        }));
      }
    }
  };

  return (
    <div className="container max-w-[450px] mt-12" >
      <h1>Contact</h1>
      {error && (
        <p style={{ color: 'red' }} className="my-4 text-3xl">
          {error}
        </p>
      )}

      <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
        <FormLabel>Name</FormLabel>
        <Input
          className='mt-5 text-black'
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={touched.email && !values.email} mb={5}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl
        mb={5}
        isRequired
        isInvalid={touched.subject && !values.subject}
      >
        <FormLabel>Subject</FormLabel>
        <Input
          type="text"
          name="subject"
          value={values.subject}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl
        isRequired
        isInvalid={touched.message && !values.message}
        mb={5}
      >
        <FormLabel>Message</FormLabel>
        <Textarea
          type="text"
          name="message"
          rows={4}
          errorBorderColor="red.300"
          value={values.message}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      {/* Repeat similar FormControl sections for other input fields */}

      <Button
        className="mt-5 text-white"
        type="primary"
        loading={isLoading}
        disabled={!values.name || !values.email || !values.subject || !values.message}
        onClick={onSubmit}
      >
        Submit
      </Button>


    </div>
  );
}
