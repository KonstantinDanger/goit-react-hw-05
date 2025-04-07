import { Field, Form, Formik } from "formik";

export default function SearchBar({ initialQuery, onSubmit }) {
  const handleSubmit = (values) => {
    const currentQuery = values.query;

    if (!currentQuery) {
      return;
    }

    onSubmit(currentQuery);
  };

  return (
    <>
      <Formik initialValues={{ query: initialQuery }} onSubmit={handleSubmit}>
        <Form>
          <Field as="input" name="query" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </>
  );
}
