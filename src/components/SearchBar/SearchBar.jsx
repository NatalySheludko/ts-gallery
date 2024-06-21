import { Field, Formik, Form } from "formik";
import css from "../SearchBar/SearchBar.module.css";
import { useState } from "react";
import toast from "react-hot-toast";

export default function SearchBar({ onSearch }) {
  const [isActive, setIsActive] = useState(false);

  const handleInputClick = () => {
    setIsActive(true);
  };

  const notify = () => toast.error("Error loading !");

  return (
    <div className={css.formWrap}>
      <header>
        <Formik
          initialValues={{ query: "" }}
          onSubmit={(values, actions) => {
            if (!values.query.trim()) {
              return notify();
            }
            onSearch(values.query);
            actions.resetForm();
            setIsActive(false);
          }}
        >
          <Form>
            <div className={`${css.search} ${isActive ? css.active : ""}`}>
              <Field
                className={css.input}
                type="text"
                name="query"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                onClick={handleInputClick}
              />
              <button type="submit" className={css.reset}>
                <div className={css.handle}></div>
              </button>
            </div>
          </Form>
        </Formik>
      </header>
    </div>
  );
}
