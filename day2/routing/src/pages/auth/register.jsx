import { useFormik } from "formik";
import { registerSchema } from "./validations";
import { CheckEmail } from "../../helpers/check-email-exists";
import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";

const Register = () => {
  const [emailStatus, setEmailStatus] = useState("idle");

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleSubmit,
    handleBlur,
    setFieldError,
    validateField,
    setFieldTouched,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async (values, bag) => {
      try {
        await CheckEmail(values.email);

        console.log(values);
        bag.resetForm();
        setEmailStatus("idle");
      } catch (e) {
        bag.setErrors({ email: e.message });
      }
    },
    validationSchema: registerSchema,
  });

  const onHandleBlur = async (e) => {
    const value = e.target.value;

    setFieldTouched("email", true);

    try {
      setEmailStatus("loading");

      const is_valid_email = await CheckEmail(value);

      if (is_valid_email && validateField("email")) {
        return setEmailStatus("success");
      }
    } catch (e) {
      setFieldError("email", e.message);
      setEmailStatus("error");
    }
  };

  return (
    <div>
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <div className="email-wrapper">
            <input
              placeholder="e-mail address"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={onHandleBlur}
            />

            {emailStatus === "loading" && "Checking"}

            {!["idle", "loading"].includes(emailStatus) ? (
              emailStatus === "success" && !errors.email ? (
                <CheckCircle2 color="green" />
              ) : (
                <XCircle color="red" />
              )
            ) : null}
          </div>
          {errors.email && touched.email && (
            <div className="error">{errors.email}</div>
          )}
        </div>

        <div>
          <input
            placeholder="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password && (
            <div className="error">{errors.password}</div>
          )}
        </div>

        <div>
          <input
            placeholder="confirm password"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <div className="error">{errors.confirmPassword}</div>
          )}
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Loading..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Register;
