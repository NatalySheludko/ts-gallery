import { Field, Formik, Form } from "formik";
import css from "../SearchBar/SearchBar.module.css";
import { FC, useState } from "react";
import toast from "react-hot-toast";
import { SearchProps } from "./SearchBar.types";

export const SearchBar: FC<SearchProps> = ({ onSearch }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleInputClick = (): void => {
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
              notify();
              return;
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
};
