import { Form, Field, Formik, ErrorMessage } from "formik"
import { Button, FormGroup, Label } from "reactstrap"
import { useState } from "react"
import * as Yup from "yup";


const TheoryForm = ({ addTheory }) => {

    const validationSchema = Yup.object({
        bookTheory: Yup.string().required("Theory is required"),
        username: Yup.string().required("Username is required"),
        bookTitle: Yup.string().required("Book is required")
    })

    const handleSubmit = (values) => {
        console.log(values);
        addTheory(values);
    }

    return (
        <div>

            <Formik
                initialValues={{
                    bookTheory: '',
                    bookTitle: '',
                    favoriteCharacter: '',
                    username: ''
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >

                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor='bookTitle'>Book Title</Label>
                        <Field
                            name='bookTitle'
                            as='select'
                            className='form-control'
                        >
                            <option value="" disabled>Select...</option>
                            <option value="Fourth Wing">Fourth Wing</option>
                            <option value="Iron Flame">Iron Flame</option>
                            <option value="Onyx Storm">Onyx Storm</option>
                        </Field>
                        <ErrorMessage name='bookTitle' component='div' className="text-danger" />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='bookTheory'>Book Theories</Label>
                        <Field
                            name='bookTheory'
                            as='textarea'
                            rows='12'
                            className='form-control'
                        >
                        </Field>
                        <ErrorMessage name='bookTheory' component='div' className="text-danger" />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="favoriteCharacter">Who is your favorite character?</Label>
                        <Field
                            name='favoriteCharacter'
                            className='form-control'
                        ></Field>
                        <ErrorMessage name='favoriteCharacter' component='div' className="text-danger" />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="username">Username</Label>
                        <Field
                            name='username'
                            placeholder='Your Name'
                            className='form-control'
                        ></Field>
                        <ErrorMessage name='username' component='div' className="text-danger" />
                    </FormGroup>
                    <Button type="submit">
                        Submit
                    </Button>
                </Form>
            </Formik>
        </div>
    )
}

export default TheoryForm
