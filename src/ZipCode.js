import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ZipCode extends React.Component {
  handleSubmit = (value, { setSubmitting }) => {
    this.props.setLocation(value.zipCode);
    setSubmitting(false);
  };

  render() {
    return (
      <div className={this.props.showZip}>
        <main className="container">
          <section>
            <FontAwesomeIcon id="logo" icon="cloud" />
          </section>
          <section className="form-container">
            <Formik
              initialValues={{ zipCode: "" }}
              onSubmit={this.handleSubmit}
              validationSchema={Yup.object().shape({
                zipCode: Yup.string()
                  .matches(/^[0-9]+$/, {
                    message: "Must be a number",
                    excludeEmptyString: true
                  })
                  .min(5, "Must be exactly 5 characters")
                  .max(5, "Must be exactly 5 characters")
                  .required("Zip code is required")
              })}
              render={({ errors, touched, isSubmitting }) => {
                return (
                  <div>
                    <Form>
                      <div>
                        <Field
                          type="text"
                          id="field"
                          name="zipCode"
                          placeholder="Enter Zip Code"
                        />
                        {touched.zipCode && errors.zipCode && (
                          <div id="errors">
                            <p>{errors.zipCode}</p>
                          </div>
                        )}
                      </div>
                      <button
                        className="button"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Get Weather
                      </button>
                    </Form>
                  </div>
                );
              }}
            />
          </section>
        </main>
      </div>
    );
  }
}

export default ZipCode;
