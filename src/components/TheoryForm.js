import { Form,Field, Formik } from "formik"
import { Button, FormGroup, Label } from "reactstrap"
import { useState } from "react"


const TheoryForm = () => {

    const handleSubmit = (values) => {

        console.log(values)
        const theory = {
            id: values.id, 
            text: values.bookTheory, 
            
        }

    }


    return (
        
        <Formik>
            initialValues = {{
                bookTheory: '',
                bookTitle: 'Select...',
                favoriteCharacter: '',
                username: ''
            }}
            validate = {validateForm}
            onSubmit = {handleSubmit}

            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor='bookTitle'>Book Title</Label>
                    <Field
                        name='bookTitle'
                        as='select'
                        className='form-control'
                    >
                        <option>Fourth Wing</option>
                        <option>Iron Flame</option>
                        <option>Onyx Storm</option>
                    </Field>
                </FormGroup>
                <FormGroup>
                <Label htmlFor='bookTheory'>Book Theories</Label>
                <Field 
                    name='bookTheory'
                    as='textarea'
                    rows='12'
                    className='form-control'
                />
                <Field/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="favoriteCharacter">Who is your favorite character?</Label>
                    <Field
                        name='favoriteCharacter'
                        className='form-control'
                    ></Field>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Field
                        name='username'
                        placeholder='Your Name'
                        className='form-control'
                    ></Field>
                </FormGroup>
                <Button type="submit">
                    Submit
                </Button>
            </Form>


        </Formik>
    )
}

export default TheoryForm
