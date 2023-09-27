'use client'
import { ReactElement, ChangeEvent, FocusEvent } from 'react'; // Import necessary types
export const sendContactForm = async (data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<void> => {
  const res = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  });

  if (!res.ok) throw new Error("Failed to send message");

  return res.json();
};

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/form-control'; // Updated import path
import { useState } from 'react';
import { Button, Input } from 'antd';

const initValues = { name: '', email: '', subject: '', message: '' };

interface State {
  isLoading: boolean;
  error: string; // Explicitly type the `error` property to `string`.
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
    type ButtonVariant = "default" | "primary" | "dashed" | "link" | "text" | `"outline"`

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
        }
      }
   
   // Re-enable the Submit button
document.querySelector("button[type='submit']").disabled = false;

   
    };
    
    
  return (
    <div className="items-center mt-5  flex flex-col text-3xl jutify-between">
      <h1>Contact</h1>
      {error && (
        <p text-color="red.300" className="my-4 text-3xl">
          {error}
        </p>
      )}

      <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
        <FormLabel>Name</FormLabel>
        <Input
        className='mt-5 text-black'
          type="text"
          name="name"
          // Add appropriate props for error handling
          value={values.name}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      {/* Repeat similar FormControl sections for other input fields */}

      <Button
  className=" mt-5 text-white" // Add your custom CSS class here
  type="primary" // You can set the button type like 'primary', 'default', etc.
  loading={isLoading}
  disabled={!values.name || !values.email || !values.subject || !values.message}
  onClick={onSubmit}
>
  Submit
</Button>
    </div>
  );
}
