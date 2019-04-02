import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styles from "./styles.css";

class ZipCode extends React.Component {
  handleSubmit = (value, { setSubmitting }) => {
    this.props.setLocation(value.zipCode);
    setSubmitting(false);
  };

  render() {
    return (
      <div>
        <Formik
          initialValues={{ zipCode: "" }}
          onSubmit={this.handleSubmit}
          validationSchema={Yup.object().shape({
            zipCode: Yup.string()
              .matches(/[0-9]/, {
                message: "Zip code must be a number",
                excludeEmptyString: true
              })
              .min(5, "Zip code must be exactly 5 characters")
              .max(5, "Zip code must be exactly 5 characters")
              .required("Zip code is required")
          })}
          render={({ errors, touched, isSubmitting }) => {
            return (
              <div>
                <Form>
                  <div>
                    <Field type="text" name="zipCode" placeholder="Zip Code" />
                    {touched.zipCode && errors.zipCode && (
                      <p>{errors.zipCode}</p>
                    )}
                  </div>
                  <button disabled={isSubmitting}>Get Weather</button>
                </Form>
              </div>
            );
          }}
        />
      </div>
    );
  }
}

export default ZipCode;
