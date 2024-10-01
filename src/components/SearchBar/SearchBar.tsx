import { Field, Formik, Form } from "formik";
import { FC } from "react";
import toast from "react-hot-toast";
import { SearchProps } from "./SearchBar.types";
import { FaSearch } from "react-icons/fa";
import css from "../SearchBar/SearchBar.module.css";

export const SearchBar: FC<SearchProps> = ({ onSearch }) => {
  const notify = () => toast.error("Error loading !");

  return (
    <header className={css.header}>
      <div className={css.formWrap}>
        <h1 className={css.title}>Gallery: search for images with Ease</h1>
        <Formik
          initialValues={{ query: "" }}
          onSubmit={(values, actions) => {
            if (!values.query.trim()) {
              notify();
              return;
            }
            onSearch(values.query);
            actions.resetForm();
          }}
        >
          <Form>
            <div className={css.search}>
              <Field
                className={css.input}
                type="text"
                name="query"
                autoComplete="off"
                autoFocus
                placeholder="Search images..."
              />
              <button type="submit" className={css.searchButton}>
                  <FaSearch className={css.handle} />
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </header>
  );
};




