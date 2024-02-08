import { Formik, Field, Form } from "formik";
import { todoSchema } from "./validations";
import classNames from "classnames";
import useTodoStore from "../../store/TodoStore";

const Header = () => {
  const addTodo = useTodoStore((state) => state.addTodo);

  return (
    <header className="header">
      <Formik
        initialValues={{
          title: "",
        }}
        onSubmit={(values, bag) => {
          addTodo(values.title);
          bag.resetForm();
        }}
        validationSchema={todoSchema}
      >
        {({ errors }) => (
          <Form>
            <Field
              name="title"
              className={classNames("new-todo", {
                "border-red": errors.title,
              })}
              placeholder="What needs to be done?"
              autoFocus
              data-cy="new-todo-input"
            />
          </Form>
        )}
      </Formik>
    </header>
  );
};

export default Header;
